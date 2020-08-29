import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ICreateDenunciationsDTO from '@modules/denunciations/dtos/ICreateDenunciationsDTO';
import CreateDenunciationsService from '@modules/denunciations/services/CreateDenunciationsService';

class DenunciationsController {
  public async store(
    request: Request<any, any, ICreateDenunciationsDTO>,
    response: Response
  ): Promise<Response> {
    const createDenunciations = container.resolve(CreateDenunciationsService);

    const denunciations = await createDenunciations.execute(request.body);

    return response.json(denunciations);
  }
}

export default DenunciationsController;
