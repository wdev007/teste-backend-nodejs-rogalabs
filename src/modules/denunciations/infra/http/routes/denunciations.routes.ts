import { Router } from 'express';

import DenunciationsController from '../controllers/DenunciationsController';

const denunciationsRouter = Router();
const denunciationsController = new DenunciationsController();

denunciationsRouter.post('/', denunciationsController.store);

export default denunciationsRouter;
