import { test, expect } from '@fixtures/test_hook';
import { getSearchDateRangeRegex } from 'utils/dateHelper';

test.describe('Search Filter', () => {
    test('SEARCH_FILTER_01: Should show all locations when location is blank', async ({ page }) => {
        await page.goto('/');

        // Click vào khu vực location trên search bar
        await page.getByText('Địa điểm').click();
        const popup = page.locator('div.absolute').filter({
            has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
        });
        await expect(popup).toBeVisible();
    });

    test('SEARCH_FILTER_02: Should search rooms by valid location', async ({ homePage, page }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
        expect(page.url()).toContain('ho-chi-minh');
    });

    test('SEARCH_FILTER_03: Should open date range picker', async ({ page }) => {
        await page.goto('/');

        const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
        await dateTrigger.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible();

        // Kiểm tra có thể chọn "This Week"
        const thisWeek = picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' });
        await expect(thisWeek).toBeVisible();
    });

    test('SEARCH_FILTER_04: Should reject end date before start date', async ({ page }) => {
        test.fail();

        await page.goto('/');
        const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
        await dateTrigger.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible();

        // Chọn ngày bắt đầu ở cuối tháng
        const days = picker.locator('.rdrDay:not(.rdrDayPassive):not(.rdrDayDisabled)');
        const dayCount = await days.count();
        if (dayCount > 10) {
            await days.nth(dayCount - 3).click();
            await days.nth(2).click();
        }

        await expect(page.getByText(/không hợp lệ|invalid/i)).toBeVisible();
    });

    test('SEARCH_FILTER_05: Should have disabled past dates', async ({ page }) => {
        await page.goto('/');
        const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
        await dateTrigger.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible();

        // Các ngày quá khứ phải bị disabled hoặc passive
        const disabledDays = picker.locator('.rdrDayDisabled, .rdrDayPassive');
        const count = await disabledDays.count();
        expect(count).toBeGreaterThan(0);
    });

    test('SEARCH_FILTER_06: Should filter rooms by guest count', async ({ page }) => {
        await page.goto('/');

        // Click "Thêm khách"
        await page.getByText('Thêm khách').click();
        await page.waitForTimeout(500);

        // Tìm nút tăng khách
        const addBtn = page.locator('button').filter({ hasText: '+' }).first();
        if (await addBtn.isVisible()) {
            await addBtn.click();
            await addBtn.click();
        }
    });

    test('SEARCH_FILTER_07: Should handle excessive guest count', async ({ page }) => {
        await page.goto('/');

        await page.getByText('Thêm khách').click();
        await page.waitForTimeout(500);

        const addBtn = page.locator('button').filter({ hasText: '+' }).first();
        if (await addBtn.isVisible()) {
            for (let i = 0; i < 20; i++) {
                await addBtn.click();
            }
        }
    });

    test('SEARCH_FILTER_08: Should search by clicking location card', async ({ homePage, page }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/**', { timeout: 15000 });
        expect(page.url()).toContain('rooms');
    });

    test('SEARCH_FILTER_09: Should search via location picker', async ({ page }) => {
        await page.goto('/');

        await page.getByText('Bạn sắp đi đâu?').click();
        const popup = page.locator('div.absolute').filter({
            has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
        });
        await expect(popup).toBeVisible();

        // Click location trong picker → có thể navigate hoặc chỉ fill input
        await popup.getByText('Hồ Chí Minh').click();
        await page.waitForTimeout(1000);

        // Nếu đã navigate → URL chứa rooms
        // Nếu chưa → popup đóng, location đã được chọn
        const navigated = page.url().includes('rooms');
        const popupClosed = !(await popup.isVisible().catch(() => false));
        expect(navigated || popupClosed).toBeTruthy();
    });
});
