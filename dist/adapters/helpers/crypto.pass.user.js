"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
function default_1(password) {
    const passSecure = bcrypt_1.default.hashSync(password, 10);
    return passSecure;
}
exports.default = default_1;
