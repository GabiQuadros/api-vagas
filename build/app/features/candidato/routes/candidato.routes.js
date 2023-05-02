"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidatoRoutes = void 0;
const express_1 = require("express");
const candidato_controller_1 = require("../controllers/candidato.controller");
const create_candidato_validator_1 = require("../validators/create-candidato.validator");
const candidatoRoutes = () => {
    const router = (0, express_1.Router)();
    router.post("/", [create_candidato_validator_1.CreateCandidatoValidator.validate], new candidato_controller_1.CandidatoController().create);
    router.get("/", new candidato_controller_1.CandidatoController().list);
    return router;
};
exports.candidatoRoutes = candidatoRoutes;
