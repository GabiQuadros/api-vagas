"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidaturaRepository = void 0;
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const candidatura_models_1 = require("../../../models/candidatura.models");
const candidatura_entity_1 = require("../../../shared/database/entities/candidatura.entity");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
const vaga_repository_1 = require("../../vaga/database/vaga.repository");
class CandidaturaRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(candidatura_entity_1.CandidaturaEntity);
    async listByVaga(params) {
        const result = await this.repository.find({
            where: {
                idVaga: params.idVaga,
                idCandidato: params.idCandidato,
            },
            relations: ["candidato", "vaga", "vaga.recrutador"],
        });
        return result.map((item) => this.mapEntityToModel(item));
    }
    async listAll() {
        const result = await this.repository.find({
            relations: ["candidato", "vaga", "vaga.recrutador"],
        });
        return result.map((item) => this.mapEntityToModel(item));
    }
    async getById(idCandidato) {
        const result = await this.repository.find({
            where: {
                idCandidato,
            },
            relations: {
                candidato: true,
                vaga: { recrutador: true },
            },
        });
        return result.map((item) => this.mapEntityToModel(item));
    }
    mapEntityToModel(entity) {
        const candidato = usuario_repository_1.UsuarioRepository.mapEntityToModel(entity.candidato);
        const vaga = vaga_repository_1.VagaRepository.mapEntityToModel(entity.vaga);
        return candidatura_models_1.Candidatura.create(entity.id, entity.dtCadastro, entity.indSucesso, candidato, vaga);
    }
    async create(candidatura) {
        const entity = this.repository.create({
            id: candidatura.id,
            dtCadastro: candidatura.dtCadastro,
            indSucesso: candidatura.indSucesso,
            idCandidato: candidatura.candidato.id,
            idVaga: candidatura.vaga.id,
        });
        await this.repository.save(entity);
    }
}
exports.CandidaturaRepository = CandidaturaRepository;
