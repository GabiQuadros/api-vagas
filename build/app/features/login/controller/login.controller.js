"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const api_error_1 = require("../../../shared/errors/api.error");
const login_usecase_1 = require("../usecase/login.usecase");
class LoginController {
    async login(req, res) {
        try {
            const { username, password, tipo } = req.body;
            const result = await new login_usecase_1.LoginUsecase().execute({
                username,
                password,
                tipo,
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return api_error_1.ApiError.serverError(res, error);
        }
    }
}
exports.LoginController = LoginController;
