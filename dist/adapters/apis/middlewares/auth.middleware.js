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
const debug_1 = __importDefault(require("debug"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const log = (0, debug_1.default)('app:clients-middleware');
class AuthMiddleware {
    checkAuth(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = (_a = req.header(`Authorization`)) === null || _a === void 0 ? void 0 : _a.replace(`Bearer `, ``);
                if (!token) {
                    res.status(401).send({
                        error: `Usuario nao autenticado.`
                    });
                }
                else {
                    const decoded = jsonwebtoken_1.default.verify(token, String(process.env.SECRET_KEY));
                    if (typeof decoded == `string`) {
                        res.status(401).send({
                            error: `Usuario nao autenticado.`
                        });
                    }
                    else {
                        console.log(decoded.indexId);
                        next();
                    }
                }
            }
            catch (err) {
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            }
        });
    }
}
exports.default = new AuthMiddleware();
