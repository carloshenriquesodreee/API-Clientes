import { IAddressesEntity } from "./addresses.entity"

export interface IClientEntity {
    id_client: number,
    addresses?: IAddressesEntity,
    cep: string,
    name: string,
    cpf: String,
    PhoneNumber: number
}