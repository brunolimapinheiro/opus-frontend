import { Request, Response } from 'express';
import AuthService from '../service/auth.service';
import { PrismaClient } from '@prisma/client';


class AuthController {

  private prisma: PrismaClient;

  constructor(
    private service: AuthService,
  ) { 
    this.prisma = new PrismaClient();
   }

  async auth(req: Request, res: Response) {
    const result = await this.service.login();
    res.json(result);
  }

  async store(req: Request, res: Response) {
    const { email } = req.body;
    const data = req.body;

    const candidate = await this.prisma.candidate.findUnique({
      where: {
        email,
      },
    }); 

    if (candidate) {
      return res.status(400).json({
        error: 'Email já cadastrado!',
      });
    }

    const result = await this.service.register(data);
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