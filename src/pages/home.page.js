/*
    Created by Vasudevan Sampath
    This is a POM (Page object model) test design pattern class for Home Page related methods
    This class extends from BasePage class
 */
import {BasePage} from "./base.page";

export class HomePage extends BasePage {

    constructor(page) {
        super(page);
        this.menuTopLinks = page.locator('#widget-navbar-217834 > ul > li > a > div > span');
    }

    async getHomePageLinks() {
        return await this.menuTopLinks.allInnerTexts();
    }
}