import { IClientEntity } from "../entities/client.entity";
import { IClientsRepository } from "../repository/clients.repository";
import clientsRepository from "../../adapters/repositories/clients.repository";
import { IUseCase } from "./usecase.interface";

class ListClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(): Promise<IClientEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListClientUseCase(
    clientsRepository
);