import express from 'express';
import debug from 'debug';
import jwt from 'jsonwebtoken';

const log: debug.IDebugger = debug('app:clients-middleware');

class AuthMiddleware {
    async checkAuth(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const token = req.header(`Authorization`)?.replace(`Bearer `, ``);

            if(!token){
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            } else {
                const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
                if(typeof decoded == `string`){
                    res.status(401).send({
                        error: `Usuario nao autenticado.`
                    });
                } else {
                    console.log(decoded.indexId);
                    next();
                }
            }

        } catch (err) {
            res.status(401).send({
                error: `Usuario nao autenticado.`
            });
        }
    }
}
export default new AuthMiddleware ();