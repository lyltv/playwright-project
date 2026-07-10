# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/layout.spec.ts >> Location Integrity - 8 địa điểm từ API phải hiển thị trên trang
- Location: tests/homepage/layout.spec.ts:79:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://demo5.cybersoft.edu.vn/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - link "Cyber Logo CyberSoft" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "Cyber Logo" [ref=e6]
        - generic [ref=e7]: CyberSoft
      - button [ref=e9] [cursor=pointer]:
        - img [ref=e10]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link "Home" [ref=e14] [cursor=pointer]:
            - /url: /
        - listitem [ref=e15]:
          - link "About" [ref=e16] [cursor=pointer]:
            - /url: /
        - listitem [ref=e17]:
          - link "Services" [ref=e18] [cursor=pointer]:
            - /url: /
        - listitem [ref=e19]:
          - link "Pricing" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e21]:
          - link "Contact" [ref=e22] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e24]:
    - generic [ref=e25]: Your browser does not support the video tag.
    - generic [ref=e29]:
      - heading "Cyberbnb" [level=2] [ref=e32]
      - paragraph [ref=e33]: Belong anywhere
  - generic [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39] [cursor=pointer]:
        - paragraph [ref=e40]: Địa điểm
        - paragraph [ref=e41]: Bạn sắp đi đâu?
      - paragraph [ref=e45] [cursor=pointer]: 06/07/2026 – 13/07/2026
      - generic [ref=e48] [cursor=pointer]:
        - paragraph [ref=e49]: Thêm khách
        - img "search" [ref=e51]:
          - img [ref=e52]
    - generic [ref=e54]:
      - button "Loại nơi ở" [ref=e55] [cursor=pointer]
      - button "Giá" [ref=e56] [cursor=pointer]
      - button "Đặt ngay" [ref=e57] [cursor=pointer]
      - button "Phòng và phòng ngủ" [ref=e58] [cursor=pointer]
      - button "Bộ lọc khác" [ref=e59] [cursor=pointer]
  - generic [ref=e61]:
    - generic [ref=e62]:
      - link "Hồ Chí Minh 15 phút lái xe" [ref=e63] [cursor=pointer]:
        - /url: /rooms/ho-chi-minh
        - generic [ref=e67]:
          - heading "Hồ Chí Minh" [level=2] [ref=e68]
          - paragraph [ref=e69]: 15 phút lái xe
      - link "Cần Thơ 3 giờ lái xe" [ref=e70] [cursor=pointer]:
        - /url: /rooms/can-tho
        - generic [ref=e74]:
          - heading "Cần Thơ" [level=2] [ref=e75]
          - paragraph [ref=e76]: 3 giờ lái xe
      - link "Nha Trang 6.5 giờ lái xe" [ref=e77] [cursor=pointer]:
        - /url: /rooms/nha-trang
        - generic [ref=e81]:
          - heading "Nha Trang" [level=2] [ref=e82]
          - paragraph [ref=e83]: 6.5 giờ lái xe
      - link "Hà Nội 15 phút lái xe" [ref=e84] [cursor=pointer]:
        - /url: /rooms/ha-noi
        - generic [ref=e88]:
          - heading "Hà Nội" [level=2] [ref=e89]
          - paragraph [ref=e90]: 15 phút lái xe
      - link "Phú Quốc 7.5 giờ lái xe" [ref=e91] [cursor=pointer]:
        - /url: /rooms/phu-quoc
        - generic [ref=e95]:
          - heading "Phú Quốc" [level=2] [ref=e96]
          - paragraph [ref=e97]: 7.5 giờ lái xe
      - link "Đà Nẵng 45 phút lái xe" [ref=e98] [cursor=pointer]:
        - /url: /rooms/da-nang
        - generic [ref=e102]:
          - heading "Đà Nẵng" [level=2] [ref=e103]
          - paragraph [ref=e104]: 45 phút lái xe
      - link "Đà Lạt 30 phút lái xe" [ref=e105] [cursor=pointer]:
        - /url: /rooms/da-lat
        - generic [ref=e109]:
          - heading "Đà Lạt" [level=2] [ref=e110]
          - paragraph [ref=e111]: 30 phút lái xe
      - link "Phan Thiết 5 giờ lái xe" [ref=e112] [cursor=pointer]:
        - /url: /rooms/phan-thiet
        - generic [ref=e116]:
          - heading "Phan Thiết" [level=2] [ref=e117]
          - paragraph [ref=e118]: 5 giờ lái xe
    - generic [ref=e119]:
      - heading "Ở bất cứ đâu" [level=1] [ref=e120]
      - generic [ref=e121]:
        - link "Toàn bộ nhà" [ref=e122] [cursor=pointer]:
          - /url: /rooms/ho-chi-minh
          - generic [ref=e128]: Toàn bộ nhà
        - link "Chỗ ở độc đáo" [ref=e129] [cursor=pointer]:
          - /url: /rooms/nha-trang
          - generic [ref=e135]: Chỗ ở độc đáo
        - link "Trang trại và thiên nhiên" [ref=e136] [cursor=pointer]:
          - /url: /rooms/da-lat
          - generic [ref=e142]: Trang trại và thiên nhiên
        - link "Cho phép mang theo thú cưng" [ref=e143] [cursor=pointer]:
          - /url: /rooms/da-nang
          - generic [ref=e149]: Cho phép mang theo thú cưng
  - generic [ref=e150]:
    - generic [ref=e151]:
      - generic [ref=e152]:
        - heading "Giới thiệu" [level=2] [ref=e153]
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "Phương thức hoạt động của Cyber" [ref=e156] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e157]:
            - link "Trang tin tức" [ref=e158] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e159]:
            - link "Nhà đầu tư" [ref=e160] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e161]:
            - link "Cyber Plus" [ref=e162] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e163]:
            - link "Cyber Luxe" [ref=e164] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e165]:
            - link "HotelTonight" [ref=e166] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e167]:
            - link "Cyber for Work" [ref=e168] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e169]:
            - link "Nhờ có Host, mọi điều đều có thể" [ref=e170] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e171]:
            - link "Cơ hội nghề nghiệp" [ref=e172] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e173]:
            - link "Thư của nhà sáng lập" [ref=e174] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e175]:
        - heading "Cộng đồng" [level=2] [ref=e176]
        - list [ref=e177]:
          - listitem [ref=e178]:
            - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e179] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e180]:
            - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e181] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e182]:
            - link "Đối tác liên kết Cyber" [ref=e183] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e184]:
            - link "Chỗ ở cho tuyến đầu" [ref=e185] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e186]:
            - link "Lượt giới thiệu của khách" [ref=e187] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e188]:
            - link "CyberSoft.edu.vn" [ref=e189] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e190]:
        - heading "Đón tiếp khách" [level=2] [ref=e191]
        - list [ref=e192]:
          - listitem [ref=e193]:
            - link "Cho thuê nhà" [ref=e194] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e195]:
            - link "Tổ chức Trải nghiệm trực tuyến" [ref=e196] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e197]:
            - link "Tổ chức Trải nghiệm" [ref=e198] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e199]:
            - link "Đón tiếp khách có trách nhiệm" [ref=e200] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e201]:
            - link "Trung tâm tài nguyên" [ref=e202] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e203]:
            - link "Trung tâm cộng đồng" [ref=e204] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e205]:
        - heading "Hỗ trợ" [level=2] [ref=e206]
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e209] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e210]:
            - link "Trung tâm trợ giúp" [ref=e211] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e212]:
            - link "Các tùy chọn hủy" [ref=e213] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e214]:
            - link "Hỗ trợ khu dân cư" [ref=e215] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e216]:
            - link "Tin cây và an toàn" [ref=e217] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
    - generic [ref=e219]:
      - generic [ref=e220]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
      - generic [ref=e221]:
        - img [ref=e223]
        - text: Tiếng Việt (VN)
        - text: USD
        - generic [ref=e225]: Hỗ trợ tài nguyên
