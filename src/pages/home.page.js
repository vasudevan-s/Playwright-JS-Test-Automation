/*
    Created by Vasudevan Sampath
    This is a POM (Page object model) test design pattern class for Home Page related methods
 */
export class HomePage {

    constructor(page) {
        this.menuTopLinks = page.locator('#widget-navbar-217834 > ul > li > a > div > span');
    }

    async getHomePageLinks() {
        return this.menuTopLinks.allInnerTexts();
    }
}