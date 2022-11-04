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
    if (client.addresses) {
        clients.addresses = {
            cep: client.addresses.cep,
            logradouro: client.addresses.logradouro,
            complemento: client.addresses.complemento,
            bairro: client.addresses.bairro,
            cidade: client.addresses.cidade,
            estado: client.addresses.estado
        };
    }
    return clients;
}
exports.default = default_1;
