"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarCandidaturasUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const candidatura_database_1 = require("../database/candidatura.database");
class ListarCandidaturasUsecase {
    async execute(idCandidato) {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get(`listaCandidatura:${idCandidato}`);
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Candidaturas obtidas com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const repository = new candidatura_database_1.CandidaturaRepository();
        const listaCandidaturas = await repository.getById(idCandidato);
        await cacheRepository.set(`listaCandidatura:${idCandidato}`, listaCandidaturas);
        if (!listaCandidaturas) {
            return {
                ok: false,
                code: 404,
                message: "Candidaturas não encontradas",
            };
        }
        return {
            ok: true,
            code: 200,
            message: "Candidaturas obtidas com sucesso!",
            data: listaCandidaturas,
        };
    }
}
exports.ListarCandidaturasUsecase = ListarCandidaturasUsecase;
