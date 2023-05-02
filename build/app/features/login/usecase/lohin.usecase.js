"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsecase = void 0;
const jwt_adapter_1 = require("../../../shared/util/jwt.adapter");
const usuario_repository_1 = require("../../usuario/database/usuario.repository");
class LoginUsecase {
    async execute(data) {
        const repository = new usuario_repository_1.UsuarioRepository();
        const usuario = await repository.getByUsername(data);
        if (!usuario) {
            return {
                ok: false,
                message: "Username/Senha incorretos!",
                code: 401,
            };
        }
        const token = jwt_adapter_1.JwtAdapter.createToken(usuario.toJson());
        return {
            ok: true,
            message: "Login feito com sucesso",
            data: {
                ...usuario,
                token,
            },
            code: 200,
        };
    }
}
exports.LoginUsecase = LoginUsecase;
