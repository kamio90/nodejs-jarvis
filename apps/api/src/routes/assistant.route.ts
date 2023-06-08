import { Router } from 'express';
import * as assistantController from '../controllers/assistant.controller';

const router = Router();

router.post('/command', assistantController.handleCommand);

export default router;
