import { IUserRepository } from "../../repository/user.repository";
import { IUseCase } from "../usecase.interface";
import usersRepository from "../../../adapters/repositories/users.repository";
import jwt from 'jsonwebtoken';

export class LoggerAuthUseCase implements IUseCase {
    constructor(private _repository: IUserRepository){

    }

    async execute(data: { email: string, password: string }) {
        const user = await this._repository.readByWhere(data.email, data.password);

        if(user){

            const token = jwt.sign(user, String(process.env.SECRET_KEY), {
                expiresIn: '10 days'
            });

            return {
                user: user,
                token: token
            };
        }

        return;
    }
}

export default new LoggerAuthUseCase(
    usersRepository 
);