"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRepository = void 0;
const mysql_database_1 = require("../../infrastructure/mysql/mysql.database");
const clients_models_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/models/clients/clients.models.mysql.database"));
const address_models_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/models/address/address.models.mysql.database"));
const modelToEntities_clients_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/helpers/clients/modelToEntities.clients.mysql.database"));
const entitiesToModels_clients_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/helpers/clients/entitiesToModels.clients.mysql.database"));
class ClientsRepository {
    constructor(_database, _modelClients, _modelAddress) {
        this._database = _database;
        this._modelClients = _modelClients;
        this._modelAddress = _modelAddress;
        this._modelClients.hasOne(this._modelAddress, {
            foreignKey: 'id_client',
            as: 'address'
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userOne = yield this._database.read(this._modelClients, resourceId);
            return (0, modelToEntities_clients_mysql_database_1.default)(userOne);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clients, address } = (0, entitiesToModels_clients_mysql_database_1.default)(resource);
            const modelClients = yield this._database.create(this._modelClients, clients);
            if (address) {
                address.id_client = modelClients.null;
                const modelAddress = yield this._database.create(this._modelAddress, address);
            }
            resource.id_client = modelClients.null;
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelClients, { id_client: resourceId });
            yield this._database.delete(this._modelAddress, { id_client: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield this._database.list(this._modelClients, { include: [
                    'clients',
                    'address'
                ] });
            const client = clients.map(modelToEntities_clients_mysql_database_1.default);
            return client;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientModel = yield this._database.read(this._modelClients, resource.id_client, {
                include: [
                    'address'
                ]
            });
            const { clients, address } = (0, entitiesToModels_clients_mysql_database_1.default)(resource);
            yield this._database.update(clientModel, clients);
            if (address) {
                yield this._database.update(clientModel.getAddress(), address);
            }
            return resource;
        });
    }
}
exports.ClientsRepository = ClientsRepository;
exports.default = new ClientsRepository(mysql_database_1.MysqlDatabase.getInstance(), clients_models_mysql_database_1.default, address_models_mysql_database_1.default);
