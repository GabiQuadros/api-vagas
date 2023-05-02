"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacaoUsecase = void 0;
const candidatura_models_1 = require("../../../models/candidatura.models");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
const vaga_repository_1 = require("../../vaga/database/vaga.repository");
const candidatura_database_1 = require("../database/candidatura.database");
const aplicacao_validator_1 = require("../validator/aplicacao.validator");
class AplicacaoUsecase {
    async execute(data) {
        const usuarioRepository = new usuario_repository_1.UsuarioRepository();
        const candidato = await usuarioRepository.get(data.idCandidato);
        if (!candidato) {
            return {
                ok: false,
                code: 404,
                message: "Candidato não encontrado",
            };
        }
        const vagasRepository = new vaga_repository_1.VagaRepository();
        const vaga = await vagasRepository.get(data.idVaga);
        if (!vaga) {
            return {
                ok: false,
                code: 404,
                message: "Vaga não encontrada",
            };
        }
        const result = aplicacao_validator_1.AplicacaoValidator.validateVaga(vaga);
        if (!result.ok) {
            return result;
        }
        const repository = new candidatura_database_1.CandidaturaRepository();
        const candidatos = await repository.listByVaga({ idVaga: vaga.id });
        if (vaga.maxCandidatos) {
            if (candidatos.length >= vaga.maxCandidatos) {
                return {
                    ok: false,
                    code: 400,
                    message: "Já alcançou o limite de candidaturas.",
                };
            }
        }
        if (aplicacao_validator_1.AplicacaoValidator.candidaturaDuplicada(candidatos, data.idCandidato)) {
            return {
                ok: false,
                code: 400,
                message: "Você já se candidatou à esta vaga.",
            };
        }
        const newCandidatura = new candidatura_models_1.Candidatura(new Date(), false, candidato, vaga);
        await repository.create(newCandidatura);
        await new cache_repository_1.CacheRepository().delete(`listaCandidatura:${data.idCandidato}`);
        await new cache_repository_1.CacheRepository().delete(`listaCandidaturas`);
        return {
            ok: true,
            code: 201,
            message: "Você se candidatou a vaga com sucesso",
        };
    }
}
exports.AplicacaoUsecase = AplicacaoUsecase;
