import express from 'express';
import clientsController from "../controllers/clients.controller";
import { CommonRoutesConfig } from "./common.routes";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
            .get(clientsController.listClients)
            .post(clientsController.createClient)
    
        this.app.route(`/clients/:id_client`)
            .get(clientsController.getClientById)
            .put(clientsController.updateClient)
            .delete(clientsController.removeClient);

            return this.app
        }
}