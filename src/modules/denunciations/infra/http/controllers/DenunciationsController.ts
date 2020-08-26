import { Response, Request } from 'express';

class DenunciationsController {
  public async store(request: Request, response: Response): Promise<Response> {
    return response.json({
      message: 'hello world',
    });
  }
}

export default DenunciationsController;
