"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError {
    static serverError(res, error) {
        return res.status(500).send({
            ok: false,
            message: error.toString(),
        });
    }
}
exports.ApiError = ApiError;
