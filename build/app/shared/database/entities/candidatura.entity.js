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
exports.CandidaturaEntity = void 0;
const typeorm_1 = require("typeorm");
const vaga_entity_1 = require("./vaga.entity");
const usuario_entity_1 = require("./usuario.entity");
let CandidaturaEntity = class CandidaturaEntity {
    id;
    dtCadastro;
    indSucesso;
    idCandidato;
    idVaga;
    vaga;
    candidato;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], CandidaturaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: "dt_cadastro",
    }),
    __metadata("design:type", Date)
], CandidaturaEntity.prototype, "dtCadastro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "ind_sucesso",
        default: false,
    }),
    __metadata("design:type", Boolean)
], CandidaturaEntity.prototype, "indSucesso", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "id_candidato",
    }),
    __metadata("design:type", String)
], CandidaturaEntity.prototype, "idCandidato", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "id_vaga",
    }),
    __metadata("design:type", String)
], CandidaturaEntity.prototype, "idVaga", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vaga_entity_1.VagaEntity),
    (0, typeorm_1.JoinColumn)({
        name: "id_vaga",
    }),
    __metadata("design:type", vaga_entity_1.VagaEntity)
], CandidaturaEntity.prototype, "vaga", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity),
    (0, typeorm_1.JoinColumn)({
        name: "id_candidato",
    }),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], CandidaturaEntity.prototype, "candidato", void 0);
CandidaturaEntity = __decorate([
    (0, typeorm_1.Entity)("candidatura")
], CandidaturaEntity);
exports.CandidaturaEntity = CandidaturaEntity;
