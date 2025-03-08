import { Page, Locator } from '@playwright/test';
import { config } from '../utils/config';

export class HomePage {
    readonly page: Page;
    readonly acceptAllButton: Locator;
    readonly postcodeInput: Locator;
    readonly makeDropdown: Locator;
    readonly maxPriceDropdown: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptAllButton = page.locator('//button[@title="Accept All" and contains(@class, "sp_choice_type_11")]');
        this.postcodeInput = page.locator('#postcode');
        this.makeDropdown = page.locator('#make');
        this.maxPriceDropdown = page.locator('#maxPrice');
        this.searchButton = page.locator('button[data-gui="search-cars-button"]');
    }

    async navigate() {
        await this.page.goto(config.baseUrl, { waitUntil: 'domcontentloaded' });
    }

    async acceptCookies() {
        await this.page.waitForLoadState('networkidle', { timeout: 60000 });

        const frames = this.page.frames();
        for (const frame of frames) {
            const buttonInFrame = frame.locator('//button[@title="Accept All" and contains(@class, "sp_choice_type_11")]');
            if (await buttonInFrame.count() > 0) {
                console.log('Button found in iframe');
                await buttonInFrame.click({ timeout: 30000 });
                return;
            }
        }

        await this.page.waitForSelector('//button[@title="Accept All" and contains(@class, "sp_choice_type_11")]', { state: 'visible', timeout: 60000 });
        await this.acceptAllButton.click({ timeout: 30000 });
    }

    async enterPostcode(postcode: string) {
        await this.postcodeInput.fill(postcode);
    }

    async selectMake(make: string) {
        await this.makeDropdown.selectOption({ value: make }); // Use parameter
    }

    async selectMaxPrice(maxPrice: string) {
        await this.maxPriceDropdown.selectOption({ value: maxPrice }); // Use parameter
    }

    async clickSearch() {
        await this.searchButton.click();
    }
}