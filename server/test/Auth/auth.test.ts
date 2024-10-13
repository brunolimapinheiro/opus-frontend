import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'; 
import request from 'supertest';
import { App } from '../../src/app';
import { INVALID_REGISTER_MOCK, INVALID_REGISTER_MOCK_EMAIL, REGISTER_MOCK } from '../mock/register';
import AuthModel from '../../src/model/auth.model';
import AuthService from '../../src/service/auth.service';
import AuthController from '../../src/controller/auth.controller';

/* vi.mock('../../src/model/auth.model', () => {
  return {
    default: class {
      register = vi.fn();
      login = vi.fn();
      findAll = vi.fn();
      findById = vi.fn();
      update = vi.fn();
      delete = vi.fn();
    }
  }
}); */

const app = new App().app;

describe('Testes da rota de autenticação', () => {

  it('deve conseguir logar', async () => {
    const response = await request(app).post('/auth');

    expect(response.body.message).toBe('Logado!');
    expect(response.status).toBe(200);
  });

  it('não deve conseguir logar com dados inválidos', async () => {
    /// não implementado
  });

  it.skip('deve conseguir registrar um candidato', async () => {
    const response = await request(app).post('/auth/register').send(REGISTER_MOCK);

    expect(response.body.message).toBe('Usuário registrado!');
    expect(response.status).toBe(200);
    
  });

  it('não deve conseguir registrar um candidato com dados inválidos ou ausente', async () => {
    const response = await request(app).post('/auth/register').send(INVALID_REGISTER_MOCK);
    
    //Verifica se a mensagem de erro está correta, contendo ao menos um campo faltante
    expect(response.body.error).toContain('Preencha todos os campos:');
    expect(response.status).toBe(400);
  });

  it('deve conseguir logar e registrar um candidato com todos os dados validos', async () => {
    const response = await request(app).post('/auth').send(REGISTER_MOCK);

    expect(response.body.message).toBe('Logado!');
    expect(response.status).toBe(200);
  });

  it('deve conseguir pegar um candidato', async () => {
    const response = await request(app).get('/auth/1');

    expect(response.body.message).toBe('Hello World!');
    expect(response.status).toBe(200);
  });

  it('deve conseguir pegar todos os usuários', async () => {
    const response = await request(app).get('/auth');

    expect(response.body).toBeInstanceOf(Array);
    expect(response.status).toBe(200);
  });

  it('deve conseguir atualizar um candidato', async () => {
    const response = await request(app).put('/auth/1');

    expect(response.body.message).toBe('Usuário atualizado!');
    expect(response.status).toBe(200);
  });

  it('deve conseguir deletar um candidato', async () => {
    const response = await request(app).delete('/auth/1');

    expect(response.body.message).toBe('Usuário deletado!');
    expect(response.status).toBe(200);
  });

});
