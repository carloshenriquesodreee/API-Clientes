import express from 'express';
// import clientsService from '../../common/services/clients.service';

import debug from 'debug';
import listUserUsecase from '../../../domain/usecases/users/list.user.usecase';


const log: debug.IDebugger = debug('app:clients-middleware');

class userMiddleware{
    async validateEmailRepeat(request: express.Request, response: express.Response, next: express.NextFunction) {
        const users = await listUserUsecase.execute();
        const repeat = users?.find(user => user.email === request.body.email);
        if (!repeat) {
            next()
        } else {
            response.status(404).send( 'E-mail informado já cadastrado')
        }
    }
}
export default new userMiddleware();