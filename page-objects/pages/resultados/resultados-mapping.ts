import { Locator, Page } from "@playwright/test";

export class ResultadosMapping {
    public readonly page: Page;
    public readonly listaProdutos: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listaProdutos = this.page.locator('div[data-component-id][data-asin]');
    }
}