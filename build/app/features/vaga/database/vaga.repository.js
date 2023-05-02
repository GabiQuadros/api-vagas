"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaRepository = void 0;
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const vaga_model_1 = require("../../../models/vaga.model");
const vaga_entity_1 = require("../../../shared/database/entities/vaga.entity");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
class VagaRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(vaga_entity_1.VagaEntity);
    async create(vaga) {
        const vagaEntity = this.repository.create({
            id: vaga.id,
            descricao: vaga.descricao,
            nomeEmpresa: vaga.nomeEmpresa,
            dtLimite: vaga.dtLimite,
            idRecrutador: vaga.recrutador.id,
            indAtivo: vaga.indAtivo,
            maxCandidatos: vaga.maxCandidatos,
        });
        await this.repository.save(vagaEntity);
    }
    async list() {
        const result = await this.repository.find({
            relations: ["recrutador"],
        });
        return result.map((item) => VagaRepository.mapEntityToModel(item));
    }
    async get(id) {
        const result = await this.repository.findOne({
            where: {
                id,
            },
            relations: ["recrutador"],
        });
        if (result === null) {
            return null;
        }
        return VagaRepository.mapEntityToModel(result);
    }
    static mapEntityToModel(entity) {
        const recrutador = usuario_repository_1.UsuarioRepository.mapEntityToModel(entity.recrutador);
        const vaga = vaga_model_1.Vaga.create(entity.id, entity.descricao, entity.nomeEmpresa, entity.dtLimite, entity.indAtivo, recrutador, entity.maxCandidatos);
        return vaga;
    }
}
exports.VagaRepository = VagaRepository;
