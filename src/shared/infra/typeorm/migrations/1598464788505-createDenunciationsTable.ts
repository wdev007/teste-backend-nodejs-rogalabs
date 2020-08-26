import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class createDenunciationsTable1598464788505
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'denunciations',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'denunciator_id',
            type: 'int',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'denunciations',
      new TableForeignKey({
        name: 'DenunciationsDenunciator',
        columnNames: ['denunciator_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'denunciators',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('denunciations');
    await queryRunner.dropForeignKey(
      'denunciations',
      'DenunciationsDenunciator'
    );
  }
}
