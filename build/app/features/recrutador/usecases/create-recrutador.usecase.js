"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecrutadorUsecase = void 0;
const recrutador_model_1 = require("../../../models/recrutador.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
class CreateRecrutadorUsecase {
    async execute(data) {
        // 1 - Validar se o usuario ja existe (username)
        const repository = new usuario_repository_1.UsuarioRepository();
        // 2 - criar model Recrutador
        const recrutador = new recrutador_model_1.Recrutador(data.nome, data.username, data.password, data.nomeEmpresa);
        // 3 - salvar o usuario no DB
        const result = await repository.create(recrutador);
        // 4 - retornar o usuario criado
        await new cache_repository_1.CacheRepository().delete(`listaRecrutadores`);
        return {
            ok: true,
            code: 201,
            message: "Usuário criado com sucesso!",
            data: result,
        };
    }
}
exports.CreateRecrutadorUsecase = CreateRecrutadorUsecase;
