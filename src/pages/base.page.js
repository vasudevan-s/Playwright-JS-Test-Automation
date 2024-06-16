/*
    Created by Vasudevan Sampath
    This is a Base Page that is a parent class for all the page classes
    All common functionality in all the page classes is added here
 */

import {expect} from "@playwright/test";

export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io');
    }

    async isEqual(actual, expected) {
        await expect(actual).toEqual(expected);
    }

    async isVisible(element) {
        await expect(element).toBeVisible();
    }
}
