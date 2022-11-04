import { IClientEntity } from "../../entities/client.entity";
import { IClientsRepository } from "../../repository/clients.repository";
import clientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class UpdateClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: IClientEntity): Promise<IClientEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateClientUseCase(
    clientsRepository
);