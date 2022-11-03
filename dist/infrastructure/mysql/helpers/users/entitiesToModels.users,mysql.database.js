"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    const users = {
        id_user: user.id_user,
        name: user.name,
        email: user.email,
        password: user.password
    };
    return {
        users: users
    };
}
exports.default = default_1;
