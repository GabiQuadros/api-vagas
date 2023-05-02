"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginValidator = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const jwt_adapter_1 = require("../../../shared/util/jwt.adapter");
const checkLoginValidator = (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        req.headers["usuario"] = "";
        if (!token) {
            return res.status(401).send({
                ok: false,
                message: "Token não foi informado",
            });
        }
        const usuario = jwt_adapter_1.JwtAdapter.checkToken(token);
        req.headers["usuario"] = JSON.stringify(usuario);
        return next();
    }
    catch (error) {
        return api_error_1.ApiError.serverError(res, error);
    }
};
exports.checkLoginValidator = checkLoginValidator;
