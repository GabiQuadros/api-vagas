"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
class RequestError {
    static fieldNotProvided(res, field) {
        return res.status(400).send({
            ok: false,
            message: field + " was not provided!",
        });
    }
    static notFound(res, msg) {
        return res.status(404).send({
            ok: false,
            msg,
        });
    }
    static invalidData(res, msg) {
        return res.status(400).send({
            ok: false,
            msg,
        });
    }
}
exports.RequestError = RequestError;
