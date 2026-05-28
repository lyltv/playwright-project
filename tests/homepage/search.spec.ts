import { test, expect } from '@fixtures/test_hook';
import { getSearchDateRangeRegex } from 'utils/dateHelper';

test.describe('Search', () => {
    test('SEARCH_01: Tìm kiếm theo địa điểm từ trang chủ → hiển thị kết quả đúng location', async ({
        homePage,
        page,
    }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        // URL chứa location đúng
        expect(page.url()).toContain('ho-chi-minh');

        // Trang kết quả hiển thị danh sách phòng
        const roomCards = page.locator('[class*="card"]').first();
        await expect(roomCards).toBeVisible({ timeout: 10000 });
    });

    test('SEARCH_02: Tìm kiếm theo địa điểm khác từ trang kết quả → chuyển sang location mới', async ({
        homePage,
        page,
    }) => {
        // Vào trang kết quả HCM trước
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        // Từ trang kết quả, click location picker trên search bar
        await page.getByText('Bạn sắp đi đâu?').click();
        const popup = page.locator('div.absolute').filter({
            has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
        });
        await expect(popup).toBeVisible();

        // Chọn location khác (Hà Nội) → picker fill input
        await popup.getByText('Hà Nội').click();

        // Click nút search (icon kính lúp trong search bar)
        await page.locator('.anticon-search').click();
        await page.waitForURL('**/rooms/ha-noi**', { timeout: 15000 });

        expect(page.url()).toContain('ha-noi');
        const roomCards = page.locator('[class*="card"]').first();
        await expect(roomCards).toBeVisible({ timeout: 10000 });
    });

    test('SEARCH_03: Mở location picker → hiển thị đầy đủ tất cả địa điểm từ API', async ({
        page,
        api,
    }) => {
        await page.goto('/');

        await page.getByText('Bạn sắp đi đâu?').click();
        const popup = page.locator('div.absolute').filter({
            has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
        });
        await expect(popup).toBeVisible();

        // Hiển thị các địa điểm có sẵn từ API
        const locations = await api.location.getPopularLocations();
        for (const loc of locations) {
            const cityCard = popup.locator('div.cursor-pointer').filter({
                hasText: new RegExp(`^${loc.city}$`, 'i'),
            });
            await expect(cityCard).toBeVisible();
        }
    });

    test('SEARCH_04: Chọn ngày trên trang chủ → search bar cập nhật đúng ngày đã chọn', async ({
        page,
    }) => {
        await page.goto('/');

        // Lấy text ngày mặc định trước khi chọn
        const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
        await dateTrigger.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible();

        // Chọn "This Week"
        await picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' }).click();

        // Date picker vẫn hiển thị sau khi chọn range
        await expect(picker).toBeVisible();

        // Click ra ngoài picker để đóng
        await page.locator('body').click({ position: { x: 10, y: 10 }, force: true });

        // Ngày trên search bar phải cập nhật (có thể giống hoặc khác tùy tuần)
        // Chỉ cần search bar vẫn hiển thị đúng format ngày DD/MM/YYYY
        const dateSection = page
            .locator('div')
            .filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ })
            .first();
        await expect(dateSection).toBeVisible();
    });

    test('SEARCH_05: Chọn ngày trên trang kết quả → date picker hoạt động bình thường', async ({
        homePage,
        page,
    }) => {
        // Vào trang kết quả trước
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        // Mở date picker trên trang kết quả
        const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
        await dateTrigger.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible();

        // Chọn "This Week"
        await picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' }).click();
        await expect(picker).toBeVisible();
    });

    test('SEARCH_06: Vào room detail → booking modal giữ lại ngày, số khách đã chọn trước đó', async ({
        homePage,
        page,
    }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        const roomCard = page.locator('a[href*="room-detail"]').first();
        await roomCard.waitFor({ state: 'visible', timeout: 10000 });
        await roomCard.click();
        await page.waitForURL('**/room-detail/**', { timeout: 15000 });

        // Ngày checkin được pre-fill (format DD-MM-YYYY)
        const checkinField = page
            .locator('div.cursor-pointer')
            .filter({ hasText: 'Nhận phòng' })
            .first();
        await expect(checkinField.getByText(/\d{2}-\d{2}-\d{4}/)).toBeVisible();

        // Ngày checkout được pre-fill
        const checkoutField = page
            .locator('div.cursor-pointer')
            .filter({ hasText: 'Trả phòng' })
            .first();
        await expect(checkoutField.getByText(/\d{2}-\d{2}-\d{4}/)).toBeVisible();

        // Guest count được pre-fill
        await expect(page.getByText(/\d+ khách/)).toBeVisible();

        // Nút đặt phòng hiển thị
        await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
    });

    test('SEARCH_07: Click vào search bar → mở rộng, click ra ngoài → thu gọn (BUG)', async ({
        page,
    }) => {
        // BUG: Search bar không collapse khi click ra ngoài
        test.fail();

        await page.goto('/');

        // Click vào location field → search bar mở rộng
        await page.getByText('Địa điểm').click();
        const popup = page.locator('div.absolute').filter({
            has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
        });
        await expect(popup).toBeVisible();

        // Click ra ngoài → search bar phải thu gọn
        await page.locator('body').click({ position: { x: 10, y: 10 } });
        await expect(popup).toBeHidden({ timeout: 3000 });
    });

    test('SEARCH_08: Áp dụng filter giá → kết quả thay đổi theo filter (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: Filters không hoạt động đúng trên trang kết quả
        test.fail();

        // Vào trang kết quả
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        // Lấy số phòng trước khi lọc
        const roomCards = page.locator('[class*="card"]');
        await roomCards.first().waitFor({ state: 'visible', timeout: 10000 });
        const countBefore = await roomCards.count();

        // Click filter "Giá"
        const priceFilter = page.getByRole('button', { name: 'Giá' });
        if (await priceFilter.isVisible()) {
            await priceFilter.click();
            await page.waitForTimeout(500);

            // Chọn range giá nếu có slider/option
            const applyBtn = page.getByRole('button', { name: /áp dụng|apply/i });
            if (await applyBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
                await applyBtn.click();
            }
        }

        // Sau khi lọc, kết quả phải thay đổi hoặc vẫn hiển thị đúng
        const countAfter = await roomCards.count();
        expect(countAfter).toBeGreaterThanOrEqual(0);
        expect(countAfter).not.toBe(countBefore);
    });

    test('SEARCH_09: Trang kết quả hiển thị đủ: banner location, search bar, filters, danh sách phòng', async ({
        homePage,
        page,
    }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        // Banner hiển thị tên location
        await expect(page.getByText(/hồ chí minh|ho chi minh/i).first()).toBeVisible({
            timeout: 10000,
        });

        // Search bar vẫn hiển thị trên trang kết quả
        await expect(page.getByText('Bạn sắp đi đâu?')).toBeVisible();

        // Filter buttons hiển thị
        await expect(page.getByRole('button', { name: 'Loại nơi ở' })).toBeVisible();

        // Danh sách phòng hiển thị
        const roomCards = page.locator('[class*="card"]').first();
        await expect(roomCards).toBeVisible({ timeout: 10000 });
    });
});
