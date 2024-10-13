import express, { Request, Response } from 'express';
import AuthController from '../controller/auth.controller';
import AuthService from '../service/auth.service';
import AuthModel from '../model/auth.model';
import AuthMiddleware from '../middleware/auth.middleware';

const model = new AuthModel();
const service = new AuthService(model);
const controller = new AuthController(service);
const middleware = new AuthMiddleware();

const router = express.Router();

router.post('/auth', async (req: Request, res: Response) => {
   await controller.auth(req, res);
});

router.post('/auth/register', middleware.registerValidate, async (req: Request, res: Response) => {
   await controller.store(req, res);
});

router.get('/auth/:id', async (req: Request, res: Response) => {
   await controller.show(req, res);
});

router.get('/auth', async (req: Request, res: Response) => {
   await controller.index(req, res);
});

router.put('/auth/:id', async (req: Request, res: Response) => {
   await controller.update(req, res);
});

router.delete('/auth/:id', async (req: Request, res: Response) => {
   await controller.delete(req, res);
});

export default router;
