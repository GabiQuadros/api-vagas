"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormConnection = void 0;
const typeorm_config_1 = __importDefault(require("../config/typeorm.config"));
class TypeormConnection {
    static _connection;
    static async init() {
        this._connection = await typeorm_config_1.default.initialize();
        console.log("Typeorm is ready.");
    }
    static get connection() {
        return this._connection;
    }
}
exports.TypeormConnection = TypeormConnection;
