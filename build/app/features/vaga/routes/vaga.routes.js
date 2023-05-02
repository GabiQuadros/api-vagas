"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vagaRoutes = void 0;
const express_1 = require("express");
const vaga_controller_1 = require("../controllers/vaga.controller");
const check_login_validator_1 = require("../../login/validators/check-login.validator");
const check_recrutador_validator_1 = require("../../recrutador/validators/check-recrutador.validator");
const vagaRoutes = () => {
    const router = (0, express_1.Router)();
    router.get("/", new vaga_controller_1.VagaController().listAllVagas);
    router.get("/:idVaga", new vaga_controller_1.VagaController().getVaga);
    router.post("/", [check_login_validator_1.checkLoginValidator, check_recrutador_validator_1.checkRecrutadorValidator], new vaga_controller_1.VagaController().create);
    return router;
};
exports.vagaRoutes = vagaRoutes;
