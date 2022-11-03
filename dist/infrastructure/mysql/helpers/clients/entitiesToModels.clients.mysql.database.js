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
    return {
        clients: clients
    };
}
exports.default = default_1;
