/*
    Created by Vasudevan Sampath
    This spec has all methods referring to the Home page
 */
import {test} from '@playwright/test';
import {HomePage} from '../../pages/home.page';
import {HomepageTestData} from "../../testdata/homepage.testdata";

test('Verify for the presence of Home Page Links', async ({page}) => {
    const homePage = await new HomePage(page);
    await homePage.navigateToHomePage();
    const homePageTestData = HomepageTestData.links
    const homePageLinks = await homePage.getHomePageLinks();
    await homePage.isEqual(homePageLinks, homePageTestData);
});