import { container } from 'tsyringe';

import IDenunciationsRepository from '@modules/denunciations/repositories/IDenunciationsRepository';
import DenunciationsRepository from '@modules/denunciations/infra/typeorm/repositories/DenunciationsRepository';

container.registerSingleton<IDenunciationsRepository>(
  'DenunciationsRepository',
  DenunciationsRepository
);
