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
const debug_1 = __importDefault(require("debug"));
const create_usecase_1 = __importDefault(require("../../../domain/usecases/users/create.usecase"));
const list_user_usecase_1 = __importDefault(require("../../../domain/usecases/users/list.user.usecase"));
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield create_usecase_1.default.execute(req.body);
            log(users);
            res.status(201).send(users);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield list_user_usecase_1.default.execute();
            response.status(200).send(users);
        });
    }
}
exports.default = new UsersController();
