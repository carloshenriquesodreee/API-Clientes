"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const clients_controller_1 = __importDefault(require("../controllers/clients.controller"));
const common_routes_1 = require("./common.routes");
class ClientsRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/clients`)
            .get(clients_controller_1.default.listClients)
            .post(clients_controller_1.default.createClient);
        this.app.route(`/clients/:id_client`)
            .get(clients_controller_1.default.getClientById)
            .put(clients_controller_1.default.updateClient)
            .delete(clients_controller_1.default.removeClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
