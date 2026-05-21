import { test, expect } from '@fixtures/test_hook';

test('Footer - Kiểm tra cấu trúc các mục thông tin', async ({ page }) => {
    await page.goto('/');

    // 1. Dùng nội dung Copyright làm mỏ neo (Thứ chắc chắn nằm dưới cùng)
    const footerAnchor = page.getByText(/© 2022/i);

    // 2. Cuộn tới mỏ neo này thay vì tìm thẻ 'footer'
    await footerAnchor.scrollIntoViewIfNeeded();

    // 3. Kiểm tra các tiêu đề bằng Regex cho linh hoạt
    const headings = [/Giới thiệu/i, /Cộng đồng/i, /Đón tiếp khách/i, /Hỗ trợ/i];

    for (const title of headings) {
        // Tìm text và ép nó phải Visible
        await expect(page.getByText(title).first()).toBeVisible({ timeout: 10000 });
    }
    // 4. Check thêm nút ngôn ngữ cho chắc cú là footer đã lên
    await expect(page.getByText('Tiếng Việt (VN)')).toBeVisible();
});

test('Header - Navbar phải hiển thị đúng cấu trúc', async ({ page }) => {
    await page.goto('/');
    const navbar = page.getByRole('navigation');
    await expect(navbar).toBeVisible();
    await expect(page.getByAltText(/Cyber Logo/i)).toBeVisible();
});

test('Search Bar - Hiển thị đúng thông tin', async ({ page }) => {
    await page.goto('/');
    // Thay vì check ngày cứng, check xem có đoạn text chứa năm 2026 không
    await expect(page.getByText(/2026/)).toBeVisible();
    await expect(page.getByText('Địa điểm')).toBeVisible();
    await expect(page.getByText('Thêm khách')).toBeVisible();
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

test('Khối "Ở bất cứ đâu" - Hiển thị đủ 4 loại chỗ ở', async ({ page }) => {
    await page.goto('/');

    // 1. Tìm tiêu đề khối (Dùng Heading level 1 như Snapshot báo)
    const sectionHeading = page.getByRole('heading', { name: /Ở bất cứ đâu/i });

    // 2. Cuộn tới nó để kích hoạt render
    await sectionHeading.scrollIntoViewIfNeeded();
    await expect(sectionHeading).toBeVisible();

    // 3. Khối này chứa 4 cái link (Toàn bộ nhà, Chỗ ở độc đáo,...)
    // Dựa vào Snapshot, các link này nằm ngay dưới heading
    const categoryCards = page.locator('a').filter({ hasText: /(Toàn bộ nhà|Chỗ ở độc đáo|Trang trại|thú cưng)/i });

    // 4. Kiểm tra số lượng phải là 4
    await expect(categoryCards).toHaveCount(4);

    // 5. Kiểm tra link đầu tiên có dẫn tới đúng trang không
    await expect(categoryCards.first()).toHaveAttribute('href', '/rooms/ho-chi-minh');
});

test('Filter Bar - Hiển thị đủ các nút lọc chỗ ở', async ({ page }) => {
    await page.goto('/');

    // 1. Không cần cuộn sâu, vì thanh này thường nằm ngay dưới Banner/Search Bar
    // Ta tìm một cái nút làm đại diện để đợi nó hiện ra
    const filterButton = page.getByRole('button', { name: /Loại nơi ở/i });
    await expect(filterButton).toBeVisible({ timeout: 10000 });

    // 2. Danh sách các nút cần kiểm tra theo Snapshot của ông
    const filters = [
        /Loại nơi ở/i,
        /Giá/i,
        /Đặt ngay/i,
        /Phòng và phòng ngủ/i,
        /Bộ lọc khác/i
    ];

    // 3. Chạy vòng lặp kiểm tra từng nút
    for (const filter of filters) {
        await expect(page.getByRole('button', { name: filter })).toBeVisible();
    }
});