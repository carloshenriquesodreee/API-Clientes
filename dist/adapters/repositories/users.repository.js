"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mysql_database_1 = require("../../infrastructure/mysql/mysql.database");
const entitiesToModels_users_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/helpers/users/entitiesToModels.users,mysql.database"));
const modelToEntities_users_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/helpers/users/modelToEntities.users.mysql.database"));
const users_models_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/models/users/users.models.mysql.database"));
const crypto_pass_user_1 = __importDefault(require("../helpers/crypto.pass.user"));
class UserRepository {
    constructor(_database, _modelUser) {
        this._database = _database;
        this._modelUser = _modelUser;
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            resource.password = (0, crypto_pass_user_1.default)(resource.password);
            const { users } = (0, entitiesToModels_users_mysql_database_1.default)(resource);
            const modelUser = yield this._database.create(this._modelUser, users);
            return (0, modelToEntities_users_mysql_database_1.default)(resource);
        });
    }
    readByWhere(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this._database.readByWhere(this._modelUser, {
                    email: email,
                    password: password
                });
                return (0, modelToEntities_users_mysql_database_1.default)(users);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this._database.list(this._modelUser);
                const listOfUsers = users.map(modelToEntities_users_mysql_database_1.default);
                return listOfUsers;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    listLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUser = yield this._database.listOneByWhere(this._modelUser, {
                    email: email
                });
                if (foundUser) {
                    if (bcrypt_1.default.compareSync(password, foundUser.password)) {
                        return (0, modelToEntities_users_mysql_database_1.default)(foundUser);
                    }
                    else {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserRepository = UserRepository;
exports.default = new UserRepository(mysql_database_1.MysqlDatabase.getInstance(), users_models_mysql_database_1.default);
