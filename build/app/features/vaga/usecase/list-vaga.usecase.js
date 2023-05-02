"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarVagaUsecase = void 0;
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const vaga_repository_1 = require("../database/vaga.repository");
class ListarVagaUsecase {
    async execute(idVaga) {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get(`listaVaga:${idVaga}`);
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Vaga obtida com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const repository = new vaga_repository_1.VagaRepository();
        const listaVaga = await repository.get(idVaga);
        await cacheRepository.set(`listaVaga:${idVaga}`, listaVaga);
        if (!listaVaga) {
            return {
                ok: false,
                code: 404,
                message: "Vaga não encontrada",
            };
        }
        return {
            ok: true,
            code: 200,
            message: "Vaga obtida com sucesso!",
            data: listaVaga,
        };
    }
}
exports.ListarVagaUsecase = ListarVagaUsecase;
