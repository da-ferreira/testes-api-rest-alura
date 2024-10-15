import { describe, expect, it } from '@jest/globals';
import AuthService from '../../services/authService';
import UsuariosService from '../../services/usuariosService';

const authService = new AuthService();
const userService = new UsuariosService();

describe('Auth service tests', () => {
  it('User must have a name, email, and password when registering', async () => {
    // Padrão tripe A: Arrange, Act, Assert

    // Arrange
    const userMock = { nome: 'Fulano', email: 'fulano@gmail.com' };

    // Act
    const results = authService.cadastrarUsuario(userMock);

    // Assert
    await expect(results).rejects.toThrowError('senha not informed');
  });

  it('Prevent registration of duplicate emails', async () => {
    const userMock1 = { nome: 'Fulano', email: 'fulano5@gmail.com', senha: '123456' };
    const userMock2 = { nome: 'Beltrano', email: 'fulano5@gmail.com', senha: '123456' };

    const user1 = await authService.cadastrarUsuario(userMock1);
    const user2 = authService.cadastrarUsuario(userMock2);

    await expect(user2).rejects.toThrowError('Email já cadastrado.');

    userService.excluirUsuario(user1);
  });

  it('Return success message after registration', async () => {
    const userMock = { nome: 'Fulano', email: 'fulano8111@gmail.com', senha: '123456' };

    const userCreated = await authService.cadastrarUsuario(userMock);

    // const response = await expect(userCreated).resolves.toBe('usuario criado');

    expect(userCreated.message).toEqual('usuario criado')

    userService.excluirUsuario(userCreated);
  });
});
