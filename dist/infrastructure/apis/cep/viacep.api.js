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
exports.ViaCep = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class ViaCep {
    buscaEndereco(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responseCep = yield (0, node_fetch_1.default)(`https://viacep.com.br/ws/${cep}/json/`);
                if (responseCep.status != 200)
                    return;
                const dataCep = yield responseCep.json();
                if ('erro' in dataCep)
                    return;
                return {
                    cep: dataCep.cep,
                    logradouro: dataCep.logradouro,
                    complemento: dataCep.complemento,
                    bairro: dataCep.bairro,
                    cidade: dataCep.localidade,
                    estado: dataCep.uf
                };
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.ViaCep = ViaCep;