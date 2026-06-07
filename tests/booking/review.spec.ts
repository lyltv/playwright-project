import { BOOKING } from '@constants/booking.config';
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

    test('REVIEW_01: Comment section displays correctly: avatar, name, stars, date, content (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: Some reviews do not display full details (missing avatar, stars...)
        test.fail();

        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
        await commentSection.scrollIntoViewIfNeeded();

        // Get first review
        const firstReview = commentSection.locator('~ div').first();
        await expect(firstReview).toBeVisible();

        // Username must exist
        const username = firstReview.locator('p').first();
        await expect(username).toBeVisible();
        const usernameText = await username.textContent();
        expect(usernameText?.trim().length).toBeGreaterThan(0);

        // Time must exist
        const time = firstReview.locator('time');
        await expect(time).toBeVisible();

        // Star rating must exist
        const stars = firstReview.locator('img[alt="star"], img[src*="star"]');
        const starCount = await stars.count();
        expect(starCount).toBeGreaterThan(0);

        // Comment content must exist
        const commentText = firstReview.locator('div').last();
        const content = await commentText.textContent();
        expect(content?.trim().length).toBeGreaterThan(0);
    });

    test('REVIEW_02: Guest user sees "Need login to comment" notification', async ({
        homePage,
        page,
    }) => {
        await navigateToRoomDetail(homePage, page);

        const loginAlert = page.getByText(BOOKING.REVIEW.NEED_LOGIN_MSG);
        await loginAlert.scrollIntoViewIfNeeded();
        await expect(loginAlert).toBeVisible();
    });

    test('REVIEW_03: Logged in user submits comment → success and instantly displays', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
        await commentSection.scrollIntoViewIfNeeded();

        // Type comment
        const commentText = `Auto test review ${Date.now()}`;
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(commentText);

        // Submit
        const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
        await submitBtn.click();

        // Comment displays instantly in the list
        await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_04: Room with no comments → displays "No comments"', async ({ page }) => {
        await page.goto('/room-detail/9999', { waitUntil: 'domcontentloaded', timeout: 30000 });

        const noBinhLuan = page.getByText(BOOKING.REVIEW.NO_COMMENTS);
        const hasBinhLuan = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });

        await hasBinhLuan.scrollIntoViewIfNeeded();

        if (await noBinhLuan.isVisible({ timeout: 3000 }).catch(() => false)) {
            await expect(noBinhLuan).toBeVisible();
        } else {
            test.skip(true, 'This room already has comments, need an empty room to test');
        }
    });

    test('REVIEW_05: Submit comment without selecting stars → still succeeds', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
        await commentSection.scrollIntoViewIfNeeded();

        const commentText = `No star review ${Date.now()}`;
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(commentText);

        const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
        await submitBtn.click();

        await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_06: Extremely long comment → character limit or warning (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: No character limit enforced for reviews
        test.fail();

        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
        await commentSection.scrollIntoViewIfNeeded();

        const longComment = 'A'.repeat(1500);
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(longComment);

        const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
        await submitBtn.click();

        const warning = page.getByText(/giới hạn|tối đa|max|limit|character/i);
        await expect(warning).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_07: Comment with only spaces → reject submit (BUG)', async ({
        homePage,
        page,
    }) => {
        // BUG: App allows submitting comments with only spaces
        test.fail();

        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
        await commentSection.scrollIntoViewIfNeeded();

        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill('     ');

        const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
        await submitBtn.click();

        const validationMsg = page.getByText(BOOKING.REVIEW.ERR_REQUIRED);
        await expect(validationMsg).toBeVisible({ timeout: 5000 });
    });

    test('REVIEW_08: Comment with special characters, emoji → success', async ({
        homePage,
        page,
    }) => {
        await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
            timeout: 10000,
        });

        await page.goto('/');
        await navigateToRoomDetail(homePage, page);

        const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
        await commentSection.scrollIntoViewIfNeeded();

        const commentText = `Special chars test @#$%^& 😀🎉 ${Date.now()}`;
        const commentInput = page.getByPlaceholder('Write something...');
        await commentInput.scrollIntoViewIfNeeded();
        await commentInput.fill(commentText);

        const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
        await submitBtn.click();

        await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
    });
});
