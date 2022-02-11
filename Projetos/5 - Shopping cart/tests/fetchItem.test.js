require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Verifica se fetchItem é uma função.', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se quando a função fetchItem com o argumento do item MLB1615760527 é executada, teste se fetch foi chamada.', async () => {
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se, ao chamar a função fetchItem com o argumento do item MLB1615760527, a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527.', async () => {
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Verifica se o retorno da função fetchItem com o argumento do item MLB1615760527 é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const expectedResult = await fetchItem('MLB1615760527');

    expect(expectedResult).toEqual(item);
  });

  it('Verifica se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
