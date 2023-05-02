"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginCandidatoValidator = void 0;
const usuario_model_1 = require("../../../models/usuario.model");
const api_error_1 = require("../../../shared/errors/api.error");
const checkLoginCandidatoValidator = (req, res, next) => {
    try {
        const usuario = req.headers["usuario"];
        if (!usuario) {
            return res.status(401).send({
                ok: false,
                message: "Usuário não está logado",
            });
        }
        const decodedUsuario = JSON.parse(usuario);
        if (decodedUsuario.tipo !== usuario_model_1.TipoUsuario.Candidato) {
            return res.status(403).send({
                ok: false,
                message: "Usuário não possui permissão",
            });
        }
        return next();
    }
    catch (error) {
        return api_error_1.ApiError.serverError(res, error);
    }
};
exports.checkLoginCandidatoValidator = checkLoginCandidatoValidator;
