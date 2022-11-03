"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(user) {
    if (!user)
        return;
    let users = {
        id_user: user.id_user,
        name: user.name,
        email: user.email,
        password: user.password
    };
    if (user.logged) {
        users.id_user = user.id_user;
        users.name = user.name;
        users.email = user.email;
        users.password = user.password;
    }
    return users;
}
exports.default = default_1;
