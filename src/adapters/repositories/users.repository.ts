import bcrypt from 'bcrypt'
import { MysqlDatabase } from "../../infrastructure/mysql/mysql.database";
import { IUserRepository } from "../../domain/repository/user.repository";
import * as Sequelize from 'sequelize';
import entitiesToModelsUsersMysqlDatabase from "../../infrastructure/mysql/helpers/users/entitiesToModels.users,mysql.database";
import modelToEntitiesUsersMysqlDatabase from "../../infrastructure/mysql/helpers/users/modelToEntities.users.mysql.database";
import { IUserEntity } from "../../domain/entities/user.entity";
import { IDatabaseModel } from "../../infrastructure/persistence/databaseModel.interface";
import usersModelsMysqlDatabase from "../../infrastructure/mysql/models/users/users.models.mysql.database";
import cryptoPassUser from "../helpers/crypto.pass.user";

export class UserRepository implements IUserRepository {
    constructor(
        private _database: IDatabaseModel,
        private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){}
        async create(resource: IUserEntity): Promise<IUserEntity> {
            resource.password = cryptoPassUser(resource.password);
            const { users } = entitiesToModelsUsersMysqlDatabase(resource);
            const modelUser = await this._database.create(this._modelUser, users);
            return modelToEntitiesUsersMysqlDatabase(resource)!;  
    }
    async readByWhere(email: string, password: string): Promise<IUserEntity | undefined> {
        try{
            const users = await this._database.readByWhere(this._modelUser, {
                email: email,
                password: password
            });
            
            return modelToEntitiesUsersMysqlDatabase(users);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }
    async list(): Promise<IUserEntity[]> {
        try {
            const users = await this._database.list(this._modelUser);
            const listOfUsers = users.map(modelToEntitiesUsersMysqlDatabase)
            return listOfUsers;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
    async listLogin(email: string, password: string): Promise<IUserEntity | undefined> {
        try {
            const foundUser: IUserEntity = await this._database.listOneByWhere(this._modelUser, {
                email: email
            });
            if (foundUser) {
                if (bcrypt.compareSync(password, foundUser.password)) {
                    return modelToEntitiesUsersMysqlDatabase(foundUser);
                } else {
                    return
                }
            } else {
                return
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}
export default new UserRepository(
    MysqlDatabase.getInstance(),
    usersModelsMysqlDatabase

)

