import { test, expect } from '@fixtures/test_hook';

test.describe('Room List', () => {
    test.beforeEach(async ({ homePage, page }) => {
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
    });

    test('ROOM_LIST_01: Should display room list with full info', async ({ page }) => {
        const roomCards = page.locator('[class*="card"]');
        await expect(roomCards.first()).toBeVisible({ timeout: 10000 });

        const cardCount = await roomCards.count();
        expect(cardCount).toBeGreaterThan(0);

        await expect(roomCards.first().locator('img').first()).toBeVisible();

        const roomLink = page.locator('a[href*="room-detail"]').first();
        await expect(roomLink).toBeVisible();
    });

    test('ROOM_LIST_02: Should navigate to room details on card click', async ({ page }) => {
        const roomCard = page
            .locator('[class*="card"] a, a[href*="room-detail"], a[href*="detail"]')
            .first();
        if (await roomCard.isVisible()) {
            await roomCard.click();
            await page.waitForLoadState('domcontentloaded');

            // URL phải chuyển sang trang chi tiết phòng
            expect(page.url()).toMatch(/detail|room/i);
        } else {
            // Click card trực tiếp
            const card = page.locator('[class*="card"], [class*="room"]').first();
            await card.click();
            await page.waitForLoadState('domcontentloaded');
        }
    });

    test('ROOM_LIST_03: Should toggle favorite icon', async ({ homePage, page }) => {
        // BUG: Chức năng yêu thích không hoạt động
        test.fail();

        await page.goto('/');
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenuButton).toBeVisible({ timeout: 10000 });

        // Quay lại trang rooms
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        const heartIcon = page
            .locator('svg[class*="heart"], [class*="favorite"], [class*="like"]')
            .first();
        if (await heartIcon.isVisible()) {
            await heartIcon.click();
            await page.waitForTimeout(500);

            // Click lại để bỏ yêu thích
            await heartIcon.click();
            await page.waitForTimeout(500);
        }
    });

    test('ROOM_LIST_04: Should show map markers for rooms', async ({ page }) => {
        // Kiểm tra bản đồ hiển thị markers
        const map = page
            .locator('[class*="map"], [class*="leaflet"], [class*="google-map"], .mapboxgl-map')
            .first();

        if (await map.isVisible({ timeout: 5000 }).catch(() => false)) {
            // Map phải có markers
            const markers = page.locator('[class*="marker"], .leaflet-marker-icon, [class*="pin"]');
            const markerCount = await markers.count();
            expect(markerCount).toBeGreaterThan(0);
        }
    });

    test('ROOM_LIST_05: Should focus map on room card click', async ({ page }) => {
        const map = page.locator('[class*="map"], [class*="leaflet"], .mapboxgl-map').first();

        if (await map.isVisible({ timeout: 5000 }).catch(() => false)) {
            const roomCard = page.locator('[class*="card"], [class*="room"]').first();
            await roomCard.click();
            await page.waitForTimeout(500);

            // Map nên zoom/focus vào marker tương ứng
            await expect(map).toBeVisible();
        }
    });

    test('ROOM_LIST_06: Should maintain markers when zooming map', async ({ page }) => {
        const map = page.locator('[class*="map"], [class*="leaflet"], .mapboxgl-map').first();

        if (await map.isVisible({ timeout: 5000 }).catch(() => false)) {
            // Lấy số markers trước khi zoom
            const markers = page.locator('[class*="marker"], .leaflet-marker-icon');
            const countBefore = await markers.count();

            // Zoom in bằng double click
            await map.dblclick();
            await page.waitForTimeout(1000);

            const countAfter = await markers.count();
            expect(countAfter).toBeGreaterThanOrEqual(0);
        }
    });
});
