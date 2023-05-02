"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaEntity = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
let VagaEntity = class VagaEntity {
    id;
    descricao;
    nomeEmpresa;
    dtLimite;
    indAtivo;
    maxCandidatos;
    idRecrutador;
    recrutador;
    dthrCadastro;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], VagaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VagaEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VagaEntity.prototype, "nomeEmpresa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "dt_limite",
    }),
    __metadata("design:type", Date)
], VagaEntity.prototype, "dtLimite", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "ind_ativo",
        default: true,
    }),
    __metadata("design:type", Boolean)
], VagaEntity.prototype, "indAtivo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "max_candidatos",
        nullable: true,
        type: "int4",
    }),
    __metadata("design:type", Number)
], VagaEntity.prototype, "maxCandidatos", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "id_recrutador",
    }),
    __metadata("design:type", String)
], VagaEntity.prototype, "idRecrutador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({
        name: "id_recrutador",
    }),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], VagaEntity.prototype, "recrutador", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: "dthr_cadastro",
    }),
    __metadata("design:type", Date)
], VagaEntity.prototype, "dthrCadastro", void 0);
VagaEntity = __decorate([
    (0, typeorm_1.Entity)("vaga")
], VagaEntity);
exports.VagaEntity = VagaEntity;
