import { test, expect } from '../fixtures/test_hook';

test.describe('CyberBnB Homepage Verification', () => {

    test('Should navigate to Ho Chi Minh rooms via card', async ({ homePage, page }) => {
        // Click vào card thay vì nhập liệu
        await homePage.selectLocation('hcm');

        // Kiểm tra URL (URL sẽ là /rooms/ho-chi-minh thay vì locationId như trước)
        await expect(page).toHaveURL(/.*ho-chi-minh/);

        // Kiểm tra kết quả hiển thị
        const resultHeading = page.locator('h1');
        await expect(resultHeading).toBeVisible();
    });

    test('Should navigate to Login page', async ({ homePage, page }) => {
        await homePage.navigateToLogin();
        await expect(page).toHaveURL(/.*login/);
    });
});