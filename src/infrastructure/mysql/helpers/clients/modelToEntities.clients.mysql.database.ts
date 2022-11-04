import { IClientEntity } from "../../../../domain/entities/client.entity";

export default function (client: any): IClientEntity | undefined {
    if(!client)
    return

    let clients: IClientEntity = {
        id_client: client.id_client,
        name: client.name,
        cep:client.cep,
        cpf:client.cpf,
        PhoneNumber: client.PhoneNumber
    }

    if(client.logged){
        (clients as IClientEntity).id_client = client.id_client;
        (clients as IClientEntity).name = client.name;
        (clients as IClientEntity).cep = client.cep;
        (clients as IClientEntity).cpf = client.cpf;
        (clients as IClientEntity).PhoneNumber = client.PhoneNumber;
    }
    if(client.addresses){
        clients.addresses = {
            cep: client.addresses.cep,
            logradouro: client.addresses.logradouro,
            complemento: client.addresses.complemento,
            bairro: client.addresses.bairro,
            cidade: client.addresses.cidade,
            estado: client.addresses.estado
        }
    }

    return (clients as IClientEntity);
}