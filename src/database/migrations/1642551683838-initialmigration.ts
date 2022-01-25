import {MigrationInterface, QueryRunner} from "typeorm";

export class initialmigration1642551683838 implements MigrationInterface {
    name = 'initialmigration1642551683838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "maps" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" date NOT NULL, "statusDay" boolean, "user_id" uuid NOT NULL, CONSTRAINT "REL_8497d85d8d394d1f79db0136e2" UNIQUE ("user_id"), CONSTRAINT "PK_dddaabaf432b881f9f6e13bf9bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "maps" ADD CONSTRAINT "FK_8497d85d8d394d1f79db0136e2b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maps" DROP CONSTRAINT "FK_8497d85d8d394d1f79db0136e2b"`);
        await queryRunner.query(`DROP TABLE "maps"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
