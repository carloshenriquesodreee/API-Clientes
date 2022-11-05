"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const common_routes_1 = require("./common.routes");
class UserRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/user`)
            .post(user_middleware_1.default.validateRegister, user_middleware_1.default.validateClientRepeated, user_middleware_1.default.validateRequiredClientBodyFields, 
        //userMiddleware.valitateUserExists,
        user_controller_1.default.createUser);
        this.app.route(`/user/:id_user`)
            .get(auth_middleware_1.default.checkAuth, 
        //userMiddleware.valitateUserExists,
        user_controller_1.default.getUsersById);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
