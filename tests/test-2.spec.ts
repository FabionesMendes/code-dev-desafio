import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com.br/');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('ve');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowDown');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowDown');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowDown');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowDown');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowDown');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowUp');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('ArrowUp');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').press('Enter');
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('cade');
  await page.getByLabel('cadeira gamer').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('e');
  await page.getByLabel('escova de dente').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('ar');
  await page.getByLabel('armario', { exact: true }).click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('rex');
  await page.getByLabel('rexona', { exact: true }).click();
  /*
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('guar');
  await page.getByLabel('guarda roupa', { exact: true }).click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('*');
  await page.getByLabel('delete').first().click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('/');
  await page.getByLabel('esmalte').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').click();
  await page.getByPlaceholder('Pesquisa Amazon.com.br').fill('*');
  await page.getByLabel('protetor solar facial').click();
*/
  
});