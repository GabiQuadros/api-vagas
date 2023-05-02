"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const login_controller_1 = require("../controller/login.controller");
const loginRoutes = () => {
    const router = (0, express_1.Router)();
    router.post("/", new login_controller_1.LoginController().login);
    return router;
};
exports.loginRoutes = loginRoutes;
