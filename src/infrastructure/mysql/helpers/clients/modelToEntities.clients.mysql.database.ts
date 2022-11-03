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
    if(client.address){
        clients.address = {
            cep: client.address.cep,
            logradouro: client.address.logradouro,
            complemento: client.address.complemento,
            bairro: client.address.bairro,
            cidade: client.address.cidade,
            estado: client.address.estado
        }
    }

    return (clients as IClientEntity);
}