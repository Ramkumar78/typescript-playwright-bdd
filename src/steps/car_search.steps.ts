import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { HomePage } from '../pages/home.page';

// Set global timeout to 60 seconds
setDefaultTimeout(60000);

let browser: Browser;
let page: Page;
let homePage: HomePage;

Given('I am on the AutoTrader homepage', async () => {
    try {
        browser = await chromium.launch({ headless: false }); // Keep headed mode for now
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.navigate();
    } catch (error) {
        await page.screenshot({ path: 'screenshots/failure-homepage.png' });
        await browser.close();
        throw error; // Rethrow to mark step as failed
    }
});

When('I accept all cookies', async () => {
    try {
        const button = homePage.acceptAllButton;
        console.log('Accept All button found:', await button.isVisible());
        await homePage.acceptCookies();
    } catch (error) {
        await page.screenshot({ path: 'screenshots/failure-accept-cookies.png' });
        throw error;
    }
});

When('I enter the postcode {string}', async (postcode: string) => {
    try {
        await homePage.enterPostcode(postcode); // Pass the feature file value
    } catch (error) {
        await page.screenshot({ path: 'screenshots/failure-postcode.png' });
        throw error;
    }
});

When('I select {string} from the make dropdown', async (make: string) => {
    try {
        await homePage.selectMake(make);
    } catch (error) {
        await page.screenshot({ path: 'screenshots/failure-make.png' });
        throw error;
    }
});

When('I select {string} from the max price dropdown', async (maxPrice: string) => {
    try {
        await homePage.selectMaxPrice(maxPrice);
    } catch (error) {
        await page.screenshot({ path: 'screenshots/failure-max-price.png' });
        throw error;
    }
});

Then('I click the search button', async () => {
    try {
        await homePage.clickSearch();
        await page.waitForLoadState('networkidle');
        await browser.close();
    } catch (error) {
        await page.screenshot({ path: 'screenshots/failure-search.png' });
        await browser.close();
        throw error;
    }
});