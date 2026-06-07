import { test, expect } from '@fixtures/test_hook';

test.describe('Booking', () => {
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

    test('BOOKING_01: Chưa đăng nhập bấm Đặt phòng → hiện thông báo yêu cầu đăng nhập', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        const bookButton = page.getByRole('button', { name: 'Đặt phòng' });
        await bookButton.scrollIntoViewIfNeeded();
        await bookButton.click();

        const notification = page.getByText('Vui lòng đăng nhập để tiếp tục đặt phòng');
        await expect(notification).toBeVisible({ timeout: 5000 });
    });

    test('BOOKING_02: Đăng nhập trước → đặt phòng → thành công + xuất hiện trong dashboard', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        const userMenu = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenu).toBeVisible({ timeout: 10000 });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const roomTitle = await page.locator('h2').first().textContent();

        const bookButton = page.getByRole('button', { name: 'Đặt phòng' });
        await bookButton.scrollIntoViewIfNeeded();
        await bookButton.click();

        const confirmButton = page.getByRole('button', { name: /xác nhận/i });
        await expect(confirmButton).toBeVisible({ timeout: 5000 });
        await confirmButton.click();

        const successMessage = page.getByText(/thêm mới thành công/i);
        await expect(successMessage).toBeVisible({ timeout: 5000 });

        // Verify booking xuất hiện trong dashboard
        await page.goto('/');
        await page.getByRole('button', { name: /Open user menu/i }).click();
        await page.locator('#user-dropdown').getByText('Dashboard').click();
        await page.waitForLoadState('domcontentloaded');

        const bookedRoom = page.getByText(roomTitle!.trim()).first();
        await expect(bookedRoom).toBeVisible({ timeout: 10000 });
    });

    test('BOOKING_03: Đăng nhập ngay tại trang room detail → đặt phòng → thành công + xuất hiện trong dashboard', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        const roomTitle = await page.locator('h2').first().textContent();

        // Login từ trang room detail (avatar button là bg-main đầu tiên trong nav)
        await page.locator('button.bg-main').first().click();
        await page.locator('#user-dropdown').getByText('Đăng nhập').click();
        await page.getByPlaceholder('Vui lòng nhập tài khoản').fill(process.env.TEST_EMAIL!);
        await page.getByPlaceholder('Vui lòng nhập mật khẩu').fill(process.env.TEST_PASSWORD!);
        await page.getByRole('button', { name: 'Đăng nhập' }).click();

        const userMenu = page.getByRole('button', { name: /Open user menu/i });
        await expect(userMenu).toBeVisible({ timeout: 10000 });

        const bookButton = page.getByRole('button', { name: 'Đặt phòng' });
        await bookButton.scrollIntoViewIfNeeded();
        await bookButton.click();

        const confirmButton = page.getByRole('button', { name: /xác nhận/i });
        await expect(confirmButton).toBeVisible({ timeout: 5000 });
        await confirmButton.click();

        const successMessage = page.getByText(/thêm mới thành công/i);
        await expect(successMessage).toBeVisible({ timeout: 5000 });

        // Verify booking xuất hiện trong dashboard
        await page.goto('/');
        await page.getByRole('button', { name: /Open user menu/i }).click();
        await page.locator('#user-dropdown').getByText('Dashboard').click();
        await page.waitForLoadState('domcontentloaded');

        const bookedRoom = page.getByText(roomTitle!.trim()).first();
        await expect(bookedRoom).toBeVisible({ timeout: 10000 });
    });

    test('BOOKING_04: Booking modal hiển thị đủ: giá, đánh giá, ngày, khách, nút đặt, tổng tiền, ngôn ngữ nhất quán', async ({
        homePage,
        page,
    }) => {
        // BUG: Hiện thị không đồng nhất
        test.fail();
        await navigateToRoomDetail(homePage, page);

        // Giá phòng mỗi đêm ($XX / night)
        const priceSection = page.getByText('/ night');
        await priceSection.scrollIntoViewIfNeeded();
        await expect(priceSection).toBeVisible();

        // Đánh giá (star + đánh giá)
        const ratingSection = page.getByText(/đánh giá/i).first();
        await expect(ratingSection).toBeVisible();

        // Nhận phòng / Trả phòng date fields
        await expect(page.getByText('Nhận phòng')).toBeVisible();
        await expect(page.getByText('Trả phòng')).toBeVisible();

        // Khách section với +/- buttons
        await expect(page.getByText('Khách').first()).toBeVisible();
        await expect(page.getByRole('button', { name: '–' })).toBeVisible();
        await expect(page.getByRole('button', { name: '+' })).toBeVisible();

        // Nút Đặt phòng
        await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();

        // Thông báo chưa trừ tiền
        await expect(page.getByText('Bạn vẫn chưa bị trừ tiền')).toBeVisible();

        // Tổng tiền
        await expect(page.getByText('Total before taxes')).toBeVisible();

        // Language consistency: "Cleaning fee" và "Total before taxes" là EN trong UI VN
        const cleaningFee = page.getByText('Cleaning fee');
        const totalEN = page.getByText('Total before taxes');
        const hasEnglishMix = (await cleaningFee.isVisible()) || (await totalEN.isVisible());
        expect
            .soft(hasEnglishMix, 'Booking modal có mix ngôn ngữ EN/VN — không nhất quán')
            .toBeFalsy();
    });

    test('BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)', async ({
        homePage,
        page,
    }) => {
        // BUG: Date picker cho phép chọn ngày trong quá khứ (Yesterday, Last Week, Last Month)
        test.fail();

        await navigateToRoomDetail(homePage, page);

        const checkinField = page.getByText('Nhận phòng').locator('..');
        await checkinField.scrollIntoViewIfNeeded();
        await checkinField.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible({ timeout: 5000 });

        // Chọn "Yesterday" → date picker không nên cho phép ngày quá khứ
        await picker.getByText('Yesterday').click();
        await page.getByText('Close').click();

        // Ngày quá khứ không được áp dụng vào check-in
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const dd = String(yesterday.getDate()).padStart(2, '0');
        const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
        const yyyy = yesterday.getFullYear();
        const yesterdayFormatted = `${dd}-${mm}-${yyyy}`;

        const checkinDate = checkinField.getByText(yesterdayFormatted);
        await expect(checkinDate).toBeHidden({ timeout: 3000 });
    });

    test('BOOKING_06: Tăng/giảm số khách bằng +/– → đúng giá trị, không vượt giới hạn min/max', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        const incrementBtn = page.getByRole('button', { name: '+' });
        const decrementBtn = page.getByRole('button', { name: '–' });
        const guestCount = page.getByText(/\d+ khách/).first();

        await incrementBtn.scrollIntoViewIfNeeded();

        // Lấy số khách ban đầu
        const initialText = await guestCount.textContent();
        const initialCount = parseInt(initialText?.replace(/\D/g, '') || '1');

        // Click + để tăng
        await incrementBtn.click();
        await expect(guestCount).toHaveText(`${initialCount + 1} khách`, { timeout: 3000 });

        // Click – để giảm về ban đầu
        await decrementBtn.click();
        await expect(guestCount).toHaveText(`${initialCount} khách`, { timeout: 3000 });

        // Test giới hạn dưới: click – cho đến khi về tối thiểu
        for (let i = 0; i < initialCount; i++) {
            await decrementBtn.click();
        }
        const minText = await guestCount.textContent();
        const minCount = parseInt(minText?.replace(/\D/g, '') || '0');
        expect(minCount).toBeGreaterThanOrEqual(1);

        // Lấy max khách từ mô tả phòng (VD: "3 Khách • Phòng Studio")
        const roomInfo = page.getByText(/\d+ Khách/i).first();
        const roomInfoText = await roomInfo.textContent();
        const maxGuest = parseInt(roomInfoText?.match(/(\d+)\s*Khách/i)?.[1] || '10');

        // Test giới hạn trên: click + nhiều lần vượt max
        for (let i = minCount; i <= maxGuest + 1; i++) {
            await incrementBtn.click();
        }
        const afterMaxText = await guestCount.textContent();
        const afterMaxCount = parseInt(afterMaxText?.replace(/\D/g, '') || '0');
        expect(afterMaxCount).toBeLessThanOrEqual(maxGuest);
    });

    test('BOOKING_07: Click Nhận phòng → mở date picker, chọn ngày → hiển thị đúng trên modal', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        // Click vào ô Nhận phòng (scope chính xác bằng class cursor-pointer)
        const checkinField = page
            .locator('div.cursor-pointer')
            .filter({ hasText: 'Nhận phòng' })
            .first();
        await checkinField.scrollIntoViewIfNeeded();
        await checkinField.click();

        const picker = page.locator('.rdrDateRangePickerWrapper');
        await expect(picker).toBeVisible({ timeout: 5000 });

        // Chọn "This Week" để set ngày
        await picker.getByText('This Week').click();

        // Đóng picker
        await page.getByText('Close').click();
        await expect(picker).toBeHidden({ timeout: 3000 });

        // Ngày checkin và checkout phải hiển thị trên booking modal (format DD-MM-YYYY)
        const checkinDate = checkinField.getByText(/\d{2}-\d{2}-\d{4}/);
        await expect(checkinDate).toBeVisible();

        const checkoutField = page
            .locator('div.cursor-pointer')
            .filter({ hasText: 'Trả phòng' })
            .first();
        const checkoutDate = checkoutField.getByText(/\d{2}-\d{2}-\d{4}/);
        await expect(checkoutDate).toBeVisible();
    });
});
