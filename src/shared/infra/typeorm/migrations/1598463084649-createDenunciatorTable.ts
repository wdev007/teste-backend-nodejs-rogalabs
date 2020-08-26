import { MigrationInterface, Table, QueryRunner } from 'typeorm';

export default class createDenunciatorTable1598463084649
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'denuciators',
        columns: [
          {
            name: 'id',
            type: 'integer',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('denuciators');
  }
}
