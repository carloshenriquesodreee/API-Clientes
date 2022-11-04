import { IClientEntity } from "../../../../domain/entities/client.entity";

export default function (client: IClientEntity) {
    const clients = {
        id_client: client.id_client,
        name: client.name,
        cep: client.cep,
        cpf: client.cpf,
        PhoneNumber: client.PhoneNumber
    }
    let addresses = undefined;
    if('addresses' in client){
        addresses = { ...client.addresses, ...{ id_client: undefined } };
    }
    
    return {
        clients: clients,
        addresses: addresses
    };

}