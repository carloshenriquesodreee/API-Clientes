import { IDatabaseModel } from "../../infrastructure/persistence/databaseModel.interface";
import { IClientEntity } from "../../domain/entities/client.entity";
import { MysqlDatabase } from "../../infrastructure/mysql/mysql.database";
import { IClientsRepository } from "../../domain/repository/clients.repository";
import * as Sequelize from 'sequelize';
import clientsModelsMysqlDatabase from "../../infrastructure/mysql/models/clients/clients.models.mysql.database";
import addressModelsMysqlDatabase from "../../infrastructure/mysql/models/address/address.models.mysql.database";
import modelToEntitiesClientsMysqlDatabase from "../../infrastructure/mysql/helpers/clients/modelToEntities.clients.mysql.database";
import entitiesToModelsClientsMysqlDatabase from "../../infrastructure/mysql/helpers/clients/entitiesToModels.clients.mysql.database";

export class ClientsRepository implements IClientsRepository {
    constructor(
        private _database: IDatabaseModel,
        private _modelClients: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelAddress: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
    ){
        this._modelClients.hasOne(this._modelAddress, {
            foreignKey: 'id_client',
            as: 'address'
        });
    }
    async readById(resourceId: number): Promise<IClientEntity | undefined> {
        const userOne = await this._database.read(this._modelClients, resourceId);
        return modelToEntitiesClientsMysqlDatabase(userOne);
    }
    async create (resource: IClientEntity): Promise<IClientEntity> {
        const { clients, address } = entitiesToModelsClientsMysqlDatabase(resource)
        const modelClients = await this._database.create(this._modelClients,clients)

        if(address){
            address.id_client = modelClients.null;
            const modelAddress = await this._database.create(this._modelAddress,address)
        }

        resource.id_client = modelClients.null;
        return resource;
    }
    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelClients, {id_client:resourceId});
        await this._database.delete(this._modelAddress, {id_client:resourceId});
    }
    async list(): Promise<IClientEntity[]> {
        const clients = await this._database.list(this._modelClients, {include:[
            'clients',
            'address'
        ]});
        const client = clients.map(modelToEntitiesClientsMysqlDatabase);

        return client;
    }
    async updateById(resource: IClientEntity): Promise<IClientEntity | undefined> {
        
        let clientModel = await this._database.read(this._modelClients, resource.id_client!, {
            include: [
                'address'
            ]
        });
        const { clients, address} = entitiesToModelsClientsMysqlDatabase(resource);
        await this._database.update(clientModel, clients);

        if(address){
            await this._database.update(clientModel.getAddress(), address);
        }
        return resource;
    }
  
}

export default new ClientsRepository(
    MysqlDatabase.getInstance(),
    clientsModelsMysqlDatabase,
    addressModelsMysqlDatabase   
)