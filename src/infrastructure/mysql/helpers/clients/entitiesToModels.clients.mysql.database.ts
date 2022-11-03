import { IClientEntity } from "../../../../domain/entities/client.entity";

export default function (client: IClientEntity) {
    const clients = {
        id_client: client.id_client,
        name: client.name,
        cep: client.cep,
        cpf: client.cpf,
        PhoneNumber: client.PhoneNumber
    }

    return{
        clients: clients
    }
}