import express from 'express';
import clientsController from '../controllers/clients.controller';
import userController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';
import userMiddleware from '../middlewares/user.middleware';
// import userMiddleware from '../middlewares/user.middleware';
import { CommonRoutesConfig } from './common.routes';

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/user`)
        .post(
            userMiddleware.validateEmailRepeat,
            userController.createUser) 

        return this.app
    }
}    