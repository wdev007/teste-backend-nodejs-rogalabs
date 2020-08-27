import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Denunciation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  denunciator_id: number;
}

export default Denunciation;
