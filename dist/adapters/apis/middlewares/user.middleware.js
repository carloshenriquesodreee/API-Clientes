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
// import clientsService from '../../common/services/clients.service';
const debug_1 = __importDefault(require("debug"));
const list_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/list.user.usecase"));
const log = (0, debug_1.default)('app:clients-middleware');
class userMiddleware {
    validateEmailRepeat(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield list_user_usecase_1.default.execute();
            const repeat = users === null || users === void 0 ? void 0 : users.find(user => user.email === request.body.email);
            if (!repeat) {
                next();
            }
            else {
                response.status(404).send('email repetido');
            }
        });
    }
}
exports.default = new userMiddleware();
