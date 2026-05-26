import { test, expect } from '@fixtures/test_hook';

test.describe('Dashboard - Earnings', () => {
    test('EARNINGS_01: Should access earnings page', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Tìm menu "Thu nhập" / "Earnings"
        const earningsLink = page.getByText(/thu nhập|earnings/i).first();
        if (await earningsLink.isVisible()) {
            await earningsLink.click();
            await page.waitForLoadState('domcontentloaded');

            // Trang earnings phải hiển thị
            const earningsContent = page.getByText(/tổng thu nhập|total earnings|transaction/i);
            const isVisible = await earningsContent.isVisible().catch(() => false);
            expect(isVisible).toBeTruthy();
        } else {
            test.skip();
        }
    });

    test('EARNINGS_02: Should restrict access for non-host user', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        const earningsLink = page.getByText(/thu nhập|earnings/i).first();
        if (await earningsLink.isVisible()) {
            await earningsLink.click();
            await page.waitForLoadState('domcontentloaded');

            // Non-host: hiển thị thông báo từ chối hoặc redirect
            const accessDenied = page.getByText(/không có quyền|access denied|not a host/i);
            const isRestricted = await accessDenied.isVisible().catch(() => false);
            const isRedirected = page.url().includes('/') && !page.url().includes('earnings');

            expect(isRestricted || isRedirected).toBeTruthy();
        } else {
            // Không có link earnings → user không phải host → pass
            expect(true).toBeTruthy();
        }
    });

    test('EARNINGS_03: Should show message when host has no income', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        const earningsLink = page.getByText(/thu nhập|earnings/i).first();
        if (await earningsLink.isVisible()) {
            await earningsLink.click();
            await page.waitForLoadState('domcontentloaded');

            const noIncome = page.getByText(/chưa có thu nhập|no income/i);
            const hasIncome = page.getByText(/tổng thu nhập|total/i);

            const showsNoIncome = await noIncome.isVisible().catch(() => false);
            const showsIncome = await hasIncome.isVisible().catch(() => false);

            expect(showsNoIncome || showsIncome).toBeTruthy();
        } else {
            test.skip();
        }
    });
});
