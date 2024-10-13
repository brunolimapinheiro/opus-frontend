import { PrismaClient } from '@prisma/client';

class AuthModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // método de autenticação, falta implementar
  async login() {    
    return {
      message: 'Logado!',
    };
  }

  // método para cadastrar um candidato, falta revisar
  async register(data: any) {
    const { name, email, phone, address, age, about, experience, formation, curriculum, password } = data;

    // iniciando uma transação
    const transaction = await this.prisma.$transaction(async (prisma) => {

      // salvando os dados de contato do candidato
      const contact = await this.prisma.contactInfo.create({
        data: {
          phone,
          address,
        },
      });

      // salvando os dados do candidato
      const candidate = await this.prisma.candidate.create({
        data: {
          name,
          email,
          password,
          age:parseInt(age),
          about,
          contactInfo: {
            connect: {
              id: contact.id,
            },
          },
        },
      });

      // salvando os dados de formação e experiência do candidato e caminho do currículo (faltando implementar o upload do currículo)
      const education = await prisma.education.create({
        data: {
          formation,
          experience,
          curriculum,
          candidateId: candidate.id,
        },
      });
    });

    // finalizando a conexão com o banco de dados
    await this.prisma.$disconnect();
    
    // se tudo ocorrer bem, retornar a mensagem de usuário registrado, se nao, o middleware de erro do express irá capturar o erro
    return {
      message: 'Usuário registrado!',
    };
  }

  
  // método para buscar um candidato pelo id, falta implementar
  async findById() {
    return {
      message: 'Hello World!',
    };
  }

  // método para buscar todos os candidatos, falta implement
  async findAll() {
    return [];
  }

  // método para atualizar um candidato, falta implement
  async update() {
    return {
      message: 'Usuário atualizado!',
    };
  }

  // método para deletar um candidato, falta implementar
  async delete() {
    return {
      message: 'Usuário deletado!',
    };
  }
}

export default AuthModel;