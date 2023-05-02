"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecrutadorController = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const list_recrutadores_usecase_1 = require("../usecases/list.recrutadores.usecase");
const create_recrutador_usecase_1 = require("../usecases/create-recrutador.usecase");
class RecrutadorController {
    async list(req, res) {
        try {
            const result = await new list_recrutadores_usecase_1.ListRecrutadoresUsecase().execute();
            return res.status(200).send(result);
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
    async create(req, res) {
        try {
            const { nome, username, password, nomeEmpresa } = req.body;
            const result = await new create_recrutador_usecase_1.CreateRecrutadorUsecase().execute(req.body);
            return res.status(result.code).send(result);
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.RecrutadorController = RecrutadorController;
