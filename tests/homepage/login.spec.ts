import { test, expect } from '@fixtures/test_hook';

test.describe('CyberBnB Homepage Verification', () => {
    test('Should open login box', async ({ homePage, page }) => {
        await homePage.navigateToLogin();
        const loginDialog = page.getByRole('dialog');
        await expect(loginDialog).toBeVisible();

        // 3. Check title and input
        await expect(loginDialog.getByRole('heading', { name: 'Đăng nhập' })).toBeVisible();
        await expect(loginDialog.getByText('Email', { exact: true }).first()).toBeVisible();
        await expect(page.getByPlaceholder('Vui lòng nhập tài khoản')).toBeVisible();

        await expect(loginDialog.getByText('Mật khẩu', { exact: true }).first()).toBeVisible();
        await expect(page.getByPlaceholder('Vui lòng nhập mật khẩu')).toBeVisible();
        // Dialog has 2 buttons
        const btnRegister = page.getByRole('button', { name: 'Đăng ký' });
        const btnLogin = page.getByRole('button', { name: 'Đăng nhập' });
        await expect(btnRegister).toBeVisible();
        await expect(btnLogin).toBeVisible();

        // Check 2 buttons color
        const registerBgColor = await btnRegister.evaluate(
            (el) => window.getComputedStyle(el).backgroundColor
        );
        expect(registerBgColor).toBe('rgb(254, 107, 110)');

        const loginBgColor = await btnLogin.evaluate(
            (el) => window.getComputedStyle(el).backgroundColor
        );
        expect(loginBgColor).toBe('rgb(0, 0, 0)');

        // Check text color
        const textColor = await btnLogin.evaluate((el) => window.getComputedStyle(el).color);
        expect(textColor).toBe('rgb(255, 255, 255)');
    });
    // TODO
    test('Should open signup box', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const signUpDialog = page.getByRole('dialog');
        await expect(signUpDialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();
    });
});
