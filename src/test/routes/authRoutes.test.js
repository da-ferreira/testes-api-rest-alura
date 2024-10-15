import { afterEach, beforeEach, describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../../app';

let server;
const port = 3003;

beforeEach(() => {
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

// Testes de integração 👇

describe('Testing Login route [POST]', () => {
  it('Login must require email and password', async () => {
    const loginMock = { email: 'fulano@gmail.com' };

    await request(server).post('/login').send(loginMock).expect(500).expect('"A senha de usuario é obrigatório."');
  });

  it('Login must validate if the user is registered', async () => {
    const loginMock = { email: 'fulano@gmail.com', senha: '123@456' };

    await request(server).post('/login').send(loginMock).expect(500).expect('"Usuario não cadastrado."');
  });

  it('Login must validate incorrect email or password', async () => {
    const newUser = { email: 'teste123@gmail.com', senha: '123@456', nome: 'Fulano' };

    await request(server).post('/cadastrar').send(newUser);

    await request(server)
      .post('/login')
      .send({ email: newUser.email, senha: '1234' })
      .expect(500)
      .expect('"Usuario ou senha invalido."');
  });

  it('Login must return an accessToken on successful authentication', async () => {
    const loginMock = { email: 'teste123@gmail.com', senha: '123@456' };

    const response = await request(server).post('/login').send(loginMock).expect(201);

    expect(response.body).toHaveProperty('accessToken');
  });
});
