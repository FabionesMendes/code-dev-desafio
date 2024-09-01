import { Page } from "@playwright/test";

export class BasePage {
    private readonly page: Page;

    
    constructor(page: Page) { 
        this.page = page;
    }

    async abrirAplicacao() {
        await this.page.goto('https://www.amazon.com.br/');
    }
}
