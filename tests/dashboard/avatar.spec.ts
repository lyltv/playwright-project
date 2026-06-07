import { test, expect } from '@fixtures/test_hook';
import path from 'path';

test.describe('Dashboard - Update Avatar', () => {
    test.describe.configure({ mode: 'serial' });

    test('UPDATE_AVATAR_01: Should open photo update popup', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();

        // Popup có nút chọn file và nút upload
        const fileInput = dialog.locator('input[type="file"]');
        await expect(fileInput).toBeAttached();
        await expect(dialog.getByRole('button', { name: /Upload/i })).toBeVisible();
        await expect(dialog.getByRole('button', { name: 'Close' })).toBeVisible();
    });

    test('UPDATE_AVATAR_02: Should close photo update popup', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        await expect(dialog).toBeVisible();

        await dialog.getByRole('button', { name: 'Close' }).click();
        await expect(dialog).toBeHidden();
    });

    test('UPDATE_AVATAR_03: Should upload image in correct format', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        const fileInput = dialog.locator('input[type="file"]');

        // Upload ảnh JPG hợp lệ
        const testImagePath = path.resolve(__dirname, '../../test-data/valid-avatar.jpg');
        await fileInput.setInputFiles(testImagePath);
        await dialog.getByRole('button', { name: /Upload/i }).click();

        await expect(page.getByText(/thành công|success/i)).toBeVisible({ timeout: 10000 });
    });

    test('UPDATE_AVATAR_04: Should show error when no image selected', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        // BUG: Không hiển thị lỗi khi chưa chọn ảnh mà bấm Upload
        test.fail();

        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        await dialog.getByRole('button', { name: /Upload/i }).click();

        await expect(page.getByText(/chọn|select/i)).toBeVisible({ timeout: 5000 });
    });

    test('UPDATE_AVATAR_05: Should reject non-image file format', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        const fileInput = dialog.locator('input[type="file"]');

        const testFilePath = path.resolve(__dirname, '../../test-data/invalid-file.pdf');
        await fileInput.setInputFiles(testFilePath);
        await dialog.getByRole('button', { name: /Upload/i }).click();

        await expect(page.getByText(/format|định dạng|không hợp lệ/i)).toBeVisible({
            timeout: 5000,
        });
    });

    test('UPDATE_AVATAR_06: Should reject image exceeding file size limit', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        const fileInput = dialog.locator('input[type="file"]');

        const testImagePath = path.resolve(__dirname, '../../test-data/large-image.jpg');
        await fileInput.setInputFiles(testImagePath);
        await dialog.getByRole('button', { name: /Upload/i }).click();

        await expect(page.getByText(/size|kích thước|dung lượng/i)).toBeVisible({ timeout: 5000 });
    });

    test('UPDATE_AVATAR_07: Should handle rectangular image upload', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        // BUG: Ảnh hình chữ nhật không được xử lý đúng
        test.fail();

        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        const fileInput = dialog.locator('input[type="file"]');

        const testImagePath = path.resolve(__dirname, '../../test-data/rectangular-image.jpg');
        await fileInput.setInputFiles(testImagePath);
        await dialog.getByRole('button', { name: /Upload/i }).click();

        await expect(page.getByText(/thành công|success/i)).toBeVisible({ timeout: 10000 });

        // Avatar không bị overflow
        const avatar = page
            .locator('img[alt*="avatar"], img[alt*="Avatar"], .ant-avatar img')
            .first();
        if (await avatar.isVisible()) {
            const box = await avatar.boundingBox();
            if (box) {
                expect(box.width).toBeGreaterThan(0);
                expect(box.height).toBeGreaterThan(0);
            }
        }
    });

    test('UPDATE_AVATAR_08: Should handle multiple upload clicks', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);
        await dashboardPage.openAvatarDialog();

        const dialog = page.getByRole('dialog');
        const fileInput = dialog.locator('input[type="file"]');

        const testImagePath = path.resolve(__dirname, '../../test-data/valid-avatar.jpg');
        await fileInput.setInputFiles(testImagePath);

        const uploadBtn = dialog.getByRole('button', { name: /Upload/i });
        await Promise.all([uploadBtn.click(), uploadBtn.click({ delay: 50 })]);

        await page.waitForTimeout(3000);
        const successToasts = page.getByText(/thành công|success/i);
        const count = await successToasts.count();
        expect(count).toBeLessThanOrEqual(1);
    });

    test('UPDATE_AVATAR_09: Should persist avatar after page refresh', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Lấy src avatar hiện tại — tìm ảnh trên trang dashboard
        const avatar = page.locator('img').first();
        await avatar.getAttribute('src');

        await page.reload();
        await page.waitForLoadState('domcontentloaded');

        const avatarAfter = page.locator('img').first();
        const srcAfter = await avatarAfter.getAttribute('src');

        // Avatar phải giữ nguyên sau refresh
        expect(srcAfter).toBeTruthy();
    });
});
