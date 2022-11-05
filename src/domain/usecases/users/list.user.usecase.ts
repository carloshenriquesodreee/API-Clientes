import usersRepository from "../../../adapters/repositories/users.repository";
import { IUserEntity } from "../../entities/user.entity";
import { IUserRepository } from "../../repository/user.repository";
import { IUseCase } from "../usecase.interface";

export class ListUsersUseCase implements IUseCase {
    constructor(private _repository: IUserRepository) {
    }
    async execute(): Promise<IUserEntity[] | undefined> {
        return await this._repository.list()
    }
}

export default new ListUsersUseCase(usersRepository)