import express from 'express';
import createClientUsecase from '../../../domain/usecases/create.client.usecase';
import readClientUsecase from '../../../domain/usecases/read.client.usecase';
import updateClientUsecase from '../../../domain/usecases/update.client.usecase';
import deleteClientUsecase from '../../../domain/usecases/delete.client.usecase';
import listClientUsecase from '../../../domain/usecases/list.client.usecase';
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-controller');

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await listClientUsecase.execute();
        res.status(200).send(clients);
    }

    async getClientById(req: express.Request, res: express.Response) {
        const client = await readClientUsecase.execute({
            id_client: Number(req.params.id_client)
        });
        res.status(200).send(client);
    }

    async createClient(req: express.Request, res: express.Response) {
        const client = await createClientUsecase.execute(req.body);
        log(client);
        res.status(201).send(client);
    }

    async updateClient(req: express.Request, res: express.Response) {
        const client = await updateClientUsecase.execute(req.body);
        res.status(200).send(client);
    }

    async removeClient(req: express.Request, res: express.Response) {
        const client = await deleteClientUsecase.execute({
            id_client: Number(req.params.id_client)
        });
        res.status(204).send();
    }

    async createClientBulk(req: express.Request, res: express.Response) {
        let countClients = 0;
        for(countClients = 0; countClients < req.body.fileData.length; countClients++){
            await createClientUsecase.execute(req.body.fileData[countClients]);
        }
        res.status(201).send({
            createdClients: countClients
        });
    }
}

export default new ClientsController();