```

# Test source

```ts
  1   | import { HOMEPAGE } from '@constants/homePage.config';
  2   | import { test, expect } from '@fixtures/test_hook';
  3   | import { getSearchDateRangeRegex } from 'utils/dateHelper';
  4   | 
  5   | test('Header - Filter phải hiển thị đúng cấu trúc', async ({ page }) => {
  6   |     await page.goto('/');
  7   |     // Header
  8   |     const navbar = page.getByRole('navigation');
  9   |     await expect(navbar).toBeVisible();
  10  |     await expect(page.getByAltText(/Cyber Logo/i)).toBeVisible();
  11  |     // CHECK FILTER
  12  |     const FILTER_LIST = HOMEPAGE.FILTER_BAR;
  13  |     for (const filterName of FILTER_LIST) {
  14  |         const button = page.getByRole('button', { name: filterName });
  15  |         await expect(button).toBeVisible();
  16  |         await expect(button).toBeEnabled();
  17  |     }
  18  |     const dateRangeRegex = getSearchDateRangeRegex(1, 7);
  19  |     await expect(page.getByText(HOMEPAGE.SEARCH_BAR.LOCATION_LABEL)).toBeVisible();
  20  |     await expect(page.getByText(HOMEPAGE.SEARCH_BAR.GUEST_LABEL)).toBeVisible();
  21  |     await expect(page.getByText(dateRangeRegex)).toBeVisible();
  22  | });
  23  | 
  24  | test('Date Picker - Hiển thị đủ các tùy chọn chọn nhanh (Static Ranges)', async ({ page }) => {
  25  |     await page.goto('/');
  26  | 
  27  |     const dateData = HOMEPAGE.DATE_PICKER;
  28  | 
  29  |     // 1. Click vào phần hiển thị ngày để mở popup
  30  |     // Trong HTML của ông, nó là div chứa text ngày tháng
  31  |     const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  32  |     await dateTrigger.click();
  33  | 
  34  |     // 2. Kiểm tra Popup hiển thị
  35  |     const pickerPopup = page.locator('.rdrDateRangePickerWrapper');
  36  |     await expect(pickerPopup).toBeVisible();
  37  | 
  38  |     // 3. Loop qua danh sách "Today, Yesterday..." để check từng nút
  39  |     for (const rangeLabel of dateData.STATIC_RANGES) {
  40  |         const rangeBtn = pickerPopup
  41  |             .locator('button.rdrStaticRange')
  42  |             .filter({ hasText: rangeLabel });
  43  | 
  44  |         await expect(rangeBtn).toBeVisible();
  45  |         // Check xem có bấm được không (nếu cần)
  46  |         await expect(rangeBtn).toBeEnabled();
  47  |     }
  48  | });
  49  | 
  50  | test('Location Picker - Dữ liệu hiển thị phải khớp với API', async ({ page, api }) => {
  51  |     await page.goto('/');
  52  |     const locations = await api.location.getPopularLocations();
  53  | 
  54  |     // 1. Mở popup
  55  |     await page.getByText(HOMEPAGE.LOCATION_PICKER.PLACEHOLDER).click();
  56  | 
  57  |     // 2. Định vị container Popup bằng div có class 'absolute' và chứa tiêu đề
  58  |     const popup = page.locator('div.absolute').filter({
  59  |         has: page.getByRole('heading', { name: HOMEPAGE.LOCATION_PICKER.TITLE }),
  60  |     });
  61  | 
  62  |     // 3. Kiểm tra địa điểm đầu tiên
  63  |     if (locations.length > 0) {
  64  |         await expect(popup.getByText(locations[0].city, { exact: true })).toBeVisible({
  65  |             timeout: 10000,
  66  |         });
  67  |     }
  68  |     // 4. Duyệt toàn bộ danh sách để check data
  69  |     for (const loc of locations) {
  70  |         const cityCard = popup.locator('div.cursor-pointer').filter({
  71  |             hasText: new RegExp(`^${loc.city}$`, 'i'),
  72  |         });
  73  |         await expect(cityCard).toBeVisible();
  74  |         const cityImg = cityCard.locator('img');
  75  |         await expect(cityImg).toHaveAttribute('src', loc.image);
  76  |     }
  77  | });
  78  | 
  79  | test('Location Integrity - 8 địa điểm từ API phải hiển thị trên trang', async ({ page, api }) => {
> 80  |     await page.goto('/');
      |                ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  81  | 
  82  |     // 1. Lấy 8 địa điểm chuẩn từ API
  83  |     const locations = await api.location.getPopularLocations();
  84  | 
  85  |     // 2. Duyệt danh sách và kiểm tra sự hiện diện
  86  |     for (const loc of locations) {
  87  |         const card = page
  88  |             .locator('a')
  89  |             .filter({
  90  |                 hasText: loc.city,
  91  |             })
  92  |             .first();
  93  | 
  94  |         // 3. Kiểm tra tên thành phố phải hiện lên
  95  |         await expect(card).toBeVisible({ timeout: 7000 });
  96  |         // 4. Phải có 1 thẻ <img>
  97  |         await expect(card.locator('img')).toBeVisible();
  98  |     }
  99  | });
  100 | 
  101 | test('Footer - Kiểm tra cấu trúc các mục thông tin và liên kết', async ({ page }) => {
  102 |     await page.goto('/');
  103 | 
  104 |     const footerData = HOMEPAGE.FOOTER;
  105 | 
  106 |     // 1. Cuộn tới Footer để đảm bảo nó hiển thị (AOS animation có thể cần cái này)
  107 |     await page.getByText(footerData.COPYRIGHT_ANCHOR).scrollIntoViewIfNeeded();
  108 | 
  109 |     // 2. Loop qua từng Section (Cột)
  110 |     for (const section of footerData.SECTIONS) {
  111 |         // Khoanh vùng cái cột dựa trên Tiêu đề
  112 |         const column = page
  113 |             .locator('div')
  114 |             .filter({
  115 |                 has: page.getByRole('heading', { name: section.TITLE }),
  116 |             })
  117 |             .first();
  118 | 
  119 |         // Kiểm tra Tiêu đề cột phải Visible
  120 |         await expect(column.getByRole('heading', { name: section.TITLE })).toBeVisible();
  121 | 
  122 |         // 3. Loop tiếp qua từng Link trong cột đó
  123 |         for (const linkText of section.LINKS) {
  124 |             const link = column.getByRole('link', { name: linkText, exact: true });
  125 |             await link.scrollIntoViewIfNeeded();
  126 |             await expect(link).toBeVisible({ timeout: 5000 });
  127 |             await expect(link).toHaveAttribute('href', /.*/);
  128 |         }
  129 |     }
  130 |     // 4. Check hàng cuối cùng (Ngôn ngữ & Bản quyền)
  131 |     await expect(page.getByText(footerData.LANGUAGE)).toBeVisible();
  132 | });
  133 | 
  134 | test('Responsive - Kiểm tra Mobile Layout', async ({ page }) => {
  135 |     await page.goto('/');
  136 |     await page.setViewportSize({ width: 390, height: 844 });
  137 | 
  138 |     // Đợi 1 chút cho giao diện co lại
  139 |     await page.waitForTimeout(500);
  140 | 
  141 |     // Nút Toggle Menu (hamburger) phải xuất hiện trên mobile
  142 |     const mobileBtn = page.locator('button[data-collapse-toggle="navbar-user"]');
  143 |     await expect(mobileBtn).toBeVisible();
  144 | });
  145 | 
```