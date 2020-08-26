import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Denunciation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}

export default Denunciation;
