import { Router } from 'express';

import denunciationsRoutes from '@modules/denunciations/infra/http/routes/denunciations.routes';

const routes = Router();

routes.use('/v1/denuncias', denunciationsRoutes);

export default routes;
