import { Request, Response } from 'express';
import AuthService from '../service/auth.service';


class AuthController {

  constructor(private service: AuthService) {  }

  async auth(req: Request, res: Response) {
    const result = await this.service.login();
    res.json(result);
  }

  async store(req: Request, res: Response) {
    const result = await this.service.register();
    res.json(result);
  }

  async show(req: Request, res: Response) {
    const result = await this.service.findById();
    res.json(result);
  }

  async index(req: Request, res: Response) {
    const result = await this.service.findAll();
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const result = await this.service.update();
    res.json(result);
  }

  async delete(req: Request, res: Response) {
    const result = await this.service.delete();
    res.json(result);
  }
}

export default AuthController;