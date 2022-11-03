"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCepFactory = void 0;
const cepfactory_api_1 = require("../../../adapters/connectors/cepfactory.api");
const apicep_api_1 = require("./apicep.api");
class ApiCepFactory extends cepfactory_api_1.CepFactory {
    factoryMethod() {
        return new apicep_api_1.ApiCep();
    }
}
exports.ApiCepFactory = ApiCepFactory;
