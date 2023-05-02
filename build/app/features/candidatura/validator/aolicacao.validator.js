"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacaoValidator = void 0;
class AplicacaoValidator {
    static candidaturaDuplicada(candidatos, id) {
        if (candidatos.some((candidatura) => candidatura.candidato.id === id)) {
            return true;
        }
        return false;
    }
    static validateVaga(vaga) {
        if (vaga.dtLimite < new Date()) {
            return {
                ok: false,
                code: 400,
                message: "A data limite já foi alcançada",
            };
        }
        if (vaga.indAtivo === false) {
            return {
                ok: false,
                code: 400,
                message: "A vaga não está mais ativa.",
            };
        }
        return {
            ok: true,
            code: 200,
            message: "Done",
        };
    }
}
exports.AplicacaoValidator = AplicacaoValidator;
