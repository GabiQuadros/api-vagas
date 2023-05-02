"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTableUsername1681943621975 = void 0;
class AlterTableUsername1681943621975 {
    name = "AlterTableUsername1681943621975";
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" ADD CONSTRAINT "unique_username" UNIQUE ("username", "tipo")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" DROP CONSTRAINT "unique_username"`);
    }
}
exports.AlterTableUsername1681943621975 = AlterTableUsername1681943621975;
