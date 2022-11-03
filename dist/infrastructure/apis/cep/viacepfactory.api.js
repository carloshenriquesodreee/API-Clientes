"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCepFactory = void 0;
const cepfactory_api_1 = require("../../../adapters/connectors/cepfactory.api");
const viacep_api_1 = require("./viacep.api");
class ViaCepFactory extends cepfactory_api_1.CepFactory {
    factoryMethod() {
        return new viacep_api_1.ViaCep();
    }
}
exports.ViaCepFactory = ViaCepFactory;
