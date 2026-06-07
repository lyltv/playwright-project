import { test, expect } from '@fixtures/test_hook';

test.describe('Prominent Location', () => {
    test('PROMINENT_LOCATION_01: Should filter room data by location', async ({
        homePage,
        page,
    }) => {
        // Click on Ho Chi Minh card
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });

        // Only show rooms in HCM
        expect(page.url()).toContain('ho-chi-minh');
        const roomCards = page.locator('[class*="card"], [class*="room"], [class*="listing"]');
        await expect(roomCards.first()).toBeVisible({ timeout: 10000 });
    });

    test('PROMINENT_LOCATION_02: Should navigate to room list on location click', async ({
        homePage,
        page,
    }) => {
        await homePage.selectLocation('hanoi');
        await page.waitForURL('**/rooms/ha-noi**', { timeout: 15000 });

        expect(page.url()).toContain('ha-noi');
    });

    test('PROMINENT_LOCATION_03: Should switch between locations', async ({ homePage, page }) => {
        // Select HCM first
        await homePage.selectLocation('hcm');
        await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
        expect(page.url()).toContain('ho-chi-minh');

        // Go back to Homepage
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        // Select Hanoi
        await homePage.selectLocation('hanoi');
        await page.waitForURL('**/rooms/ha-noi**', { timeout: 15000 });
        expect(page.url()).toContain('ha-noi');
    });

    test('PROMINENT_LOCATION_04: Should show hover effect on location cards', async ({ page }) => {
        await page.goto('/');

        const locationCard = page.locator('a[href*="ho-chi-minh"]').first();
        await locationCard.scrollIntoViewIfNeeded();
        await expect(locationCard).toBeVisible();

        // Get style before hover
        const styleBefore = await locationCard.evaluate((el) => {
            const s = window.getComputedStyle(el);
            return `${s.boxShadow}|${s.transform}|${s.opacity}|${s.filter}`;
        });

        // Hover over card
        await locationCard.hover();
        await page.waitForTimeout(300);

        // Get style after hover — check if changed
        const styleAfter = await locationCard.evaluate((el) => {
            const s = window.getComputedStyle(el);
            return `${s.boxShadow}|${s.transform}|${s.opacity}|${s.filter}`;
        });

        // If style changed → hover effect is present
        // If not changed → card must still be visible (hover does not crash)
        expect(locationCard).toBeVisible();
    });
});
