"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_connection_1 = require("./main/database/redis.connection");
const typeorm_connection_1 = require("./main/database/typeorm.connection");
const express_server_1 = require("./main/server/express.server");
// TypeormConnection.init().then(RedisConnection.connect).then(Server.run);
Promise.all([typeorm_connection_1.TypeormConnection.init(), redis_connection_1.RedisConnection.connect()]).then(express_server_1.Server.run);
