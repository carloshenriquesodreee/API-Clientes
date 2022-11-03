"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const databaseConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: 'mysql'
};
exports.default = databaseConfig;
module.exports = databaseConfig;
