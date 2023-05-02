"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCandidatoUsecase = void 0;
const candidato_model_1 = require("../../../models/candidato.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
class CreateCandidatoUsecase {
    async execute(data) {
        const repository = new usuario_repository_1.UsuarioRepository();
        const usuario = await repository.getByUsername({ username: data.username });
        if (usuario !== null) {
            return {
                ok: false,
                code: 400,
                message: "Candidato já existe!",
            };
        }
        const candidato = new candidato_model_1.Candidato(data.nome, data.username, data.password);
        const result = await repository.create(candidato);
        await new cache_repository_1.CacheRepository().delete(`listaCandidatos`);
        return {
            ok: true,
            code: 201,
            message: "Candidato criado com sucesso!",
            data: result,
        };
    }
}
exports.CreateCandidatoUsecase = CreateCandidatoUsecase;
