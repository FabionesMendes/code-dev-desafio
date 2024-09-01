import { Locator, Page } from "@playwright/test";

export class BarraBuscaComponentMapping {
    public readonly page: Page;
    public readonly inputBarraNavegacao: Locator;
    public readonly sugestoes: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputBarraNavegacao = this.page.getByTestId('twotabsearchtextbox');
        this.sugestoes = this.page.getByTestId('nav-flyout-searchAjax');
    }
}