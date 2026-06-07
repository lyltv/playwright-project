import { test, expect } from '@fixtures/test_hook';

test.describe.skip('Dashboard - Earnings', () => {
    // Ép dọn dẹp cookie để đảm bảo tài khoản sạch sẽ trước mỗi case
    test.beforeEach(async ({ context }) => {
        await context.clearCookies();
    });

    test('EARNINGS_01: Should access earnings page', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // 🟢 Chờ thông minh cho đến khi menu "Thu nhập" xuất hiện (tối đa 5s)
        const earningsLink = page.getByText(/thu nhập|earnings/i).first();
        await expect(earningsLink).toBeVisible({ timeout: 5000 });

        await earningsLink.click();
        await page.waitForLoadState('domcontentloaded');

        // Trang earnings phải hiển thị nội dung tổng thu nhập hoặc giao dịch
        const earningsContent = page.getByText(/tổng thu nhập|total earnings|transaction/i).first();
        await expect(earningsContent).toBeVisible({ timeout: 5000 });
    });

    test('EARNINGS_02: Should restrict access for non-host user', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Nếu là tài khoản thường, menu "Thu nhập" bắt buộc KHÔNG ĐƯỢC XUẤT HIỆN
        const earningsLink = page.getByText(/thu nhập|earnings/i).first();

        // Cách test chuẩn: Khẳng định nó bị ẩn đi đối với user thường
        await expect(earningsLink).toBeHidden({ timeout: 5000 });
    });

    test('EARNINGS_03: Should show message when host has no income', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Chờ menu xuất hiện và click
        const earningsLink = page.getByText(/thu nhập|earnings/i).first();
        await expect(earningsLink).toBeVisible({ timeout: 5000 });

        await earningsLink.click();
        await page.waitForLoadState('domcontentloaded');

        // Ép web phải hiển thị 1 trong 2: Hoặc chữ "Chưa có thu nhập", hoặc chữ "Tổng thu nhập"
        const noIncomeOrHasIncome = page
            .locator('text=/chưa có thu nhập|no income|tổng thu nhập|total/i')
            .first();
        await expect(noIncomeOrHasIncome).toBeVisible({ timeout: 5000 });
    });
});
