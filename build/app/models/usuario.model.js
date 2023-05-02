"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = exports.TipoUsuario = void 0;
const uuid_1 = require("uuid");
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario["Admin"] = "A";
    TipoUsuario["Candidato"] = "C";
    TipoUsuario["Recrutador"] = "R";
})(TipoUsuario = exports.TipoUsuario || (exports.TipoUsuario = {}));
class Usuario {
    nome;
    username;
    password;
    tipo;
    nomeEmpresa;
    _id;
    constructor(nome, username, password, tipo, nomeEmpresa) {
        this.nome = nome;
        this.username = username;
        this.password = password;
        this.tipo = tipo;
        this.nomeEmpresa = nomeEmpresa;
        this._id = (0, uuid_1.v4)();
    }
    static create(id, nome, username, password, tipo, nomeEmpresa) {
        const usuario = new Usuario(nome, username, password, tipo, nomeEmpresa);
        usuario._id = id;
        return usuario;
    }
    get id() {
        return this._id;
    }
    toJson() {
        return {
            _id: this._id,
            nome: this.nome,
            username: this.username,
            password: this.password,
            tipo: this.tipo,
        };
    }
}
exports.Usuario = Usuario;
