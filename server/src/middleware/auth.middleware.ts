import express, { Request, Response } from 'express';

class AuthMiddleware {
  
  constructor() {
  }

  async registerValidate(
    req: Request,
    res: Response,
    next: express.NextFunction,
  ): Promise<void> {
    const { name, email, phone, address, age, about, experience, formation, curriculum, password } = req.body;

    // Verificação dos campos obrigatórios
    if (!name || !email || !phone || !address || !age || !about || !experience || !formation || !curriculum || !password) {
      res.status(400).json({
        error: 'Preencha todos os campos!',
      });

      return;
    }

   
    // Verificação do tamanho da senha 
    if (password.length < 8) {
      res.status(400).json({
        error: 'Sua senha deve ter 8 ou mais caracteres!',
      });

      return;
    }

    next();  
  }
}

export default AuthMiddleware;
