import { describe, expect, it } from '@jest/globals';
import AuthService from '../../services/authService';

const authService = new AuthService();

describe('Auth service tests', () => {
  it('User must have a name, email, and password when registering', async () => {
    // Padrão tripe A: Arrange, Act, Assert

    // Arrange
    const userMock = { nome: 'Fulano', email: 'fulano@gmail.com' };

    // Act
    const results = authService.cadastrarUsuario(userMock)

    // Assert
    await expect(results).rejects.toThrowError('senha not informed');
  });
});
