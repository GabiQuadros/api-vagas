"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const recrutador_routes_1 = require("../../app/features/recrutador/routes/recrutador.routes");
const login_routes_1 = require("../../app/features/login/routes/login.routes");
const candidato_routes_1 = require("../../app/features/candidato/routes/candidato.routes");
const vaga_routes_1 = require("../../app/features/vaga/routes/vaga.routes");
const candidatura_routes_1 = require("../../app/features/candidatura/routes/candidatura.routes");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use("/recrutador", (0, recrutador_routes_1.recrutadorRoutes)());
    app.use("/auth", (0, login_routes_1.loginRoutes)());
    app.use("/candidato", (0, candidato_routes_1.candidatoRoutes)());
    app.use("/vaga", (0, vaga_routes_1.vagaRoutes)());
    app.use("/candidatura", (0, candidatura_routes_1.candidaturaRoutes)());
    return app;
};
exports.createApp = createApp;
