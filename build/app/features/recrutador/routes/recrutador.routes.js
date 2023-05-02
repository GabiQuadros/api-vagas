"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recrutadorRoutes = void 0;
const express_1 = require("express");
const recrutador_controller_1 = require("../controllers/recrutador.controller");
const check_login_validator_1 = require("../../login/validators/check-login.validator");
const check_recrutador_validator_1 = require("../validators/check-recrutador.validator");
const create_recrutador_validator_1 = require("../validators/create-recrutador.validator");
const recrutadorRoutes = () => {
    const router = (0, express_1.Router)();
    router.get("/", [check_login_validator_1.checkLoginValidator, check_recrutador_validator_1.checkRecrutadorValidator], new recrutador_controller_1.RecrutadorController().list);
    router.post("/", [create_recrutador_validator_1.CreateRecrutadorValidator.validate], new recrutador_controller_1.RecrutadorController().create);
    return router;
};
exports.recrutadorRoutes = recrutadorRoutes;
