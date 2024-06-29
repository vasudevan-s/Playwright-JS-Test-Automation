/*
    Created by Vasudevan Sampath
    This is a POM (Page object model) test design pattern class for Login Page related methods.
    This class extends from BasePage class
 */
import {BasePage} from "./base.page";

export class LoginPage extends BasePage {

    failedLoginErrorMessage = "Warning: No match for E-Mail Address and/or Password";

    constructor(page) {
        super(page);
        this.userName = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.submit = page.locator("input[value='Login']");
        this.editAccountInfo = page.locator("text=/Edit your account/i");
        this.failedLogin = page.locator('#account-login');
    }

    async doLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submit.click();
        await this.page.waitForLoadState();
    }

    async isLoginSuccessful() {
        await this.isVisible(this.editAccountInfo);
    }

    async didLoginFail() {
        await this.containsText(this.failedLogin, this.failedLoginErrorMessage);
    }
}