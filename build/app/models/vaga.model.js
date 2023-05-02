"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaga = void 0;
const uuid_1 = require("uuid");
class Vaga {
    descricao;
    nomeEmpresa;
    dtLimite;
    indAtivo;
    recrutador;
    maxCandidatos;
    _id;
    constructor(descricao, nomeEmpresa, dtLimite, indAtivo, recrutador, maxCandidatos) {
        this.descricao = descricao;
        this.nomeEmpresa = nomeEmpresa;
        this.dtLimite = dtLimite;
        this.indAtivo = indAtivo;
        this.recrutador = recrutador;
        this.maxCandidatos = maxCandidatos;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    static create(id, descricao, nomeEmpresa, dtLimite, indAtivo, recrutador, maxCandidatos) {
        const vaga = new Vaga(descricao, nomeEmpresa, dtLimite, indAtivo, recrutador, maxCandidatos);
        vaga._id = id;
        return vaga;
    }
}
exports.Vaga = Vaga;
