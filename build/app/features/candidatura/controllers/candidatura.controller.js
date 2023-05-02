"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidaturaController = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const usecases_1 = require("../usecases");
class CandidaturaController {
    async create(req, res) {
        try {
            const { idVaga } = req.body;
            const candidato = req.headers["usuario"];
            const candidatoDecoded = JSON.parse(candidato);
            const result = await new usecases_1.AplicacaoUsecase().execute({
                idVaga,
                idCandidato: candidatoDecoded._id,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            api_error_1.ApiError.serverError(res, error);
        }
    }
    async listCandidaturas(req, res) {
        try {
            const candidato = req.headers["usuario"];
            const candidatoDecoded = JSON.parse(candidato);
            const result = await new usecases_1.ListarCandidaturasUsecase().execute(candidatoDecoded._id);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return api_error_1.ApiError.serverError(res, error);
        }
    }
    async listAllCandidaturas(req, res) {
        try {
            const result = await new usecases_1.ListAllCandidaturasUsecase().execute();
            return res.status(result.code).send(result);
        }
        catch (error) {
            return api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.CandidaturaController = CandidaturaController;
