import express from 'express';
import debug from 'debug';
import createUsecase from '../../../domain/usecases/users/create.usecase';
import listUserUsecase from '../../../domain/usecases/users/list.user.usecase';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async createUser(req: express.Request, res: express.Response) {
        const users = await createUsecase.execute(req.body);
        log(users);
        res.status(201).send(users);
    }
    async list(request: express.Request, response: express.Response) {
        const users = await listUserUsecase.execute();
        response.status(200).send(users);
    }
}

export default new UsersController();