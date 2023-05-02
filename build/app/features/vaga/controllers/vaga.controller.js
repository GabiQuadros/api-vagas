"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaController = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const list_vagas_usecase_1 = require("../usecases/list-vagas.usecase");
const create_vaga_usecase_1 = require("../usecases/create-vaga.usecase");
const list_vaga_usecase_1 = require("../usecases/list-vaga.usecase");
class VagaController {
    async listAllVagas(req, res) {
        try {
            const usecase = new list_vagas_usecase_1.ListVagasUsecase();
            const result = await usecase.execute();
            return res.status(result.code).send(result);
        }
        catch (error) {
            return api_error_1.ApiError.serverError(res, error);
        }
    }
    async getVaga(req, res) {
        try {
            const { idVaga } = req.params;
            console.log(idVaga);
            const usecase = new list_vaga_usecase_1.ListarVagaUsecase();
            const result = await usecase.execute(idVaga);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return api_error_1.ApiError.serverError(res, error);
        }
    }
    async create(req, res) {
        try {
            const { descricao, nomeEmpresa, dtLimite, indAtivo, maxCandidatos } = req.body;
            const usuario = req.headers["usuario"];
            const usuarioDecoded = JSON.parse(usuario);
            const usecase = new create_vaga_usecase_1.CreateVagaUsecase();
            const result = await usecase.execute({
                descricao,
                nomeEmpresa,
                dtLimite,
                indAtivo,
                maxCandidatos,
                idRecrutador: usuarioDecoded.id,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.VagaController = VagaController;
