import express from 'express';
import debug from 'debug';
import  LoggerAuthUseCase  from '../../../domain/usecases/logger/logger.usecase';

const log: debug.IDebugger = debug('app:auth-controller');

class AuthController {
    async login(req: express.Request, res: express.Response){
        const users = await LoggerAuthUseCase.execute(req.body);
        if(users){
            res.status(200).send(users);
        } else {
            res.status(401).send({
                error: `Dados incorretos.`
            });
        }
        
    }
}

export default new AuthController();