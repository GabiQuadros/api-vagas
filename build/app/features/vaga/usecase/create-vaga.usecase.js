"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVagaUsecase = void 0;
const vaga_model_1 = require("../../../models/vaga.model");
const cache_repository_1 = require("../../../shared/database/repositories/cache.repository");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
const vaga_repository_1 = require("../database/vaga.repository");
class CreateVagaUsecase {
    async execute(data) {
        if (data.dtLimite < new Date()) {
            return {
                ok: false,
                code: 400,
                message: "A data deve ser superior a data atual.",
            };
        }
        if (data.indAtivo === undefined) {
            data.indAtivo = true;
        }
        const usuarioRepository = new usuario_repository_1.UsuarioRepository();
        const recrutador = await usuarioRepository.get(data.idRecrutador);
        if (!recrutador) {
            return {
                ok: false,
                code: 404,
                message: "A data deve ser superior a data atual.",
            };
        }
        const vaga = new vaga_model_1.Vaga(data.descricao, data.nomeEmpresa, data.dtLimite, data.indAtivo, recrutador, data.maxCandidatos);
        const repository = new vaga_repository_1.VagaRepository();
        await repository.create(vaga);
        await new cache_repository_1.CacheRepository().delete(`listaVagas`);
        await new cache_repository_1.CacheRepository().delete(`listaVagas:${vaga.id}`);
        return {
            ok: true,
            code: 201,
            message: "A vaga foi criada com sucesso.",
            data: vaga,
        };
    }
}
exports.CreateVagaUsecase = CreateVagaUsecase;
