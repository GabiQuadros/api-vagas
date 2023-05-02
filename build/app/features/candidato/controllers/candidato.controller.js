"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatoController = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const create_candidato_usecase_1 = require("../usecases/create.candidato.usecase");
const list_candidatos_usecase_1 = require("../usecases/list.candidatos.usecase");
class CandidatoController {
    async create(req, res) {
        try {
            const { nome, username, password } = req.body;
            const result = await new create_candidato_usecase_1.CreateCandidatoUsecase().execute(req.body);
            return res.status(result.code).send(result);
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
    async list(req, res) {
        try {
            const result = await new list_candidatos_usecase_1.ListCandidatoUsecase().execute();
            return res.status(result.code).send(result);
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.CandidatoController = CandidatoController;
