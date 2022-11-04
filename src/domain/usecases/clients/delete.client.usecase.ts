import { IClientsRepository } from "../../repository/clients.repository";
import clientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class DeleteClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: { id_client: number }): Promise<void> {
        return await this._repository.deleteById(data.id_client);
    }
}

export default new DeleteClientUseCase(
    clientsRepository
);