"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidatura = void 0;
const uuid_1 = require("uuid");
class Candidatura {
    dtCadastro;
    indSucesso;
    candidato;
    vaga;
    _id;
    constructor(dtCadastro, indSucesso, candidato, vaga) {
        this.dtCadastro = dtCadastro;
        this.indSucesso = indSucesso;
        this.candidato = candidato;
        this.vaga = vaga;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    static create(id, dtCadastro, indSucesso, candidato, vaga) {
        const candidatura = new Candidatura(dtCadastro, indSucesso, candidato, vaga);
        candidatura._id = id;
        return candidatura;
    }
}
exports.Candidatura = Candidatura;
