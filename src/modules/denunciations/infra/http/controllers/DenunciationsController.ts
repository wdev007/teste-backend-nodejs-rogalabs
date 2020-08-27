import { Response, Request } from 'express';
import { container } from 'tsyringe';

import CreateDenunciationsService from '@modules/denunciations/services/CreateDenunciationsService';

class DenunciationsController {
  public async store(
    request: Request<any, any, { name: string }>,
    response: Response
  ): Promise<Response> {
    const { name } = request.body;

    const createDenunciations = container.resolve(CreateDenunciationsService);

    return response.json({
      message: 'hello world',
    });
  }
}

export default DenunciationsController;
