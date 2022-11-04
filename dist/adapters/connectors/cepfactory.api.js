"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepFactory = void 0;
class CepFactory {
    fillAddress(cep) {
        const cepProvider = this.factoryMethod();
        return cepProvider.searchAddress(cep);
    }
}
exports.CepFactory = CepFactory;
