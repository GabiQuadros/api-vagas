"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllCandidaturasUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const candidatura_database_1 = require("../database/candidatura.database");
class ListAllCandidaturasUsecase {
    async execute() {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get("listaCandidaturas");
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Lista de candidaturas obtidas com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const candidaturaRepository = new candidatura_database_1.CandidaturaRepository();
        const listaCandidaturas = await candidaturaRepository.listAll();
        // console.log(listaCandidaturas);
        const result = await cacheRepository.set(`listaCandidaturas`, listaCandidaturas);
        if (!listaCandidaturas) {
            return {
                ok: false,
                code: 404,
                message: "Candidaturas não encontradas.",
            };
        }
        return {
            ok: true,
            code: 200,
            message: "Candidaturas listadas com sucesso!",
            data: listaCandidaturas,
        };
    }
}
exports.ListAllCandidaturasUsecase = ListAllCandidaturasUsecase;
