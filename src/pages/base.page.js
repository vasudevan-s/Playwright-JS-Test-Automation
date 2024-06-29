/*
    Created by Vasudevan Sampath
    This is a Base Page that is a parent class for all the page classes
    All common functionality is available here
 */
import {expect} from "@playwright/test";
import {Misc} from "../util/misc";

export class BasePage {

    constructor(page) {
        this.page = page;
        this.myAccount = page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
        this.loginMenuItem = page.locator("//span[normalize-space()='Login']");
    }

    async navigateToHomePage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io');
        await this.page.waitForLoadState();
    }

    async navigateToLoginScreen() {
        await this.myAccount.hover();
        await this.loginMenuItem.click();
        await this.page.waitForLoadState();
    }

    async isEqual(actual, expected) {
        await expect(actual).toEqual(expected);
    }

    async isVisible(element) {
        await expect(element).toBeVisible();
    }

    async containsText(element, text) {
        await expect(element).toContainText(text);
    }

    async getDelimitedValues(key, delimiter) {
        return Misc.getStringArray(key, delimiter);
    }
}
