"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const common_routes_1 = require("./common.routes");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
class AuthRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app.route(`/login`)
            .post(auth_controller_1.default.login);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
