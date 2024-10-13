class AuthModel {

  async login() {    
    return {
      message: 'Logado!',
    };
  }

  async register() {
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