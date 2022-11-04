"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(client) {
    if (!client)
        return;
    let clients = {
        id_client: client.id_client,
        name: client.name,
        cep: client.cep,
        cpf: client.cpf,
        PhoneNumber: client.PhoneNumber
    };
    if (client.logged) {
        clients.id_client = client.id_client;
        clients.name = client.name;
        clients.cep = client.cep;
        clients.cpf = client.cpf;
        clients.PhoneNumber = client.PhoneNumber;
    }
    if (client.address) {
        clients.address = {
            cep: client.address.cep,
            logradouro: client.address.logradouro,
            complemento: client.address.complemento,
            bairro: client.address.bairro,
            cidade: client.address.cidade,
            estado: client.address.estado
        };
    }
    return clients;
}
exports.default = default_1;
