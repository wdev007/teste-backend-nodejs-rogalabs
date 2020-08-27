import Denunciator from '../infra/typeorm/entities/Denunciator';
import Denunciation from '../infra/typeorm/entities/Denunciation';

interface ICreateDenunciations {
  title: string;
  description: string;
  denunciator_id: number;
}

export default interface IDenunciationsRepository {
  findDenunciatorByCpf(cpf: string): Promise<Denunciator | undefined>;
  createDenunciator(cpf: string, name: string): Promise<Denunciator>;
  createDenunciation(data: ICreateDenunciations): Promise<Denunciation>;
}
