import {MigrationInterface, QueryRunner} from "typeorm";

export class alter1651424324256 implements MigrationInterface {
    name = 'alter1651424324256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` int NOT NULL, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_c5f78ad8f82e492c25d07f047a\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_c5f78ad8f82e492c25d07f047a\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
