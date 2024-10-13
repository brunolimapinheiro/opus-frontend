import AuthModel from '../model/auth.model';

class AuthService {

  constructor(private model: AuthModel) {  }

  async login() {
    const result = await this.model.login();
    return result;
  }

  async register() {
    const result = await this.model.register();
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