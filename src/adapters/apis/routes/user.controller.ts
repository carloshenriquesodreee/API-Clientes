import express from 'express';
import userController from '../controllers/user.controller';
import { CommonRoutesConfig } from './common.routes';

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/user`)
        .post(userController.createUser) 
        return this.app
    }
}    