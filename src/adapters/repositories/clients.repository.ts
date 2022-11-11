import { IDatabaseModel } from "../../infrastructure/persistence/databaseModel.interface";
import { IClientEntity } from "../../domain/entities/client.entity";
import { MysqlDatabase } from "../../infrastructure/mysql/mysql.database";
import { IClientsRepository } from "../../domain/repository/clients.repository";
import * as Sequelize from 'sequelize';
import clientsModelsMysqlDatabase from "../../infrastructure/mysql/models/clients/clients.models.mysql.database";
import addressModelsMysqlDatabase from "../../infrastructure/mysql/models/addresses/addresses.models.mysql.database";
import modelToEntitiesClientsMysqlDatabase from "../../infrastructure/mysql/helpers/clients/modelToEntities.clients.mysql.database";
import entitiesToModelsClientsMysqlDatabase from "../../infrastructure/mysql/helpers/clients/entitiesToModels.clients.mysql.database";

export class ClientsRepository implements IClientsRepository {
    constructor(
        private _database: IDatabaseModel,
        private _modelClients: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelAddresses: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
    ){
        this._modelClients.hasOne(this._modelAddresses, {
            foreignKey: 'id_client',
            as: 'addresses',
            onDelete: "CASCADE"
            
        });
    }
    async readById(resourceId: number): Promise<IClientEntity | undefined> {
        const userOne = await this._database.read(this._modelClients, resourceId,  {
            include:[
                'addresses'
            ]
        });
        return modelToEntitiesClientsMysqlDatabase(userOne);
    }
    async create (resource: IClientEntity): Promise<IClientEntity> {
        const { clients, addresses } = entitiesToModelsClientsMysqlDatabase(resource)
        const modelClients = await this._database.create(this._modelClients,clients)

        if(addresses){
            addresses.id_client = modelClients.null;
            const modelAddress = await this._database.create(this._modelAddresses,addresses)
        }

        resource.id_client = modelClients.null;
        return resource;
    }
    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelAddresses, {id_client:resourceId});
        await this._database.delete(this._modelClients, {id_client:resourceId});

    }

    async list(): Promise<IClientEntity[]> {
        const clients = await this._database.list(this._modelClients, {include:[
            'addresses'
        ]});
        const client = clients.map(modelToEntitiesClientsMysqlDatabase);

        return client;
    }
    async updateById(resource: IClientEntity): Promise<IClientEntity | undefined> {
        
        let clientModel = await this._database.read(this._modelClients, resource.id_client!, {
            include: [
                'addresses'
            ]
        });
        const { clients, addresses} = entitiesToModelsClientsMysqlDatabase(resource);
        await this._database.update(clientModel, clients);

        if(addresses){
            await this._database.update(clientModel.getAddress(), addresses);
        }
        return resource;
    }
  
}

export default new ClientsRepository(
    MysqlDatabase.getInstance(),
    clientsModelsMysqlDatabase,
    addressModelsMysqlDatabase   
)