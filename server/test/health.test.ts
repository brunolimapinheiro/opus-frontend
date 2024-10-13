import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { App } from '../src/app';

const app = new App().app;

describe('Teste de exemplo', () => {
  it('deve passar', () => {
    expect(1 + 1).toBe(2);
  });

  it('deve pegar o body da req com a mensagem "Hello World!"', async () => {
    const response = await request(app).get('/');

    expect(response.body.message).toBe('Hello World!');
    expect(response.status).toBe(200);
  });

});
