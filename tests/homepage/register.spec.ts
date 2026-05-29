import { test, expect } from '@fixtures/test_hook';
import { Page, Locator } from '@playwright/test';

async function fillRegistrationForm(
    dialog: Locator,
    page: Page,
    overrides: Partial<{
        name: string;
        email: string;
        password: string;
        phone: string;
        birthday: string;
        gender: string;
    }> = {}
) {
    const data = {
        name: 'Test User',
        email: `test${Date.now()}@gmail.com`,
        password: 'Test@12345',
        phone: '0901234567',
        birthday: '15/06/1995',
        gender: 'Nam',
        ...overrides,
    };

    await dialog.getByPlaceholder('Điền tên vào đây...').first().fill(data.name);
    await dialog.getByPlaceholder('Điền tên vào đây...').last().fill(data.email);
    await dialog.getByPlaceholder('Điền mật khẩu....').fill(data.password);
    await dialog.getByPlaceholder('Điền số điện thoại....').fill(data.phone);

    const birthdayInput = dialog.getByPlaceholder('Chọn ngày sinh');
    await birthdayInput.click();
    await birthdayInput.pressSequentially(data.birthday);
    await birthdayInput.press('Enter');

    await dialog.locator('.ant-select').click();
    const genderDropdown = page.locator('.ant-select-dropdown:visible');
    await genderDropdown.waitFor({ state: 'visible' });
    await genderDropdown.getByText(data.gender, { exact: true }).click();
}

