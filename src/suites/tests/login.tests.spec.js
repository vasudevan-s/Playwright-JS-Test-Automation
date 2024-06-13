/*
    Created by Vasudevan Sampath
    This spec has all methods referring to the Login page
 */
import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/login.page';
import {LoginTestdata} from '../../testdata/login.testdata';

test('Verify valid login credentials', async ({page}) => {
    const loginTestData = LoginTestdata.loginCred;
    await page.goto('https://ecommerce-playground.lambdatest.io');
    const loginPage = new LoginPage(page);
    await loginPage.doLogin(loginTestData.username, loginTestData.password);
    await expect(loginPage.editAccountInfo).toBeVisible();
});