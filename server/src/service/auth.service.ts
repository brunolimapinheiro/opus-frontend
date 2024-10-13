import AuthModel from '../model/auth.model';
import { hashPassword } from '../config/bcrypt';

class AuthService {

  private hashPassword: any;

  constructor(private model: AuthModel) {
    this.hashPassword = hashPassword;
  }

  async login() {
    const result = await this.model.login();
    return result;
  }

  async register(data: any) {
    const { password } = data;

    const hash = await this.hashPassword(password, 10);
    const newData = { ...data, password: hash };
    const result = await this.model.register(newData);
    return result;
  }

  async findById() {
    const result = await this.model.findById();
    return result;
  }

  async findAll() {
    const result = await this.model.findAll();
    return result;
  }

  async update() {
    const result = await this.model.update();
    return result;
  }

  async delete() {
    const result = await this.model.delete();
    return result;
  }
}

export default AuthService;