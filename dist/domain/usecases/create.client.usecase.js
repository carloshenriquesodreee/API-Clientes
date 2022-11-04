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
exports.CreateClientUseCase = void 0;
const clients_repository_1 = __importDefault(require("../../adapters/repositories/clients.repository"));
const viacepfactory_api_1 = require("../../infrastructure/apis/cep/viacepfactory.api");
const apicepfactory_api_1 = require("../../infrastructure/apis/cep/apicepfactory.api");
class CreateClientUseCase {
    constructor(_repository, _viaCep, _apiCep) {
        this._repository = _repository;
        this._viaCep = _viaCep;
        this._apiCep = _apiCep;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.addresses = yield this._viaCep.fillAddress(data.cep);
            if (!data.addresses) {
                data.addresses = yield this._apiCep.fillAddress(data.cep);
            }
            return yield this._repository.create(data);
        });
    }
}
exports.CreateClientUseCase = CreateClientUseCase;
exports.default = new CreateClientUseCase(clients_repository_1.default, new viacepfactory_api_1.ViaCepFactory(), new apicepfactory_api_1.ApiCepFactory());
