import { Router } from 'express';
import assistantRoutes from './assistant.route';

const router = Router();

router.use('/assistant', assistantRoutes);

export default router;
