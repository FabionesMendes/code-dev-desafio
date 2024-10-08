import { Page, expect } from "@playwright/test";
import { BarraBuscaComponentMapping } from "./barra-de-busca-mapping";

export class BarraBuscaComponentPage {
    private page: Page;
    private mapping: BarraBuscaComponentMapping;

    constructor(page: Page) {
        this.page = page;
        this.mapping = new BarraBuscaComponentMapping(page);
    }

    /**
     * 
     * @param nomeDoProduto 
     */
    async inserirTextoNaBarra(nomeDoProduto:string) {
        await this.mapping.inputBarraNavegacao.fill(nomeDoProduto);
    }

    /**
     * 
     * @param opcaoDesejada 
     * @param teclaPressionada 
     */
    async selecionarSugestaoTeclado(opcaoDesejada:string, teclaPressionada:string) {
        await this.mapping.sugestoes.getByText(opcaoDesejada, { exact: true }).press(teclaPressionada);
    }    

    /**
     * 
     * @param textoEsperado 
     */
    async verificarSeValorCampoBuscaIgualTexto(textoEsperado:string) {
        const textoAtual = await this.mapping.inputBarraNavegacao.inputValue();
        
        expect.soft(textoAtual).toBe(textoEsperado);
    }
}