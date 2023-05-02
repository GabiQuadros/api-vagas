"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVagasUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const vaga_repository_1 = require("../database/vaga.repository");
class ListVagasUsecase {
    async execute() {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get("listaVagas");
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Vagas listadas com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const repository = new vaga_repository_1.VagaRepository();
        const listaVagas = await repository.list();
        const result = await cacheRepository.set(`listaVagas`, listaVagas);
        return {
            ok: true,
            code: 200,
            message: "Vagas listadas com sucesso.",
            data: listaVagas,
        };
    }
}
exports.ListVagasUsecase = ListVagasUsecase;
