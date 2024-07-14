/*
    Created by Vasudevan Sampath
    This is a POM (Page object model) test design pattern class for Home Page related methods
    This class extends from BasePage class
 */
import {BasePage} from "./base.page";

export class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.menuTopLinks = page.locator("//ul[@class='navbar-nav horizontal']/li/a/div");
        this.menuVerticalLinks = page.locator("//div[@class='list-group mb-3']/a");
    }

    async getHomePageLinks() {
        let innerTexts = await this.menuTopLinks.allInnerTexts();
        return innerTexts.map(element => element.replace('\n', ''));
    }

    async getHomePageVerticalLinks() {
        return await this.menuVerticalLinks.allInnerTexts();
    }
}