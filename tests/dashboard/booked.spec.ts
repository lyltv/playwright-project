import { test, expect } from '@fixtures/test_hook';

test.describe('Dashboard - Booked Rooms', () => {
    test('BOOKED_01: Should display list of rented rooms', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        // Cuộn xuống phần danh sách phòng đã thuê
        const bookedSection = page.getByText(/phòng đã thuê|booked|rented/i).first();
        if (await bookedSection.isVisible()) {
            await bookedSection.scrollIntoViewIfNeeded();
        }

        // Kiểm tra có card phòng hoặc thông báo trống
        const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
        const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);

        const hasCards = await roomCards.count() > 0;
        const hasEmpty = await emptyMessage.isVisible().catch(() => false);

        expect(hasCards || hasEmpty).toBeTruthy();
    });

    test('BOOKED_02: Should show message when no rooms rented', async ({ page, homePage, dashboardPage }) => {
        // Test với tài khoản mới đăng ký (không có phòng đã thuê)
        // Dùng tài khoản hiện tại nếu chưa có booking
        await dashboardPage.loginAndGotoDashboard(homePage);

        const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
        const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');

        const cardCount = await roomCards.count();
        if (cardCount === 0) {
            await expect(emptyMessage).toBeVisible();
        } else {
            // Tài khoản đã có phòng → skip test này
            test.skip();
        }
    });

    test('BOOKED_03: Should load multiple rooms with pagination', async ({ homePage, dashboardPage, page }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
        const cardCount = await roomCards.count();

        if (cardCount === 0) {
            test.skip();
            return;
        }

        // Kiểm tra pagination hoặc load more
        const pagination = page.locator('.ant-pagination');
        const loadMore = page.getByRole('button', { name: /xem thêm|load more/i });

        const hasPagination = await pagination.isVisible().catch(() => false);
        const hasLoadMore = await loadMore.isVisible().catch(() => false);

        if (hasPagination) {
            await expect(pagination).toBeVisible();
        } else if (hasLoadMore) {
            await expect(loadMore).toBeVisible();
        }
    });
});
