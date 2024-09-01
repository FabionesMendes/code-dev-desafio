import { BasePage } from "../../base-page";
import { Page } from "@playwright/test";
import { HomeMapping } from "./home-mapping";
import { BarraBuscaComponentPage } from "../../components/barra-de-navegacao/barra-de-busca-page";


export class HomePage extends BasePage {
    public mapping: HomeMapping;
    public components: Object;

    constructor(page: Page) {
        super(page);
        this.mapping = new HomeMapping();
        this.components = {
            barraNavegacao: new BarraBuscaComponentPage(page),
        };
    }
}