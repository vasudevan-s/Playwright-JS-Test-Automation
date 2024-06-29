/*
    Created by Vasudevan Sampath
    This test spec has test methods for Login page
 */
import {test} from '@playwright/test';
import {LoginPage} from '../../pages/login.page';
import {logincred} from '../../testdata/loginpage.json';
import {Misc} from '../../util/misc';

let loginPage;

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToHomePage();
    await loginPage.navigateToLoginScreen();
});

test('Verify valid login credentials', async ({page}) => {
    await loginPage.doLogin(logincred[0].loginid, logincred[0].password);
    await loginPage.isLoginSuccessful();
});

test('Verify invalid login credentials', async ({page}) => {
    await loginPage.doLogin(Misc.generateUUID(), Misc.generateUUID());
    await loginPage.didLoginFail();
});