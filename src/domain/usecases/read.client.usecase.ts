import { IClientEntity } from "../entities/client.entity";
import { IClientsRepository } from "../repository/clients.repository";
import clientsRepository from "../../adapters/repositories/clients.repository";
import { IUseCase } from "./usecase.interface";

class ReadClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: { id_client: number }): Promise<IClientEntity | undefined> {
        return await this._repository.readById(data.id_client);
    }
}

export default new ReadClientUseCase(
    clientsRepository
);