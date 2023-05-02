"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecrutadorValidator = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const request_error_1 = require("../../../shared/errors/request.error");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
const usuario_model_1 = require("../../../models/usuario.model");
class CreateRecrutadorValidator {
    static async validate(req, res, next) {
        try {
            const { nome, username, password, nomeEmpresa } = req.body;
            if (!nome) {
                request_error_1.RequestError.fieldNotProvided(res, "Name");
            }
            if (!username) {
                request_error_1.RequestError.fieldNotProvided(res, "Username");
            }
            if (!password) {
                request_error_1.RequestError.fieldNotProvided(res, "Password");
            }
            if (!nomeEmpresa) {
                request_error_1.RequestError.fieldNotProvided(res, "Company name");
            }
            const repository = new usuario_repository_1.UsuarioRepository();
            const usuario = await repository.getByUsernameAndType(username, usuario_model_1.TipoUsuario.Recrutador);
            if (usuario !== null) {
                request_error_1.RequestError.invalidData(res, "Username já existe!");
            }
            next();
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.CreateRecrutadorValidator = CreateRecrutadorValidator;
