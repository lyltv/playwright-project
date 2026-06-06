import { HOMEPAGE } from '@constants/homePage.config';
import { test, expect } from '@fixtures/test_hook';
import { getSearchDateRangeRegex } from 'utils/dateHelper';

test('Header - Filter phải hiển thị đúng cấu trúc', async ({ page, api }) => {
    await page.goto('/rooms');
    const dateData = HOMEPAGE.DATE_PICKER;
    const locations = await api.location.getPopularLocations();

    // Header
    const navbar = page.getByRole('navigation');
    await expect(navbar).toBeVisible();
    await expect(page.getByAltText(/Cyber Logo/i)).toBeVisible();
    // CHECK FILTER
    const FILTER_LIST = HOMEPAGE.FILTER_BAR;
    for (const filterName of FILTER_LIST) {
        const button = page.getByRole('button', { name: filterName });
        await expect(button).toBeVisible();
        await expect(button).toBeEnabled();
    }
    // CHECK SEARCH BAR

    const dateRangeRegex = getSearchDateRangeRegex(1, 7);

    await expect(page.getByText(HOMEPAGE.SEARCH_BAR.LOCATION_LABEL, { exact: true })).toBeVisible();
    await expect(page.getByText(dateRangeRegex).nth(0)).toBeVisible();
    await expect(page.getByText(HOMEPAGE.SEARCH_BAR.GUEST_LABEL, { exact: true })).toBeVisible();

    // CHECK SEARCH BAR - LOCATIONS
    await page.getByText(HOMEPAGE.LOCATION_PICKER.PLACEHOLDER).click();

    // CHECK LOCATIONS: Định vị container Popup bằng div có class 'absolute' và chứa tiêu đề
    const popup = page.locator('div.absolute').filter({
        has: page.getByRole('heading', { name: HOMEPAGE.LOCATION_PICKER.TITLE }),
    });

    // CHECK SEARCH BAR - LOCATIONS: Kiểm tra địa điểm đầu tiên
    if (locations.length > 0) {
        await expect(popup.getByText(locations[0].city, { exact: true })).toBeVisible({
            timeout: 10000,
        });
    }
    // CHECK SEARCH BAR - LOCATIONS: Duyệt toàn bộ danh sách để check data
    for (const loc of locations) {
        const cityCard = popup.locator('div.cursor-pointer').filter({
            hasText: new RegExp(`^${loc.city}$`, 'i'),
        });
        await expect(cityCard).toBeVisible();
        const cityImg = cityCard.locator('img');
        await expect(cityImg).toHaveAttribute('src', loc.image);
    }

    // CHECK SEARCH BAR - CALENDER
    const dateTrigger = page.getByText(dateRangeRegex).nth(0);
    await dateTrigger.click();
    const pickerPopup = page.locator('.rdrDateRangePickerWrapper');
    await expect(pickerPopup).toBeVisible();
    for (const rangeLabel of dateData.STATIC_RANGES) {
        const rangeBtn = pickerPopup
            .locator('button.rdrStaticRange')
            .filter({ hasText: rangeLabel });

        await expect(rangeBtn).toBeVisible();
        // Check xem có bấm được không (nếu cần)
        await expect(rangeBtn).toBeEnabled();
    }
    // CHECK SEARCH BAR - ADD GUEST
    const guestSearchSlot = page
        .locator('div.flex')
        .filter({ hasText: HOMEPAGE.SEARCH_BAR.GUEST_LABEL })
        .first();
    const guestTrigger = guestSearchSlot.locator('p', { hasText: HOMEPAGE.SEARCH_BAR.GUEST_LABEL });
    await guestTrigger.click();
    const guestPopup = page.locator('div.absolute').filter({ hasText: '+' });
    const plusBtn = guestPopup.locator('button').filter({ hasText: '+' });
    const minusBtn = guestPopup.locator('button').filter({ hasText: '-' });
    await expect(plusBtn).toBeEnabled();
    await expect(minusBtn).toBeDisabled();
    await plusBtn.click();
    await expect(minusBtn).toBeEnabled();
});

test('Footer - Kiểm tra cấu trúc các mục thông tin và liên kết', async ({ page }) => {
    await page.goto('/rooms');

    const footerData = HOMEPAGE.FOOTER;

    // 1. Cuộn tới Footer để đảm bảo nó hiển thị (AOS animation có thể cần cái này)
    await page.getByText(footerData.COPYRIGHT_ANCHOR).scrollIntoViewIfNeeded();

    // 2. Loop qua từng Section (Cột)
    for (const section of footerData.SECTIONS) {
        // Khoanh vùng cái cột dựa trên Tiêu đề
        const column = page
            .locator('div')
            .filter({
                has: page.getByRole('heading', { name: section.TITLE }),
            })
            .first();

        // Kiểm tra Tiêu đề cột phải Visible
        await expect(column.getByRole('heading', { name: section.TITLE })).toBeVisible();

        // 3. Loop tiếp qua từng Link trong cột đó
        for (const linkText of section.LINKS) {
            const link = column.getByRole('link', { name: linkText, exact: true });
            await link.scrollIntoViewIfNeeded();
            await expect(link).toBeVisible({ timeout: 5000 });
            await expect(link).toHaveAttribute('href', /.*/);
        }
    }
    // 4. Check hàng cuối cùng (Ngôn ngữ & Bản quyền)
    await expect(page.getByText(footerData.LANGUAGE)).toBeVisible();
});

test('Responsive - Kiểm tra Mobile Layout', async ({ page }) => {
    await page.goto('/rooms');
    await page.setViewportSize({ width: 390, height: 844 });

    // Đợi 1 chút cho giao diện co lại
    await page.waitForTimeout(500);

    // Nút Toggle Menu (hamburger) phải xuất hiện trên mobile
    const mobileBtn = page.locator('button[data-collapse-toggle="navbar-user"]');
    await expect(mobileBtn).toBeVisible();
});
