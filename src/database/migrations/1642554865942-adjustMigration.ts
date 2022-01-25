import {MigrationInterface, QueryRunner} from "typeorm";

export class adjustMigration1642554865942 implements MigrationInterface {
    name = 'adjustMigration1642554865942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maps" DROP CONSTRAINT "FK_8497d85d8d394d1f79db0136e2b"`);
        await queryRunner.query(`ALTER TABLE "maps" DROP CONSTRAINT "REL_8497d85d8d394d1f79db0136e2"`);
        await queryRunner.query(`ALTER TABLE "maps" ADD CONSTRAINT "FK_8497d85d8d394d1f79db0136e2b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maps" DROP CONSTRAINT "FK_8497d85d8d394d1f79db0136e2b"`);
        await queryRunner.query(`ALTER TABLE "maps" ADD CONSTRAINT "REL_8497d85d8d394d1f79db0136e2" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "maps" ADD CONSTRAINT "FK_8497d85d8d394d1f79db0136e2b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
