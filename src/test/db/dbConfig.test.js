import { describe, expect, it } from '@jest/globals';
import db from '../../db/dbconfig';

describe('Db config tests', () => {
  it('Connect to the database and retrieve the registered author', async () => {
    const authorMock = {
      nome: 'Beltrano',
      nacionalidade: 'Brasileiro',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const saveAuthor = await db('autores')
      .insert(authorMock)
      .then((result) => db('autores').where('id', result[0]).first())
      .then((result) => result);

    expect(saveAuthor.nome).toBe(authorMock.nome);

    await db('autores').where('id', saveAuthor.id).del();
  });
});