test.describe('CyberBnB Register', () => {
    test('Should open signup box', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const signUpDialog = page.getByRole('dialog');
        await expect(signUpDialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();
    });

    test('Should register successfully', async ({ homePage, page }) => {
        const randomId = Date.now();

        const signUpData = {
            name: `Test User ${randomId}`,
            email: `testuser${randomId}@gmail.com`,
            password: 'Test@12345',
            phone: '0901234567',
            birthday: '15/06/1995',
            gender: 'Nam',
        };

        // 1. Điền form và submit
        await homePage.signUp(signUpData);

        // 2. Toast "Đăng ký thành công" xuất hiện
        await expect(page.getByText('Đăng ký thành công')).toBeVisible({ timeout: 10000 });

        // 3. Sau đăng ký thành công, web tự mở dialog Đăng nhập
        const loginDialog = page.getByRole('dialog').filter({
            has: page.getByRole('heading', { name: 'Đăng nhập' }),
        });
        await expect(loginDialog).toBeVisible({ timeout: 5000 });
    });

    test('Should close register form with X button', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();

        // Click nút X (Close) để đóng dialog
        await dialog.getByRole('button', { name: 'Close' }).click();

        // Dialog đăng ký phải đóng lại
        await expect(dialog).toBeHidden();
    });

    test('Should close register form by clicking outside popup', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();

        // Click bên ngoài dialog (vùng overlay)
        await page.mouse.click(10, 10);

        // Dialog phải đóng lại
        await expect(dialog).toBeHidden();
    });

    test('Should not register with all fields empty', async ({ homePage, page }) => {
        // 1. Mở dialog đăng ký
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();

        // 2. Không nhập gì, click Đăng ký luôn
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // 3. Hiển thị lỗi "Vui lòng không bỏ trống" cho Name, Email, Password, Phone
        const emptyErrors = dialog.getByText('Vui lòng không bỏ trống');
        await expect(emptyErrors).toHaveCount(4);

        // 4. Hiển thị lỗi riêng cho Birthday
        await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();

        // 5. Dialog vẫn mở, không đăng ký được
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();

        // 6. Không xuất hiện toast thành công
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should show error when only Name is filled', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        // Chỉ nhập Name, bỏ trống các field khác
        await dialog.getByPlaceholder('Điền tên vào đây...').first().fill('Test User');
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // Email, Password, Phone vẫn báo lỗi trống
        const emptyErrors = dialog.getByText('Vui lòng không bỏ trống');
        await expect(emptyErrors).toHaveCount(3);

        // Birthday vẫn báo lỗi
        await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();

        // Không đăng ký được
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should show error when only Email is filled', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        // Chỉ nhập Email
        await dialog.getByPlaceholder('Điền tên vào đây...').last().fill('test@gmail.com');
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // Name, Password, Phone vẫn báo lỗi trống
        const emptyErrors = dialog.getByText('Vui lòng không bỏ trống');
        await expect(emptyErrors).toHaveCount(3);

        // Birthday vẫn báo lỗi
        await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();

        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should show error when Birthday is missing', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        // Nhập đủ 4 field text, bỏ trống Birthday
        await dialog.getByPlaceholder('Điền tên vào đây...').first().fill('Test User');
        await dialog.getByPlaceholder('Điền tên vào đây...').last().fill(`test${Date.now()}@gmail.com`);
        await dialog.getByPlaceholder('Điền mật khẩu....').fill('Test@12345');
        await dialog.getByPlaceholder('Điền số điện thoại....').fill('0901234567');
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // Không còn lỗi "Vui lòng không bỏ trống"
        await expect(dialog.getByText('Vui lòng không bỏ trống')).toHaveCount(0);

        // Chỉ còn lỗi Birthday
        await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();

        // Không đăng ký được
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should not register with password under 6 characters', async ({ homePage, page }) => {
        // BUG: Web cho phép đăng ký với mật khẩu < 6 ký tự (không validate)
        test.fail();

        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();

        await fillRegistrationForm(dialog, page, { password: '12345' });

        // Bắt API response khi click đăng ký
        const [response] = await Promise.all([
            page.waitForResponse((res) => res.url().includes('/auth/signup')),
            dialog.getByRole('button', { name: 'Đăng ký' }).click(),
        ]);

        // Server phải từ chối đăng ký với mật khẩu < 6 ký tự
        expect(response.status()).not.toBe(200);
    });

    test('Should not register with letters in phone number', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        await fillRegistrationForm(dialog, page, { phone: 'abc7658345' });
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // Hiển thị lỗi "Số điện thoại không hợp lệ"
        await expect(dialog.getByText('Số điện thoại không hợp lệ')).toBeVisible();
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should not register with incorrect phone number length', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        await fillRegistrationForm(dialog, page, { phone: '9864' });
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // Hiển thị lỗi "Số điện thoại không hợp lệ"
        await expect(dialog.getByText('Số điện thoại không hợp lệ')).toBeVisible();
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should not register with future date of birth', async ({ homePage, page }) => {
        // BUG: Web cho phép chọn ngày sinh ở tương lai và đăng ký thành công
        test.fail();

        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();

        await fillRegistrationForm(dialog, page, { birthday: '15/06/2030' });

        // Bắt API response khi click đăng ký
        const [response] = await Promise.all([
            page.waitForResponse((res) => res.url().includes('/auth/signup')),
            dialog.getByRole('button', { name: 'Đăng ký' }).click(),
        ]);

        // Server phải từ chối đăng ký với ngày sinh tương lai
        expect(response.status()).not.toBe(200);
    });

    test('Should not register with invalid email format', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        await fillRegistrationForm(dialog, page, { email: 'emailsaidinhdang' });
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        await expect(dialog.getByText('Vui lòng nhập đúng định dạng email')).toBeVisible();
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should not register with existing email', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');

        await fillRegistrationForm(dialog, page, { email: process.env.TEST_EMAIL! });
        await dialog.getByRole('button', { name: 'Đăng ký' }).click();

        // Hiển thị toast lỗi email đã tồn tại
        await expect(page.getByText('Email đã tồn tại !')).toBeVisible({ timeout: 5000 });

        // Dialog vẫn mở, không đăng ký được
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();
        await expect(page.getByText('Đăng ký thành công')).toBeHidden();
    });

    test('Should toggle password visibility with eye icon', async ({ homePage, page }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();

        // Nhập mật khẩu
        const passwordInput = dialog.getByPlaceholder('Điền mật khẩu....');
        await passwordInput.fill('MySecret123');

        // 1. Mặc định: type="password" → mật khẩu bị ẩn (hiện dạng ••••)
        await expect(passwordInput).toHaveAttribute('type', 'password');

        // 2. Click icon con mắt → type chuyển thành "text" → hiện mật khẩu
        const eyeIcon = dialog.locator('.ant-input-password-icon');
        await eyeIcon.click();
        await expect(passwordInput).toHaveAttribute('type', 'text');

        // 3. Click lần nữa → type trở về "password" → ẩn mật khẩu lại
        await eyeIcon.click();
        await expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('Should not create duplicate account when clicking register multiple times', async ({
        homePage,
        page,
    }) => {
        await homePage.navigateSignUp();
        const dialog = page.getByRole('dialog');
        const randomId = Date.now();
        const dupEmail = `dupuser${randomId}@gmail.com`;

        await fillRegistrationForm(dialog, page, {
            name: `Dup User ${randomId}`,
            email: dupEmail,
        });

        // Click nút Đăng ký nhiều lần liên tục (spam click)
        const registerBtn = dialog.getByRole('button', { name: 'Đăng ký' });
        await Promise.all([
            registerBtn.click(),
            registerBtn.click({ delay: 50 }),
            registerBtn.click({ delay: 100 }),
        ]);

        await page.waitForTimeout(3000);

        const successToasts = page.getByText('Đăng ký thành công');
        const successCount = await successToasts.count();
        expect(successCount).toBe(1);

        const duplicateToast = page.getByText('Email đã tồn tại !');
        await expect(duplicateToast).toBeHidden();

        // Thử đăng ký lại cùng email → phải báo trùng
        await page.reload();
        await homePage.navigateSignUp();
        const dialog2 = page.getByRole('dialog');

        await fillRegistrationForm(dialog2, page, {
            name: `Dup User ${randomId}`,
            email: dupEmail,
        });
        await dialog2.getByRole('button', { name: 'Đăng ký' }).click();

        await expect(page.getByText('Email đã tồn tại !')).toBeVisible({ timeout: 5000 });
    });
});
