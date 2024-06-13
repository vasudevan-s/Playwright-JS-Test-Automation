/*
    Created by Vasudevan Sampath
    This spec has all methods referring to the Home page
 */
import {test, expect} from '@playwright/test';
import {HomePage} from '../../pages/home.page';
import {HomepageTestData} from "../../testdata/homepage.testdata";

test('Verify for the presence of Home Page Links', async ({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    const homePageTestData = HomepageTestData.links
    const homePageLinks = await new HomePage(page).getHomePageLinks();
    expect(homePageLinks).toEqual(homePageTestData);
});