import { injectable, inject } from 'tsyringe';

import IDenunciationsRepository from '../repositories/IDenunciationsRepository';
import Denunciation from '../infra/typeorm/entities/Denunciation';

interface IRequest {
  latitude: string;
  longitude: string;
  denunciante: {
    name: string;
    cpf: string;
  };
  denuncia: {
    title: string;
    descricao: string;
  };
}

@injectable()
class CreateDenunciationsService {
  constructor(
    @inject('DenunciationsRepository')
    private denunciationsRepository: IDenunciationsRepository
  ) {}

  public async execute({
    denunciante,
    denuncia,
  }: IRequest): Promise<Denunciation> {
    let denunciator = await this.denunciationsRepository.findDenunciatorByCpf(
      denunciante.cpf
    );

    if (!denunciator) {
      denunciator = await this.denunciationsRepository.createDenunciator(
        denunciante.cpf,
        denunciante.name
      );
    }

    const denunciations = await this.denunciationsRepository.createDenunciation(
      {
        title: denuncia.title,
        description: denuncia.descricao,
        denunciator_id: denunciator.id,
      }
    );

    return denunciations;
  }
}

export default CreateDenunciationsService;
