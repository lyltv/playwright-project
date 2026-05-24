import { test, expect } from '@fixtures/test_hook';

test.describe('CyberBnB Profile Update', () => {
    test.describe.configure({ mode: 'serial' });

    test('Should update profile successfully', async ({ homePage, page }) => {
        // 1. Đăng nhập và vào trang thông tin user
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        await userMenuButton.click();
        const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
        await expect(dropdown).toBeVisible();
        await dropdown.getByText('Dashboard').click();
        await page.waitForLoadState('domcontentloaded');

        // 2. Mở dialog "Chỉnh sửa hồ sơ"
        await page.getByRole('button', { name: 'Chỉnh sửa hồ sơ' }).click();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByText('Chỉnh sửa hồ sơ')).toBeVisible();

        // 3. Lưu giá trị cũ để restore sau
        const nameInput = dialog.locator('#name');
        const phoneInput = dialog.locator('#phone');
        const oldName = await nameInput.inputValue();
        const oldPhone = await phoneInput.inputValue();

        // 4. Cập nhật Họ tên và Số điện thoại
        const newName = 'Quyên Updated';
        const newPhone = '0999888777';
        await nameInput.clear();
        await nameInput.fill(newName);
        await phoneInput.clear();
        await phoneInput.fill(newPhone);

        // 5. Click Cập nhật
        await dialog.getByRole('button', { name: 'Cập nhật' }).click();

        // 6. Kiểm tra dữ liệu đã cập nhật — mở lại dialog xác nhận
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'Chỉnh sửa hồ sơ' }).click();
        const dialog2 = page.getByRole('dialog');
        await expect(dialog2.locator('#name')).toHaveValue(newName);
        await expect(dialog2.locator('#phone')).toHaveValue(newPhone);

        // 7. Restore lại giá trị cũ
        await dialog2.locator('#name').clear();
        await dialog2.locator('#name').fill(oldName);
        await dialog2.locator('#phone').clear();
        await dialog2.locator('#phone').fill(oldPhone);
        await dialog2.getByRole('button', { name: 'Cập nhật' }).click();
        await page.waitForTimeout(1000);
    });

    test('Should not update profile with empty fields', async ({ homePage, page }) => {
        // 1. Đăng nhập và vào Dashboard
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        await userMenuButton.click();
        const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
        await expect(dropdown).toBeVisible();
        await dropdown.getByText('Dashboard').click();
        await page.waitForLoadState('domcontentloaded');

        // 2. Mở dialog "Chỉnh sửa hồ sơ"
        await page.getByRole('button', { name: 'Chỉnh sửa hồ sơ' }).click();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByText('Chỉnh sửa hồ sơ')).toBeVisible();

        // 3. Xoá trống Email, Họ tên, Số điện thoại
        await dialog.locator('#email').clear();
        await dialog.locator('#name').clear();
        await dialog.locator('#phone').clear();

        // 4. Click Cập nhật
        await dialog.getByRole('button', { name: 'Cập nhật' }).click();

        // 5. Hiển thị lỗi validation cho từng trường
        await expect(dialog.getByText('Vui lòng nhập email!')).toBeVisible();
        await expect(dialog.getByText('Vui lòng nhập họ tên!')).toBeVisible();
        await expect(dialog.getByText('Vui lòng nhập số điện thoại!')).toBeVisible();

        // 6. Dialog vẫn mở, không cập nhật được
        await expect(dialog.getByText('Chỉnh sửa hồ sơ')).toBeVisible();
    });

    test('Should not update profile with existing email', async ({ homePage, page }) => {
        // 1. Đăng nhập và vào Dashboard
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        await userMenuButton.click();
        const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
        await expect(dropdown).toBeVisible();
        await dropdown.getByText('Dashboard').click();
        await page.waitForLoadState('domcontentloaded');

        // 2. Mở dialog "Chỉnh sửa hồ sơ" và lưu email cũ
        await page.getByRole('button', { name: 'Chỉnh sửa hồ sơ' }).click();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByText('Chỉnh sửa hồ sơ')).toBeVisible();
        const oldEmail = await dialog.locator('#email').inputValue();

        // 3. Đổi sang email đã tồn tại trong hệ thống
        await dialog.locator('#email').clear();
        await dialog.locator('#email').fill('diemquyen2596dhcn1b@gmail.com');
        await dialog.getByRole('button', { name: 'Cập nhật' }).click();

        // 4. Server trả về lỗi "Email đã tồn tại" — email không thay đổi
        await page.waitForTimeout(1500);

        // 5. Mở lại dialog để xác nhận email vẫn giữ nguyên
        await page.getByRole('button', { name: 'Chỉnh sửa hồ sơ' }).click();
        const dialog2 = page.getByRole('dialog');
        await expect(dialog2.locator('#email')).toHaveValue(oldEmail);
    });
});
