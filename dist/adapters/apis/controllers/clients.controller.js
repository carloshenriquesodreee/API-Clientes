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
const create_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/create.client.usecase"));
const read_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/read.client.usecase"));
const update_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/update.client.usecase"));
const delete_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/delete.client.usecase"));
const list_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/list.client.usecase"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:clients-controller');
class ClientsController {
    listClients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield list_client_usecase_1.default.execute();
            res.status(200).send(clients);
        });
    }
    getClientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield read_client_usecase_1.default.execute({
                id_client: Number(req.params.id_client)
            });
            res.status(200).send(client);
        });
    }
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield create_client_usecase_1.default.execute(req.body);
            log(client);
            res.status(201).send(client);
        });
    }
    updateClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield update_client_usecase_1.default.execute(req.body);
            res.status(200).send(client);
        });
    }
    removeClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield delete_client_usecase_1.default.execute({
                id_client: Number(req.params.id_client)
            });
            res.status(204).send();
        });
    }
    createClientBulk(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let countClients = 0;
            for (countClients = 0; countClients < req.body.fileData.length; countClients++) {
                yield create_client_usecase_1.default.execute(req.body.fileData[countClients]);
            }
            res.status(201).send({
                createdClients: countClients
            });
        });
    }
}
exports.default = new ClientsController();
