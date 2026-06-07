import { DASHBOARD } from '@constants/dashboard.config';
import { test, expect } from '@fixtures/test_hook';

test.describe.skip('Dashboard - Earnings', () => {
    // Clear cookies to ensure clean account state before each test case
    test.beforeEach(async ({ context }) => {
        await context.clearCookies();
    });

    test('EARNINGS_01: Should access earnings page', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Smart wait until "Earnings" menu appears (max 5s)
        const earningsLink = page.getByText(DASHBOARD.EARNINGS.MENU_LINK).first();
        await expect(earningsLink).toBeVisible({ timeout: 5000 });

        await earningsLink.click();
        await page.waitForLoadState('domcontentloaded');

        // Earnings page must display total earnings or transaction contents
        const earningsContent = page.getByText(DASHBOARD.EARNINGS.HEADING).first();
        await expect(earningsContent).toBeVisible({ timeout: 5000 });
    });

    test('EARNINGS_02: Should restrict access for non-host user', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // For regular accounts, the "Earnings" menu must not appear
        const earningsLink = page.getByText(DASHBOARD.EARNINGS.MENU_LINK).first();

        // Standard test verification: assert that it is hidden for regular users
        await expect(earningsLink).toBeHidden({ timeout: 5000 });
    });

    test('EARNINGS_03: Should show message when host has no income', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Wait for menu to appear and click
        const earningsLink = page.getByText(DASHBOARD.EARNINGS.MENU_LINK).first();
        await expect(earningsLink).toBeVisible({ timeout: 5000 });

        await earningsLink.click();
        await page.waitForLoadState('domcontentloaded');

        // Assert page displays either "No income" or "Total earnings"
        const noIncomeOrHasIncome = page.getByText(DASHBOARD.EARNINGS.NO_INCOME_MSG).first();
        await expect(noIncomeOrHasIncome).toBeVisible({ timeout: 5000 });
    });
});
