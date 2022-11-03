"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepFactory = void 0;
class CepFactory {
    preencheEndereco(cep) {
        const cepProvider = this.factoryMethod();
        return cepProvider.buscaEndereco(cep);
    }
}
exports.CepFactory = CepFactory;
