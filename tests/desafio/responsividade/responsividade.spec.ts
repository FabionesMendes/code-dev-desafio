import { test, expect, type Page } from '@playwright/test';
import { HomePage } from "../../../page-objects/pages/home/home-page"

test.beforeEach('Dado que o usuário está na página inicial', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.openAplication();
});

test.describe('Amazon Tests', () => {
  test('Selecionar uma sugestão utilizando as setas do teclado', async ({ page }) => {
    

  });
});
