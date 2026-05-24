import { test, expect } from '@fixtures/test_hook';

test.describe.configure({ mode: 'serial' });

test.describe('CyberBnB Login', () => {
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

    test('Should login successfully', async ({ homePage, page }) => {
        const email = process.env.TEST_EMAIL!;
        const password = process.env.TEST_PASSWORD!;

        // 1. Thực hiện đăng nhập
        await homePage.login(email, password);

        // 2. Nút user menu xuất hiện với tên user
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        // 3. Tên user hiển thị trên navbar
        const userName = page.getByRole('navigation').locator('span', { hasText: /Quyên/i }).first();
        await expect(userName).toBeVisible();

        // 4. Nút "Đăng ký" (trước login) không còn hiển thị
        await expect(page.locator('button.bg-main')).toBeHidden();

        // 5. Mở dropdown menu và kiểm tra các option sau khi đã login
        await userMenuButton.click();
        const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
        await expect(dropdown).toBeVisible();
        await expect(dropdown.getByText('Sign out')).toBeVisible();
    });

    test('Should not login with empty email and password', async ({ homePage, page }) => {
        // 1. Mở dialog đăng nhập
        await homePage.navigateToLogin();
        const loginDialog = page.getByRole('dialog');
        await expect(loginDialog).toBeVisible();

        // 2. Không nhập gì, click Đăng nhập luôn
        await page.getByRole('button', { name: 'Đăng nhập' }).click();

        // 3. Hiển thị thông báo lỗi "Vui lòng không bỏ trống" cho cả Email và Mật khẩu
        const errorMessages = loginDialog.getByText('Vui lòng không bỏ trống');
        await expect(errorMessages).toHaveCount(2);

        // 4. Dialog đăng nhập vẫn còn hiển thị (không chuyển trang)
        await expect(loginDialog).toBeVisible();

        // 5. Không xuất hiện user menu (chưa đăng nhập được)
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeHidden();
    });

    test('Should not login with wrong email', async ({ homePage, page }) => {
        // 1. Mở dialog và nhập email sai + mật khẩu đúng
        await homePage.navigateToLogin();
        const loginDialog = page.getByRole('dialog');
        await expect(loginDialog).toBeVisible();

        await homePage.emailInput.fill('wrong_email@gmail.com');
        await homePage.passwordInput.fill(process.env.TEST_PASSWORD!);
        await page.getByRole('button', { name: 'Đăng nhập' }).click();

        // 2. Hiển thị toast thông báo lỗi
        await expect(page.getByText('Email hoặc mật khẩu không đúng !')).toBeVisible({
            timeout: 5000,
        });

        // 3. Dialog vẫn mở, không đăng nhập được
        await expect(loginDialog).toBeVisible();
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeHidden();
    });

    test('Should not login with wrong password', async ({ homePage, page }) => {
        // 1. Mở dialog và nhập email đúng + mật khẩu sai
        await homePage.navigateToLogin();
        const loginDialog = page.getByRole('dialog');
        await expect(loginDialog).toBeVisible();

        await homePage.emailInput.fill(process.env.TEST_EMAIL!);
        await homePage.passwordInput.fill('sai_mat_khau_123');
        await page.getByRole('button', { name: 'Đăng nhập' }).click();

        // 2. Hiển thị toast thông báo lỗi
        await expect(page.getByText('Email hoặc mật khẩu không đúng !')).toBeVisible({
            timeout: 5000,
        });

        // 3. Dialog vẫn mở, không đăng nhập được
        await expect(loginDialog).toBeVisible();
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeHidden();
    });

    test('Should not login with invalid email format', async ({ homePage, page }) => {
        await homePage.navigateToLogin();
        const loginDialog = page.getByRole('dialog');
        await expect(loginDialog).toBeVisible();

        // 1. Nhập email sai định dạng (không có @)
        await homePage.emailInput.fill('emailkhonghople');
        await homePage.passwordInput.fill('123456');
        await page.getByRole('button', { name: 'Đăng nhập' }).click();

        // 2. Hiển thị lỗi validation định dạng email
        await expect(loginDialog.getByText('Vui lòng nhập đúng định dạng email')).toBeVisible();

        // 3. Dialog vẫn mở, không đăng nhập được
        await expect(loginDialog).toBeVisible();
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeHidden();
    });

    test('Login form should not have password toggle icon', async ({ homePage, page }) => {
        await homePage.navigateToLogin();
        const loginDialog = page.getByRole('dialog');
        await expect(loginDialog).toBeVisible();

        await homePage.passwordInput.fill('MySecret123');

        // Form đăng nhập không có icon con mắt
        const eyeIcon = loginDialog.locator('.anticon-eye-invisible, .anticon-eye');
        await expect(eyeIcon).toHaveCount(0);

        // Mật khẩu luôn bị ẩn
        await expect(homePage.passwordInput).toHaveAttribute('type', 'password');
    });

    test('Should show success toast on login', async ({ homePage, page }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);

        // Toast "Đăng nhập thành công" phải xuất hiện
        await expect(page.getByText('Đăng nhập thành công')).toBeVisible({ timeout: 5000 });
    });

    test('Should show success toast on logout', async ({ homePage, page }) => {
        // 1. Đăng nhập trước
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        // 2. Mở dropdown và click Sign out
        await userMenuButton.click();
        const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
        await expect(dropdown).toBeVisible();
        await dropdown.getByText('Sign out').click();

        // 3. Toast "Đăng xuất thành công" phải xuất hiện
        await expect(page.getByText('Đăng xuất thành công')).toBeVisible({ timeout: 5000 });

        // 4. Sau logout: nút đăng ký hiện lại
        await expect(page.locator('button.bg-main')).toBeVisible({ timeout: 10000 });
    });

    test('Should redirect to homepage after logout', async ({ homePage, page }) => {
        // 1. Đăng nhập
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        // 2. Chuyển sang trang khác
        await homePage.selectLocation('hcm');
        await page.waitForLoadState('domcontentloaded');
        expect(page.url()).toContain('/rooms/ho-chi-minh');

        // 3. Logout
        await userMenuButton.click();
        const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
        await expect(dropdown).toBeVisible();
        await dropdown.getByText('Sign out').click();

        // 4. Hiển thị toast đăng xuất thành công
        await expect(page.getByText('Đăng xuất thành công')).toBeVisible({ timeout: 5000 });

        // 5. Redirect về trang chủ sau logout
        await page.waitForURL('**/');
        expect(page.url()).toBe(`${process.env.BASE_URL}/`);

        // 6. Trạng thái đã logout
        await expect(page.locator('button.bg-main')).toBeVisible();
    });

});
