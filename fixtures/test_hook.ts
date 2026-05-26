import { test as base } from '@playwright/test';
import { HomePage } from '@models/pages/homepage';
import { DashboardPage } from '@models/pages/dashboard';
import { ApiServiceManager } from '@models/services/manager';

type MyFixtures = {
    homePage: HomePage;
    dashboardPage: DashboardPage;
    api: ApiServiceManager;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await use(homePage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    api: async ({ request }, use) => {
        const apiManager = new ApiServiceManager(request);
        await use(apiManager);
    },
});

export { expect } from '@playwright/test';
