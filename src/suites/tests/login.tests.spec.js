/*
    Created by Vasudevan Sampath
    This spec has all methods referring to the Login page
 */
import {test} from '@playwright/test';
import {LoginPage} from '../../pages/login.page';
import {LoginTestData} from '../../testdata/login.testdata';

test('Verify valid login credentials', async ({page}) => {
    const loginPage = await new LoginPage(page);
    const loginTestData = LoginTestData.loginCred;
    await loginPage.navigateToHomePage();
    await loginPage.doLogin(loginTestData.username, loginTestData.password);
    await loginPage.isLoginSuccessful();
});