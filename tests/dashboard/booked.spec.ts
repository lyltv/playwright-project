import { test, expect } from '@fixtures/test_hook';

test.describe('Dashboard - Booked Rooms', () => {
    test('BOOKED_01: Should display list of rented rooms', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        await dashboardPage.loginAndGotoDashboard(homePage);

        await page.waitForLoadState('networkidle');

        const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
        const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);

        const hasCards = await roomCards
            .first()
            .isVisible({ timeout: 5000 })
            .catch(() => false);
        const hasEmpty = await emptyMessage.isVisible({ timeout: 3000 }).catch(() => false);

        expect(
            hasCards || hasEmpty,
            'Dashboard phải hiển thị danh sách phòng hoặc thông báo trống'
        ).toBeTruthy();

        if (hasCards) {
            const cardCount = await roomCards.count();
            expect(cardCount).toBeGreaterThan(0);
            const firstCardText = await roomCards.first().textContent();
            expect(firstCardText!.trim().length).toBeGreaterThan(0);
        }
    });

    test('BOOKED_02: Should show message when no rooms rented', async ({
        page,
        homePage,
        dashboardPage,
    }) => {
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

    test('BOOKED_03: Should load multiple rooms with pagination', async ({
        homePage,
        dashboardPage,
        page,
    }) => {
        // BUG: Phân trang không hoạt động khi có nhiều phòng
        test.fail();

        await dashboardPage.loginAndGotoDashboard(homePage);

        await page.waitForLoadState('networkidle');

        const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
        await expect(roomCards.first()).toBeVisible({ timeout: 10000 });

        const pagination = page.locator('.ant-pagination');
        const loadMore = page.getByRole('button', { name: /xem thêm|load more/i });

        const hasPagination = await pagination.isVisible().catch(() => false);
        const hasLoadMore = await loadMore.isVisible().catch(() => false);

        expect(hasPagination || hasLoadMore, 'Phải có phân trang hoặc nút xem thêm').toBeTruthy();
    });
});
