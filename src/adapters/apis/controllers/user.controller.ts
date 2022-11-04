import express from 'express';
import debug from 'debug';
import createUsecase from '../../../domain/usecases/users/create.usecase';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async createUser(req: express.Request, res: express.Response){
        const users = await createUsecase.execute(req.body);
        log(users);
        res.status(201).send(users);
}
}

export default new UsersController();