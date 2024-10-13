import { Request, Response } from 'express';
import AuthService from '../service/auth.service';
import { PrismaClient } from '@prisma/client';


class AuthController {

  private prisma: PrismaClient;

  constructor(private service: AuthService) { 
    this.prisma = new PrismaClient();
   }

   // método de autenticação, falta implementar
  async auth(req: Request, res: Response) {
    const result = await this.service.login();
    res.json(result);
  }

  // método para cadastrar um candidato, falta revisar
  async store(req: Request, res: Response) {
    const { email } = req.body;
    const data = req.body;
    const file = req.file;

    const candidateExist = await this.prisma.candidate.findUnique({
      where: {
        email,
      },
    }); 

    if (candidateExist) {
      return res.status(400).json({
        error: 'Email já cadastrado!',
      });
    }

    if (!file) {
      return res.status(400).json({
        error: 'Arquivo não enviado!',
      });
    }

    data.curriculum = file.filename

    const result = await this.service.register(data);
    res.json(result);
  }

  // método para buscar um candidato pelo id, falta implementar
  async show(req: Request, res: Response) {
    const result = await this.service.findById();
    res.json(result);
  }

  // método para buscar todos os candidatos, falta implement
  async index(req: Request, res: Response) {
    const result = await this.service.findAll();
    res.json(result);
  }

  // método para atualizar um candidato, falta implementar
  async update(req: Request, res: Response) {
    const result = await this.service.update();
    res.json(result);
  }

  // método para deletar um candidato, falta implementar
  async delete(req: Request, res: Response) {
    const result = await this.service.delete();
    res.json(result);
  }
}

export default AuthController;