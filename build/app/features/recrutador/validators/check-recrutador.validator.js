"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRecrutadorValidator = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const usuario_model_1 = require("../../../models/usuario.model");
const checkRecrutadorValidator = (req, res, next) => {
    try {
        const usuario = req.headers["usuario"];
        if (!usuario) {
            return res.status(401).send({
                ok: false,
                message: "Usuario não logado",
            });
        }
        const decodedUsuario = JSON.parse(usuario);
        if (decodedUsuario.tipo !== usuario_model_1.TipoUsuario.Recrutador) {
            return res.status(403).send({
                ok: false,
                message: "Usuario não possui permissão",
            });
        }
        return next();
    }
    catch (error) {
        return api_error_1.ApiError.serverError(res, error);
    }
};
exports.checkRecrutadorValidator = checkRecrutadorValidator;
