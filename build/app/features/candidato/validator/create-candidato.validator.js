"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCandidatoValidator = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const request_error_1 = require("../../../shared/errors/request.error");
class CreateCandidatoValidator {
    static async validate(req, res, next) {
        try {
            const { nome, username, password } = req.body;
            if (!nome) {
                request_error_1.RequestError.fieldNotProvided(res, "Name");
            }
            if (!username) {
                request_error_1.RequestError.fieldNotProvided(res, "Username");
            }
            if (!password) {
                request_error_1.RequestError.fieldNotProvided(res, "Password");
            }
            //to do - fazer validação separada
            next();
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.CreateCandidatoValidator = CreateCandidatoValidator;
