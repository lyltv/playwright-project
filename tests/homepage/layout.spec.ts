import { HOMEPAGE } from '@constants/config';
import { test, expect } from '@fixtures/test_hook';
import { getSearchDateRangeRegex } from 'utils/dateHelper';

test('Header - Filter phải hiển thị đúng cấu trúc', async ({ page }) => {
    await page.goto('/');
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
    const dateRangeRegex = getSearchDateRangeRegex(1, 7);
    await expect(page.getByText(HOMEPAGE.SEARCH_BAR.LOCATION_LABEL)).toBeVisible();
    await expect(page.getByText(HOMEPAGE.SEARCH_BAR.GUEST_LABEL)).toBeVisible();
    await expect(page.getByText(dateRangeRegex)).toBeVisible();
});

test('Date Picker - Hiển thị đủ các tùy chọn chọn nhanh (Static Ranges)', async ({ page }) => {
    await page.goto('/');

    const dateData = HOMEPAGE.DATE_PICKER;

    // 1. Click vào phần hiển thị ngày để mở popup
    // Trong HTML của ông, nó là div chứa text ngày tháng
    const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
    await dateTrigger.click();

    // 2. Kiểm tra Popup hiển thị
    const pickerPopup = page.locator('.rdrDateRangePickerWrapper');
    await expect(pickerPopup).toBeVisible();

    // 3. Loop qua danh sách "Today, Yesterday..." để check từng nút
    for (const rangeLabel of dateData.STATIC_RANGES) {
        const rangeBtn = pickerPopup
            .locator('button.rdrStaticRange')
            .filter({ hasText: rangeLabel });

        await expect(rangeBtn).toBeVisible();
        // Check xem có bấm được không (nếu cần)
        await expect(rangeBtn).toBeEnabled();
    }

    // 4. Check thêm hiển thị tháng/năm hiện tại trong lịch
    await expect(pickerPopup.getByText('May 2026')).toBeVisible();
});

test('Location Picker - Dữ liệu hiển thị phải khớp với API', async ({ page, api }) => {
    await page.goto('/');
    const locations = await api.location.getPopularLocations();

    // 1. Mở popup
    await page.getByText(HOMEPAGE.LOCATION_PICKER.PLACEHOLDER).click();

    // 2. Định vị container Popup bằng div có class 'absolute' và chứa tiêu đề
    const popup = page.locator('div.absolute').filter({
        has: page.getByRole('heading', { name: HOMEPAGE.LOCATION_PICKER.TITLE }),
    });

    // 3. Kiểm tra địa điểm đầu tiên
    if (locations.length > 0) {
        await expect(popup.getByText(locations[0].city, { exact: true })).toBeVisible({
            timeout: 10000,
        });
    }
    // 4. Duyệt toàn bộ danh sách để check data
    for (const loc of locations) {
        const cityCard = popup.locator('div.cursor-pointer').filter({
            hasText: new RegExp(`^${loc.city}$`, 'i'),
        });
        await expect(cityCard).toBeVisible();
        const cityImg = cityCard.locator('img');
        await expect(cityImg).toHaveAttribute('src', loc.image);
    }
});

test('Location Integrity - 8 địa điểm từ API phải hiển thị trên trang', async ({ page, api }) => {
    await page.goto('/');

    // 1. Lấy 8 địa điểm chuẩn từ API
    const locations = await api.location.getPopularLocations();

    // 2. Duyệt danh sách và kiểm tra sự hiện diện
    for (const loc of locations) {
        const card = page
            .locator('a')
            .filter({
                hasText: loc.city,
            })
            .first();

        // 3. Kiểm tra tên thành phố phải hiện lên
        await expect(card).toBeVisible({ timeout: 7000 });
        // 4. Phải có 1 thẻ <img>
        await expect(card.locator('img')).toBeVisible();
    }
});
test('Footer - Kiểm tra cấu trúc các mục thông tin và liên kết', async ({ page }) => {
    await page.goto('/');

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
    await page.goto('/');
    await page.setViewportSize({ width: 390, height: 844 });

    // Đợi 1 chút cho giao diện co lại
    await page.waitForTimeout(500);

    // Nút Toggle Menu (hamburger) phải xuất hiện trên mobile
    const mobileBtn = page.locator('button[data-collapse-toggle="navbar-user"]');
    await expect(mobileBtn).toBeVisible();
});
