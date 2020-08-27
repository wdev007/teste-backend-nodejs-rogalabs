import { Repository, getRepository } from 'typeorm';

import IDenunciationsRepository from '@modules/denunciations/repositories/IDenunciationsRepository';
import Denunciation from '../entities/Denunciation';
import Denunciator from '../entities/Denunciator';

interface ICreateDenunciations {
  title: string;
  description: string;
  denunciator_id: number;
}

class DenunciationsRepostitory implements IDenunciationsRepository {
  private ormRepository: Repository<Denunciation>;

  private ormRepositoryDenunciator: Repository<Denunciator>;

  constructor() {
    this.ormRepository = getRepository(Denunciation);
    this.ormRepositoryDenunciator = getRepository(Denunciator);
  }

  public async findDenunciatorByCpf(
    cpf: string
  ): Promise<Denunciator | undefined> {
    const denunciator = await this.ormRepositoryDenunciator.findOne({
      where: {
        cpf,
      },
    });
    return denunciator;
  }

  public async createDenunciator(
    cpf: string,
    name: string
  ): Promise<Denunciator> {
    const denunciator = this.ormRepositoryDenunciator.create({
      cpf,
      name,
    });

    await this.ormRepositoryDenunciator.save(denunciator);

    return denunciator;
  }

  public async createDenunciation({
    title,
    description,
    denunciator_id,
  }: ICreateDenunciations): Promise<Denunciation> {
    const denunciations = this.ormRepository.create({
      title,
      description,
      denunciator_id,
    });

    await this.ormRepository.save(denunciations);

    return denunciations;
  }
}

export default DenunciationsRepostitory;
