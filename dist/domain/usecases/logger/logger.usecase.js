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
exports.LoggerAuthUseCase = void 0;
const users_repository_1 = __importDefault(require("../../../adapters/repositories/users.repository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoggerAuthUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._repository.readByWhere(data.email, data.password);
            if (user) {
                const token = jsonwebtoken_1.default.sign(user, String(process.env.SECRET_KEY), {
                    expiresIn: '10 days'
                });
                return {
                    user: user,
                    token: token
                };
            }
            return;
        });
    }
}
exports.LoggerAuthUseCase = LoggerAuthUseCase;
exports.default = new LoggerAuthUseCase(users_repository_1.default);
