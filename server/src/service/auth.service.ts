import AuthModel from '../model/auth.model';
import { hashPassword } from '../config/bcrypt';

class AuthService {

  private hashPassword: any;

  constructor(private model: AuthModel) {
    this.hashPassword = hashPassword;
  }

  // método de autenticação, falta implementar
  async login() {
    const result = await this.model.login();
    return result;
  }

  // método para cadastrar um candidato, falta revisar
  async register(data: any) {
    const { password } = data;

    const hash = await this.hashPassword(password);
    const newData = { ...data, password: hash };
    const result = await this.model.register(newData);
    return result;
  }

  // método para buscar um candidato pelo id, falta implementar
  async findById() {
    const result = await this.model.findById();
    return result;
  }

  // método para buscar todos os candidatos, falta implement
  async findAll() {
    const result = await this.model.findAll();
    return result;
  }

  // método para atualizar um candidato, falta implement
  async update() {
    const result = await this.model.update();
    return result;
  }

  // método para deletar um candidato, falta implementar
  async delete() {
    const result = await this.model.delete();
    return result;
  }
}

export default AuthService;