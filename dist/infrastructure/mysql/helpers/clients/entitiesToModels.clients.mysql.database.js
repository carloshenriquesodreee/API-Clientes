"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(client) {
    const clients = {
        id_client: client.id_client,
        name: client.name,
        cep: client.cep,
        cpf: client.cpf,
        PhoneNumber: client.PhoneNumber
    };
    let address = undefined;
    if ('address' in client) {
        address = Object.assign(Object.assign({}, client.address), { id_client: undefined });
    }
    return {
        clients: clients,
        address: address
    };
}
exports.default = default_1;
