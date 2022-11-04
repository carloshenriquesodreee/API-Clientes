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
exports.ApiCep = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class ApiCep {
    searchAddress(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responseCep = yield (0, node_fetch_1.default)(`https://cdn.apicep.com/file/apicep/${cep.slice(0, 5)}-${cep.slice(5, 8)}.json`);
                if (responseCep.status != 200)
                    return;
                const dateCep = yield responseCep.json();
                return {
                    cep: dateCep.code,
                    logradouro: dateCep.addresses,
                    bairro: dateCep.district,
                    cidade: dateCep.city,
                    estado: dateCep.state
                };
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.ApiCep = ApiCep;
