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
const mysql_database_1 = require("../../infrastructure/mysql/mysql.database");
const entitiesToModels_users_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/helpers/users/entitiesToModels.users,mysql.database"));
const modelToEntities_users_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/helpers/users/modelToEntities.users.mysql.database"));
const users_models_mysql_database_1 = __importDefault(require("../../infrastructure/mysql/models/users/users.models.mysql.database"));
class UserRepository {
    constructor(_database, _modelUser) {
        this._database = _database;
        this._modelUser = _modelUser;
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { users } = (0, entitiesToModels_users_mysql_database_1.default)(resource);
            const modelUser = yield this._database.create(this._modelUser, users);
            resource.id_user = modelUser.null;
            return modelUser;
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
}
exports.UserRepository = UserRepository;
exports.default = new UserRepository(mysql_database_1.MysqlDatabase.getInstance(), users_models_mysql_database_1.default);
