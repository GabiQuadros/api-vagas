"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCandidatoUsecase = void 0;
const usuario_model_1 = require("../../../models/usuario.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
class ListCandidatoUsecase {
    async execute() {
        const cacheRepository = new cache_repository_1.CacheRepository();
        const cacheResult = await cacheRepository.get("listaCandidatos");
        if (cacheResult) {
            return {
                ok: true,
                code: 200,
                message: "Candidatos listados com sucesso! - Cache",
                data: cacheResult,
            };
        }
        const repository = new usuario_repository_1.UsuarioRepository();
        const listaCandidatos = await repository.list(usuario_model_1.TipoUsuario.Candidato);
        const result = await cacheRepository.set(`listaCandidatos`, listaCandidatos);
        return {
            ok: true,
            code: 200,
            message: "Candidatos listados com sucesso",
            data: listaCandidatos,
        };
    }
}
exports.ListCandidatoUsecase = ListCandidatoUsecase;
