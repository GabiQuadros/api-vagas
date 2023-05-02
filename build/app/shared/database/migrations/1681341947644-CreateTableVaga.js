"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableVaga1681341947644 = void 0;
class CreateTableVaga1681341947644 {
    name = "CreateTableVaga1681341947644";
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "vagas"."vaga" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, "nomeEpresa" character varying NOT NULL, "dt_limite" TIMESTAMP NOT NULL, "ind_ativo" boolean NOT NULL DEFAULT true, "max_candidatos" integer, "id_recrutador" character varying NOT NULL, "dthr_cadastro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8fc4878a1eec234441d6696c3cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" ADD CONSTRAINT "FK_f0d9366b1d9aa1f307cfdfdac6b" FOREIGN KEY ("id_recrutador") REFERENCES "vagas"."usuario"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" DROP CONSTRAINT "FK_f0d9366b1d9aa1f307cfdfdac6b"`);
        await queryRunner.query(`DROP TABLE "vagas"."vaga"`);
    }
}
exports.CreateTableVaga1681341947644 = CreateTableVaga1681341947644;
