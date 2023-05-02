"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableVaga1681850584048 = void 0;
class CreateTableVaga1681850584048 {
    name = "CreateTableVaga1681850584048";
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" RENAME COLUMN "nomeEpresa" TO "nomeEmpresa"`);
        await queryRunner.query(`CREATE TABLE "vagas"."candidatura" ("id" character varying NOT NULL, "dt_cadastro" TIMESTAMP NOT NULL DEFAULT now(), "ind_sucesso" boolean NOT NULL DEFAULT false, "id_candidato" character varying NOT NULL, "id_vaga" character varying NOT NULL, CONSTRAINT "PK_672145851ea2690627ed1917cc1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vagas"."candidatura" ADD CONSTRAINT "FK_4c44c1d870db92366bea2f0569f" FOREIGN KEY ("id_vaga") REFERENCES "vagas"."vaga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vagas"."candidatura" ADD CONSTRAINT "FK_db83601857842a7e02b444ecfaa" FOREIGN KEY ("id_candidato") REFERENCES "vagas"."usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "vagas"."candidatura" DROP CONSTRAINT "FK_db83601857842a7e02b444ecfaa"`);
        await queryRunner.query(`ALTER TABLE "vagas"."candidatura" DROP CONSTRAINT "FK_4c44c1d870db92366bea2f0569f"`);
        await queryRunner.query(`DROP TABLE "vagas"."candidatura"`);
        await queryRunner.query(`ALTER TABLE "vagas"."vaga" RENAME COLUMN "nomeEmpresa" TO "nomeEpresa"`);
    }
}
exports.CreateTableVaga1681850584048 = CreateTableVaga1681850584048;
