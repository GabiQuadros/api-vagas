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
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const usuario_model_1 = require("../../../models/usuario.model");
let UsuarioEntity = class UsuarioEntity {
    id;
    nome;
    username;
    password;
    tipo;
    nomeEmpresa;
    dthrCadastro;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        select: false,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 1,
        enum: ["A", "R", "C"],
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        name: "nome_empresa",
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nomeEmpresa", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: "dthr_cadastro",
    }),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "dthrCadastro", void 0);
UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)("usuario"),
    (0, typeorm_1.Unique)("unique_username", ["username", "tipo"])
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
