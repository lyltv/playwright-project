import { test, expect } from '@fixtures/test_hook';

test.describe('User Reviews', () => {
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

    test('REVIEW_01: Section bình luận hiển thị đúng: avatar, tên, sao, ngày, nội dung (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: Một số review không hiển thị đầy đủ thông tin (thiếu avatar, sao...)
        test.fail();

        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: 'Bình luận' });
        await commentSection.scrollIntoViewIfNeeded();

        // Lấy review đầu tiên
        const firstReview = commentSection.locator('~ div').first();
        await expect(firstReview).toBeVisible();

        // Phải có tên user
        const username = firstReview.locator('p').first();
        await expect(username).toBeVisible();
        const usernameText = await username.textContent();
        expect(usernameText?.trim().length).toBeGreaterThan(0);

        // Phải có thời gian
        const time = firstReview.locator('time');
        await expect(time).toBeVisible();

        // Phải có star rating
        const stars = firstReview.locator('img[alt="star"], img[src*="star"]');
        const starCount = await stars.count();
        expect(starCount).toBeGreaterThan(0);

        // Phải có nội dung bình luận
        const commentText = firstReview.locator('div').last();
        const content = await commentText.textContent();
        expect(content?.trim().length).toBeGreaterThan(0);
    });

    test('REVIEW_02: Guest user thấy thông báo "Cần đăng nhập để bình luận"', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        const loginAlert = page.getByText('Cần đăng nhập để bình luận');
        await loginAlert.scrollIntoViewIfNeeded();
        await expect(loginAlert).toBeVisible();
    });

    test('REVIEW_03: User đã login submit bình luận → thành công và hiển thị ngay', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: 'Bình luận' });
        await commentSection.scrollIntoViewIfNeeded();

        // Nhập bình luận
        const commentText = `Auto test review ${Date.now()}`;
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(commentText);

        // Submit
        const submitBtn = page.getByRole('button', { name: 'Đánh giá' });
        await submitBtn.click();

        // Bình luận hiển thị ngay trong danh sách
        await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_04: Room chưa có bình luận → hiển thị "Chưa có bình luận"', async ({ page }) => {
        await page.goto('/room-detail/9999', { waitUntil: 'domcontentloaded', timeout: 30000 });

        const noBinhLuan = page.getByText('Chưa có bình luận');
        const hasBinhLuan = page.getByRole('heading', { name: 'Bình luận' });

        await hasBinhLuan.scrollIntoViewIfNeeded();

        if (await noBinhLuan.isVisible({ timeout: 3000 }).catch(() => false)) {
            await expect(noBinhLuan).toBeVisible();
        } else {
            test.skip(true, 'Room này đã có bình luận, cần room trống để test');
        }
    });

    test('REVIEW_05: Submit bình luận không chọn sao → vẫn thành công', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: 'Bình luận' });
        await commentSection.scrollIntoViewIfNeeded();

        const commentText = `No star review ${Date.now()}`;
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(commentText);

        const submitBtn = page.getByRole('button', { name: 'Đánh giá' });
        await submitBtn.click();

        await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_06: Bình luận quá dài → giới hạn ký tự hoặc cảnh báo (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: Không có giới hạn ký tự cho bình luận
        test.fail();

        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: 'Bình luận' });
        await commentSection.scrollIntoViewIfNeeded();

        const longComment = 'A'.repeat(1500);
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(longComment);

        const submitBtn = page.getByRole('button', { name: 'Đánh giá' });
        await submitBtn.click();

        const warning = page.getByText(/giới hạn|tối đa|max|limit|character/i);
        await expect(warning).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_07: Bình luận toàn dấu cách → không cho submit (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: App cho phép submit bình luận toàn dấu cách
        test.fail();

        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: 'Bình luận' });
        await commentSection.scrollIntoViewIfNeeded();

        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill('     ');

        const submitBtn = page.getByRole('button', { name: 'Đánh giá' });
        await submitBtn.click();

        const validationMsg = page.getByText(/required|bắt buộc|không được trống|vui lòng/i);
        await expect(validationMsg).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_08: Bình luận với ký tự đặc biệt, emoji → thành công', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: 'Bình luận' });
        await commentSection.scrollIntoViewIfNeeded();

        const commentText = `Special chars test @#$%^& 😀🎉 ${Date.now()}`;
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(commentText);

        const submitBtn = page.getByRole('button', { name: 'Đánh giá' });
        await submitBtn.click();

        await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
    });
});
