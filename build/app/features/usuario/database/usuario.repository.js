"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const usuario_model_1 = require("../../../models/usuario.model");
const usuario_entity_1 = require("../../../shared/database/entities/usuario.entity");
class UsuarioRepository {
    repository = typeorm_connection_1.TypeormConnection.connection.getRepository(usuario_entity_1.UsuarioEntity);
    async getByUsernameAndType(username, tipo) {
        const result = await this.repository.findOneBy({
            username,
            tipo,
        });
        if (!result) {
            return null;
        }
        return UsuarioRepository.mapEntityToModel(result);
    }
    async getByUsername(params) {
        const result = await this.repository.findOneBy({
            username: params.username,
            password: params.password,
            tipo: params.tipo,
        });
        if (!result) {
            return null;
        }
        return UsuarioRepository.mapEntityToModel(result);
    }
    async get(id) {
        const result = await this.repository.findOneBy({
            id,
        });
        if (!result) {
            return null;
        }
        return UsuarioRepository.mapEntityToModel(result);
    }
    async create(usuario) {
        const usuarioEntity = this.repository.create({
            id: usuario.id,
            nome: usuario.nome,
            username: usuario.username,
            nomeEmpresa: usuario.nomeEmpresa,
            password: usuario.password,
            tipo: usuario.tipo,
        });
        await this.repository.save(usuarioEntity);
    }
    async list(tipo) {
        const result = await this.repository.findBy({
            tipo,
        });
        return result.map((item) => UsuarioRepository.mapEntityToModel(item));
    }
    static mapEntityToModel(entity) {
        return usuario_model_1.Usuario.create(entity.id, entity.nome, entity.username, entity.password, entity.tipo, entity.nomeEmpresa);
    }
}
exports.UsuarioRepository = UsuarioRepository;
