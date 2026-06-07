import { test, expect } from '@fixtures/test_hook';

test.describe('Room Detail', () => {
    const navigateToRoomDetail = async (
        homePage: Awaited<ReturnType<any>>,
        page: import('@playwright/test').Page
    ) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        const roomCard = page.locator('a[href*="room-detail"]').first();
        await roomCard.waitFor({ state: 'visible', timeout: 10000 });
        await roomCard.click();
        await page.waitForURL('**/room-detail/**', { timeout: 15000 });
    };

    test('ROOM_01: Room detail hiển thị đúng theo API response (tên, host, tiện ích, giá, bình luận)', async ({
        homePage,
        page,
    }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        const [apiResponse] = await Promise.all([
            page.waitForResponse(
                (res) => /\/api\/phong-thue\/\d+/.test(res.url()) && res.status() === 200
            ),
            page.locator('a[href*="room-detail"]').first().click(),
        ]);
        await page.waitForURL('**/room-detail/**', { timeout: 15000 });

        const body = await apiResponse.json();
        const room = body.content;

        // Tên phòng
        await expect(page.locator('h2').first()).toContainText(room.tenPhong);

        // Số khách, phòng ngủ, giường, phòng tắm
        const infoText = page.getByText(/Khách.*Phòng ngủ.*giường.*Phòng tắm/i);
        await expect(infoText).toBeVisible();
        await expect(infoText).toContainText(`${room.khach} Khách`);
        await expect(infoText).toContainText(`${room.phongNgu} Phòng ngủ`);
        await expect(infoText).toContainText(`${room.giuong} giường`);
        await expect(infoText).toContainText(`${room.phongTam} Phòng tắm`);

        // Giá phòng
        await expect(page.getByText(`$${room.giaTien}`, { exact: true })).toBeVisible();

        // Tiện ích: hiển thị nếu true, ẩn nếu false
        const amenityMap: Record<string, string> = {
            wifi: 'Wifi',
            tivi: 'Tivi',
            doXe: 'Bãi đỗ xe',
            hoBoi: 'Hồ bơi',
            banUi: 'Bàn ủi',
            mayGiat: 'Máy giặt',
        };
        for (const [key, label] of Object.entries(amenityMap)) {
            const amenity = page.getByText(label, { exact: true });
            if (room[key]) {
                await expect(amenity).toBeVisible();
            }
        }

        // Section bình luận
        await expect(page.getByRole('heading', { name: 'Bình luận' })).toBeVisible();

        // Section booking
        await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
    });

    test('ROOM_02: Truy cập room detail bằng URL trực tiếp → hiển thị đúng', async ({ page }) => {
        const [apiResponse] = await Promise.all([
            page.waitForResponse(
                (res) => res.url().includes('/api/phong-thue/') && res.status() === 200
            ),
            page.goto('/room-detail/1', { waitUntil: 'domcontentloaded', timeout: 30000 }),
        ]);

        const body = await apiResponse.json();
        const room = body.content;

        // Tên phòng
        await expect(page.locator('h2').first()).toContainText(room.tenPhong);

        // Thông tin phòng
        await expect(page.getByText(/Khách/i).first()).toBeVisible();

        // Location link
        const locationLink = page.locator('a[href*="/rooms/"]').first();
        await expect(locationLink).toBeVisible();

        // Ảnh
        const images = page.locator('img[src*="airbnb"], img[src*="phong"]').first();
        await expect(images).toBeVisible({ timeout: 10000 });

        // Mô tả
        await expect(page.getByText('Dịch sang tiếng Anh')).toBeVisible();

        // Tiện ích
        const amenities = page.getByRole('heading', { name: /tiện ích/i });
        await expect(amenities).toBeVisible();

        // Booking section
        await expect(page.getByText('/ night')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();

        // Bình luận section
        await expect(page.getByRole('heading', { name: 'Bình luận' })).toBeVisible();
    });

    test('ROOM_03: Click "Dịch sang tiếng Anh" → nội dung được dịch (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: Nút dịch không thực sự dịch nội dung mô tả sang tiếng Anh
        test.fail();

        await navigateToRoomDetail(homePage, page);

        const descParagraph = page
            .locator('p')
            .filter({ hasText: /Tự nhận phòng|Chủ nhà siêu cấp/i })
            .first();
        const descBefore = await descParagraph.textContent();

        const translateBtn = page.getByRole('button', { name: 'Dịch sang tiếng Anh' });
        await translateBtn.scrollIntoViewIfNeeded();
        await translateBtn.click();
        await page.waitForTimeout(2000);

        // Nội dung mô tả phải thay đổi sang tiếng Anh
        const descAfter = await descParagraph.textContent();
        expect(descAfter).not.toBe(descBefore);
    });

    test('ROOM_04: Click "Hiển thị thêm"/"Ẩn bớt" mô tả phòng (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: Show more/Show less không hoạt động đúng
        test.fail();

        await navigateToRoomDetail(homePage, page);

        const showMoreBtn = page.getByText(/Hiển thị thêm|Xem thêm/i);
        await showMoreBtn.scrollIntoViewIfNeeded();

        // Lấy chiều cao mô tả trước khi expand
        const description = page
            .locator('p')
            .filter({ hasText: /Tự nhận phòng|Chủ nhà siêu cấp/i })
            .first();
        const heightBefore = await description.boundingBox().then((b) => b?.height ?? 0);

        await showMoreBtn.click();

        // Mô tả phải mở rộng (chiều cao tăng)
        const heightAfter = await description.boundingBox().then((b) => b?.height ?? 0);
        expect(heightAfter).toBeGreaterThan(heightBefore);

        // Click "Ẩn bớt" → mô tả thu gọn lại
        const showLessBtn = page.getByText(/Ẩn bớt|Thu gọn/i);
        await expect(showLessBtn).toBeVisible();
        await showLessBtn.click();

        const heightCollapsed = await description.boundingBox().then((b) => b?.height ?? 0);
        expect(heightCollapsed).toBeLessThan(heightAfter);
    });

    test('ROOM_05: Click ảnh → gallery mở, điều hướng next/prev, đóng gallery', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        // Click vào Ant Image component để mở preview
        await page.locator('.ant-image').first().click();

        // Ảnh preview hiển thị
        const previewImage = page.locator('img.ant-image-preview-img');
        await expect(previewImage).toBeVisible({ timeout: 5000 });

        // Nút next/prev
        const nextBtn = page.locator('.ant-image-preview-switch-right');
        if (await nextBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
            await nextBtn.click();
            await expect(previewImage).toBeVisible();
        }

        // Đóng preview
        await page.keyboard.press('Escape');
        await expect(previewImage).toBeHidden({ timeout: 3000 });
    });
});
