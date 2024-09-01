import { test, expect, type Page } from '@playwright/test';
import { HomePage } from "../../../page-objects/pages/home/home-page"
import { BarraBuscaComponentPage } from '../../../page-objects/components/barra-de-navegacao/barra-de-busca-page';
import { ResultadosPage } from '../../../page-objects/pages/resultados/resultados-page'; 


test.beforeEach('Dado que o usuário está na página inicial', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.abrirAplicacao();
});

test.describe('Amazon Tests', { tag: "@barra-busca" }, () => {
  test('Selecionar uma sugestão utilizando a tecla Enter', { tag: "@barra-busca-sugestao-teclado" }, async ({ page }) => {
    const barraBusca = new BarraBuscaComponentPage(page);
    const produtoBuscado = 'geladeira';
    
    await test.step('Quando ele insere as letras iniciais do nome de um produto na barra de busca', async () => {
      await barraBusca.inserirTextoNaBarra(produtoBuscado);
    });

    await test.step('E seleciona uma das sugestões utilizando a tecla Enter', async () => {
      const teclaPressionada = 'Enter';
      await barraBusca.selecionarSugestaoTeclado(produtoBuscado, teclaPressionada);
    });

    await test.step('Então as sugestões apresentadas devem conter o nome do produto buscado', async () => {
      const resultados = new ResultadosPage(page);
      await resultados.ValidaSeTituloProdutoContemTexto(produtoBuscado);
    });

    await test.step('E o campo de busca deve receber o valor selecionado', async () => {
      await barraBusca.verificarSeValorCampoBuscaIgualTexto(produtoBuscado);
    });

  });
});
