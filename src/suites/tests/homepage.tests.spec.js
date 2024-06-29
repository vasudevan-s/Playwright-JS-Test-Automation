/*
    Created by Vasudevan Sampath
    This test spec has test methods for Home page
 */
import {test} from '@playwright/test';
import {BasePage} from '../../pages/base.page';
import {HomePage} from '../../pages/home.page';
import {homePageLinks} from "../../testdata/homepage.json";

let basePage, homePage, actualLinks, expectedLinks;

test.beforeEach(async ({page}) => {
    basePage = new BasePage(page);
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
});

test.afterEach(async ({page}) => {
    await homePage.isEqual(actualLinks, expectedLinks);
});

test('Verify for the presence of Home Page Top level links', async ({page}) => {
    actualLinks = await homePage.getHomePageLinks();
    expectedLinks = await basePage.getDelimitedValues(homePageLinks.horizontalLinks, ",");
});

test('Verify for the presence of Home Page Vertical links', async ({page}) => {
    await basePage.navigateToLoginScreen();
    actualLinks = await homePage.getHomePageVerticalLinks();
    expectedLinks = await basePage.getDelimitedValues(homePageLinks.verticalLinks, ",");
});