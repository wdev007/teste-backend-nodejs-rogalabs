import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Denunciator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;
}

export default Denunciator;
