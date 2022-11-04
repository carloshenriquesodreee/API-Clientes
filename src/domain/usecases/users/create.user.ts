import { IUserEntity } from "../../entities/user.entity";
import { IUseCase } from "../usecase.interface";
import { IUserRepository } from "../../repository/user.repository";
import usersRepository from "../../../adapters/repositories/users.repository";


class CreateUserUseCase implements IUseCase {

    constructor(private _repository: IUserRepository) {
    
        }
    
        async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
            return await this._repository.create(data);
        }
    }
    export default new CreateUserUseCase(
        usersRepository
    )