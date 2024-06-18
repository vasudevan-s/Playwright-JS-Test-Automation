/*
    Created by Vasudevan Sampath
    This is a POM (Page object model) test design pattern class for Login Page related methods.
    This class extends from BasePage class
 */
import {BasePage} from "./base.page";

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.myAccount = page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
        this.loginMenuItem = page.locator("//span[normalize-space()='Login']");
        this.userName = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.submit = page.locator("input[value='Login']");
        this.editAccountInfo = page.locator("text=/Edit your account/i");
    }

    async doLogin(username, password) {
        await this.myAccount.hover();
        await this.loginMenuItem.click();
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submit.click();
        await this.page.waitForLoadState();
    }

    async isLoginSuccessful() {
        await this.isVisible(this.editAccountInfo);
    }
}