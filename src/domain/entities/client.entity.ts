import { IAddressEntity } from "./andress.entity"

export interface IClientEntity {
    id_client: number,
    address?: IAddressEntity,
    cep: string,
    name: string,
    cpf: String,
    PhoneNumber: number
}