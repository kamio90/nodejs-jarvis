import { Request, Response } from 'express';
import * as assistantService from '../services/assistant.service';

export async function handleCommand(req: Request, res: Response) {
  const response = await assistantService.handleCommand(req.body.command);
  res.json(response);
}
