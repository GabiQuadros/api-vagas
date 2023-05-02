"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidaturaRoutes = void 0;
const express_1 = require("express");
const candidatura_controller_1 = require("../controllers/candidatura.controller");
const check_login_validator_1 = require("../../login/validators/check-login.validator");
const check_login_candidato_validator_1 = require("../../candidato/validators/check-login-candidato.validator");
const candidaturaRoutes = () => {
    const router = (0, express_1.Router)();
    router.post("/", [check_login_validator_1.checkLoginValidator, check_login_candidato_validator_1.checkLoginCandidatoValidator], new candidatura_controller_1.CandidaturaController().create);
    router.get("/", [check_login_validator_1.checkLoginValidator, check_login_candidato_validator_1.checkLoginCandidatoValidator], new candidatura_controller_1.CandidaturaController().listCandidaturas);
    router.get("/listagem", new candidatura_controller_1.CandidaturaController().listAllCandidaturas);
    return router;
};
exports.candidaturaRoutes = candidaturaRoutes;
