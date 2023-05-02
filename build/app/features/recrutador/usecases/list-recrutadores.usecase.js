"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRecrutadoresUsecase = void 0;
const usuario_model_1 = require("../../../models/usuario.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
class ListRecrutadoresUsecase {
    async execute() {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get("listaRecrutadores");
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Recrutadores listados com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const repository = new usuario_repository_1.UsuarioRepository();
        const listaRecrutadores = await repository.list(usuario_model_1.TipoUsuario.Recrutador);
        const result = await cacheRepository.set(`listaRecrutadores`, listaRecrutadores);
        return {
            ok: true,
            code: 200,
            message: "Recrutadores listados com sucesso!",
            data: listaRecrutadores,
        };
    }
}
exports.ListRecrutadoresUsecase = ListRecrutadoresUsecase;
