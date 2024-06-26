/*
    Created by Vasudevan Sampath
    This spec has all methods referring to the Login page
 */
import {test} from '@playwright/test';
import {LoginPage} from '../../pages/login.page';
import {LoginTestData} from '../../testdata/login.testdata';
import {after, before} from "node:test";

test('Verify valid login credentials', async ({page}) => {
    const loginPage = await new LoginPage(page);
    const loginTestData = LoginTestData.validLoginCred;
    await loginPage.navigateToHomePage();
    await loginPage.doLogin(loginTestData.username, loginTestData.password);
    await loginPage.isLoginSuccessful();
});

test.fail('Verify invalid login credentials', async ({page}) => {
    const loginPage = await new LoginPage(page);
    const loginTestData = LoginTestData.invalidLoginCred;
    await loginPage.navigateToHomePage();
    await loginPage.doLogin(loginTestData.username, loginTestData.password);
    await loginPage.isLoginSuccessful();
});