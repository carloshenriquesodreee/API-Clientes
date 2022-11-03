"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.MysqlDatabase = void 0;
const Sequelize = __importStar(require("sequelize"));
const database_config_1 = __importDefault(require("../config/database.config"));
class MysqlDatabase {
    constructor() {
        this._db = database_config_1.default.database;
        this._username = database_config_1.default.username;
        this._password = database_config_1.default.password;
        this._host = database_config_1.default.host;
        this._dialect = 'mysql';
        this._port = Number(database_config_1.default.port);
        this._adapter = new Sequelize.Sequelize(this._db, this._username, this._password, {
            host: this._host,
            dialect: this._dialect,
            port: this._port
        });
    }
    static getInstance() {
        if (!MysqlDatabase._instance) {
            MysqlDatabase._instance = new MysqlDatabase();
        }
        return MysqlDatabase._instance;
    }
    create(model, data) {
        return model.create(data);
    }
    update(model, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield model.update(data);
            return model.save();
        });
    }
    list(model, includes) {
        return model.findAll(includes);
    }
    delete(model, dataWhere) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield model.destroy({
                where: dataWhere
            });
            return (result > 0);
        });
    }
    read(model, dataId, includes) {
        return model.findByPk(dataId, includes);
    }
    createModel(name, properties) {
        return this._adapter.define(name, properties, {
            timestamps: false
        });
    }
}
exports.MysqlDatabase = MysqlDatabase;
