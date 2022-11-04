import { IClientEntity } from "../entities/client.entity";
import { IClientsRepository } from "../repository/clients.repository";
import clientsRepository from "../../adapters/repositories/clients.repository";
import { IUseCase } from "./usecase.interface";
import { ViaCepFactory } from "../../infrastructure/apis/cep/viacepfactory.api";
import { ApiCepFactory } from "../../infrastructure/apis/cep/apicepfactory.api";
import { CepFactory } from "../../adapters/connectors/cepfactory.api";

export class CreateClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository, private _viaCep: CepFactory, private _apiCep: CepFactory) {

    }
    async execute(data: IClientEntity): Promise<IClientEntity | undefined> {
        data.address = await this._viaCep.fillAddress(data.cep);
        
        if(!data.address){
            data.address = await this._apiCep.fillAddress(data.cep);
        }
        return await this._repository.create(data);
    }
}

export default new CreateClientUseCase(
    clientsRepository,
    new ViaCepFactory(),
    new ApiCepFactory()
);