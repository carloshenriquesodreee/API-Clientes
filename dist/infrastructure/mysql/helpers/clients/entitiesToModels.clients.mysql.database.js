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
    let addresses = undefined;
    if ('addresses' in client) {
        addresses = Object.assign(Object.assign({}, client.addresses), { id_client: undefined });
    }
    return {
        clients: clients,
        addresses: addresses
    };
}
exports.default = default_1;
