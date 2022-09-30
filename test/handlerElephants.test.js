const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se existe a função getElephants', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('Testa o retorno sem parametros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Testa o retorno para passagem de parametro que não seja string', () => {
    expect(handlerElephants(22)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Testa o retorno para string vazia', () => {
    expect(handlerElephants('')).toBe(null);
  });
  test('Testo o retorno para parametros corretos', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
