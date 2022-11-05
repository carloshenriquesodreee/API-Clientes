"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
// import userMiddleware from '../middlewares/user.middleware';
const common_routes_1 = require("./common.routes");
class UserRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/user`)
            .post(user_middleware_1.default.validateEmailRepeat, user_controller_1.default.createUser);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
