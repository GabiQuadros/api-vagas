"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterTableUsername21681943705334 = void 0;
class AlterTableUsername21681943705334 {
    name = "AlterTableUsername21681943705334";
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" DROP CONSTRAINT "unique_username"`);
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" DROP CONSTRAINT "UQ_6ccff37176a6978449a99c82e10"`);
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" ADD CONSTRAINT "unique_username" UNIQUE ("username", "tipo")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" DROP CONSTRAINT "unique_username"`);
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" ADD CONSTRAINT "UQ_6ccff37176a6978449a99c82e10" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "vagas"."usuario" ADD CONSTRAINT "unique_username" UNIQUE ("username", "tipo")`);
    }
}
exports.AlterTableUsername21681943705334 = AlterTableUsername21681943705334;
