"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let convertUser = {
        id_user: user.id_user,
        name: user.name,
        email: user.email,
        password: user.password
    };
    return convertUser;
}
exports.default = default_1;
