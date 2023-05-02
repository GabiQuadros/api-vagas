"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidato = void 0;
const usuario_model_1 = require("./usuario.model");
class Candidato extends usuario_model_1.Usuario {
    constructor(nome, username, password) {
        super(nome, username, password, usuario_model_1.TipoUsuario.Candidato);
    }
}
exports.Candidato = Candidato;
