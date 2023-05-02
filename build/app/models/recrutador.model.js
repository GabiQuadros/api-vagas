"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recrutador = void 0;
const usuario_model_1 = require("./usuario.model");
class Recrutador extends usuario_model_1.Usuario {
    constructor(nome, username, password, nomeEmpresa) {
        super(nome, username, password, usuario_model_1.TipoUsuario.Recrutador, nomeEmpresa);
    }
}
exports.Recrutador = Recrutador;
