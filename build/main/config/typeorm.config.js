"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const database_env_1 = require("../../app/envs/database.env");
let entites = "src/app/shared/database/entities/**/*.ts";
let migrations = "src/app/shared/database/migrations/**/*.ts";
if (database_env_1.databaseEnv.nodeEnv !== "dev") {
    entites = "build/app/shared/database/entities/**/*.js";
    migrations = "build/app/shared/database/migrations/**/*.js";
}
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    host: database_env_1.databaseEnv.host,
    username: database_env_1.databaseEnv.username,
    password: database_env_1.databaseEnv.password,
    database: database_env_1.databaseEnv.database,
    schema: "vagas",
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [entites],
    migrations: [migrations],
});
