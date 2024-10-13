import { PrismaClient } from '@prisma/client';

class AuthModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async login() {    
    return {
      message: 'Logado!',
    };
  }

  async register(data: any) {
    const { name, email, phone, address, age, about, experience, formation, curriculum, password } = data;

    const transaction = await this.prisma.$transaction(async (prisma) => {
      const contact = await this.prisma.contactInfo.create({
        data: {
          phone,
          address,
        },
      });

      const candidate = await this.prisma.candidate.create({
        data: {
          name,
          email,
          password,
          contactInfo: {
            connect: {
              id: contact.id,
            },
          },
        },
      });

      const education = await prisma.education.create({
        data: {
          formation,
          experience,
          curriculum,
          candidateId: candidate.id,
        },
      });
    });

    await this.prisma.$disconnect();
    
    return {
      message: 'Usuário registrado!',
    };
  }

  async findById() {
    return {
      message: 'Hello World!',
    };
  }

  async findAll() {
    return [];
  }

  async update() {
    return {
      message: 'Usuário atualizado!',
    };
  }

  async delete() {
    return {
      message: 'Usuário deletado!',
    };
  }
}

export default AuthModel;