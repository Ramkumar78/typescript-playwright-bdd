import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: '../features', // Point to feature files
    fullyParallel: true,
    retries: 1,
    workers: 2,
    reporter: [
        ['list'],
        ['html', { outputFolder: '../reports', open: 'never' }] // HTML reporting
    ],
    use: {
        baseURL: 'https://www.autotrader.co.uk',
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});