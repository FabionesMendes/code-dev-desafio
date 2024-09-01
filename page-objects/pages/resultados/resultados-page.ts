import { BasePage } from "../../base-page";
import { Page, expect } from "@playwright/test";
import { ResultadosMapping } from "./resultados-mapping";
import { BarraBuscaComponentPage } from "../../components/barra-de-navegacao/barra-de-busca-page";


export class ResultadosPage extends BasePage {
    private mapping: ResultadosMapping;
    private components: Object;

    constructor(page: Page) {
        super(page);
        this.mapping = new ResultadosMapping(page);
        this.components = {
            barraNavegacao: new BarraBuscaComponentPage(page),
        };
    }

    /**
     * Este método verifica toda a lista de produtos e valida se o título de cada produto contém o {texto} a ser validado
     * @param texto O texto que deseja validar se existe em cada título dos produtos
     */
    async ValidaSeTituloProdutoContemTexto(texto:string) {
        const tituloProdutos = await this.mapping.listaProdutos.locator('[data-cy="title-recipe"] h2').all();

        for (const titulo of tituloProdutos) {
            const textoTitulo = await titulo.textContent();

            expect.soft(textoTitulo).toContain(texto);
        }            
    }
}