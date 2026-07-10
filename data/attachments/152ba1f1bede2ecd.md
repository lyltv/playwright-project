# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/booking.spec.ts >> Booking >> BOOKING_02: Log in first → book room → success + appears in dashboard
- Location: tests/booking/booking.spec.ts:33:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo5.cybersoft.edu.vn/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - link "Cyber Logo CyberSoft" [ref=e5]:
        - /url: /
        - img "Cyber Logo" [ref=e6]
        - generic [ref=e7]: CyberSoft
      - button "Open user menu Quyên Cập Nhật" [ref=e9] [cursor=pointer]:
        - generic [ref=e10]: Open user menu
        - img [ref=e11]
        - generic [ref=e12]: Quyên Cập Nhật
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16]:
            - /url: /
        - listitem [ref=e17]:
          - link "About" [ref=e18]:
            - /url: /
        - listitem [ref=e19]:
          - link "Services" [ref=e20]:
            - /url: /
        - listitem [ref=e21]:
          - link "Pricing" [ref=e22]:
            - /url: "#"
        - listitem [ref=e23]:
          - link "Contact" [ref=e24]:
            - /url: "#"
  - generic [ref=e26]:
    - generic [ref=e27]: Your browser does not support the video tag.
    - generic [ref=e31]:
      - heading "Cyberbnb" [level=2] [ref=e34]
      - paragraph [ref=e35]: Belong anywhere
  - generic [ref=e39]:
    - generic [ref=e40]:
      - generic [ref=e41] [cursor=pointer]:
        - paragraph [ref=e42]: Địa điểm
        - paragraph [ref=e43]: Bạn sắp đi đâu?
      - paragraph [ref=e47] [cursor=pointer]: 06/07/2026 – 13/07/2026
      - generic [ref=e50] [cursor=pointer]:
        - paragraph [ref=e51]: Thêm khách
        - img "search" [ref=e53]:
          - img [ref=e54]
    - generic [ref=e56]:
      - button "Loại nơi ở" [ref=e57] [cursor=pointer]
      - button "Giá" [ref=e58] [cursor=pointer]
      - button "Đặt ngay" [ref=e59] [cursor=pointer]
      - button "Phòng và phòng ngủ" [ref=e60] [cursor=pointer]
      - button "Bộ lọc khác" [ref=e61] [cursor=pointer]
  - generic [ref=e63]:
    - generic [ref=e64]:
      - link "Hồ Chí Minh 15 phút lái xe" [ref=e65]:
        - /url: /rooms/ho-chi-minh
        - generic [ref=e69] [cursor=pointer]:
          - heading "Hồ Chí Minh" [level=2] [ref=e70]
          - paragraph [ref=e71]: 15 phút lái xe
      - link "Cần Thơ 3 giờ lái xe" [ref=e72]:
        - /url: /rooms/can-tho
        - generic [ref=e76] [cursor=pointer]:
          - heading "Cần Thơ" [level=2] [ref=e77]
          - paragraph [ref=e78]: 3 giờ lái xe
      - link "Nha Trang 6.5 giờ lái xe" [ref=e79]:
        - /url: /rooms/nha-trang
        - generic [ref=e83] [cursor=pointer]:
          - heading "Nha Trang" [level=2] [ref=e84]
          - paragraph [ref=e85]: 6.5 giờ lái xe
      - link "Hà Nội 15 phút lái xe" [ref=e86]:
        - /url: /rooms/ha-noi
        - generic [ref=e90] [cursor=pointer]:
          - heading "Hà Nội" [level=2] [ref=e91]
          - paragraph [ref=e92]: 15 phút lái xe
      - link "Phú Quốc 7.5 giờ lái xe" [ref=e93]:
        - /url: /rooms/phu-quoc
        - generic [ref=e97] [cursor=pointer]:
          - heading "Phú Quốc" [level=2] [ref=e98]
          - paragraph [ref=e99]: 7.5 giờ lái xe
      - link "Đà Nẵng 45 phút lái xe" [ref=e100]:
        - /url: /rooms/da-nang
        - generic [ref=e104] [cursor=pointer]:
          - heading "Đà Nẵng" [level=2] [ref=e105]
          - paragraph [ref=e106]: 45 phút lái xe
      - link "Đà Lạt 30 phút lái xe" [ref=e107]:
        - /url: /rooms/da-lat
        - generic [ref=e111] [cursor=pointer]:
          - heading "Đà Lạt" [level=2] [ref=e112]
          - paragraph [ref=e113]: 30 phút lái xe
      - link "Phan Thiết 5 giờ lái xe" [ref=e114]:
        - /url: /rooms/phan-thiet
        - generic [ref=e118] [cursor=pointer]:
          - heading "Phan Thiết" [level=2] [ref=e119]
          - paragraph [ref=e120]: 5 giờ lái xe
    - generic [ref=e121]:
      - heading "Ở bất cứ đâu" [level=1] [ref=e122]
      - generic [ref=e123]:
        - link "Toàn bộ nhà" [ref=e124]:
          - /url: /rooms/ho-chi-minh
          - generic [ref=e130] [cursor=pointer]: Toàn bộ nhà
        - link "Chỗ ở độc đáo" [ref=e131]:
          - /url: /rooms/nha-trang
          - generic [ref=e137] [cursor=pointer]: Chỗ ở độc đáo
        - link "Trang trại và thiên nhiên" [ref=e138]:
          - /url: /rooms/da-lat
          - generic [ref=e144] [cursor=pointer]: Trang trại và thiên nhiên
        - link "Cho phép mang theo thú cưng" [ref=e145]:
          - /url: /rooms/da-nang
          - generic [ref=e151] [cursor=pointer]: Cho phép mang theo thú cưng
  - generic [ref=e152]:
    - generic [ref=e153]:
      - generic [ref=e154]:
        - heading "Giới thiệu" [level=2] [ref=e155]
        - list [ref=e156]:
          - listitem [ref=e157]:
            - link "Phương thức hoạt động của Cyber" [ref=e158] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e159]:
            - link "Trang tin tức" [ref=e160] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e161]:
            - link "Nhà đầu tư" [ref=e162] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e163]:
            - link "Cyber Plus" [ref=e164] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e165]:
            - link "Cyber Luxe" [ref=e166] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e167]:
            - link "HotelTonight" [ref=e168] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e169]:
            - link "Cyber for Work" [ref=e170] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e171]:
            - link "Nhờ có Host, mọi điều đều có thể" [ref=e172] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e173]:
            - link "Cơ hội nghề nghiệp" [ref=e174] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e175]:
            - link "Thư của nhà sáng lập" [ref=e176] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e177]:
        - heading "Cộng đồng" [level=2] [ref=e178]
        - list [ref=e179]:
          - listitem [ref=e180]:
            - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e181] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e182]:
            - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e183] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e184]:
            - link "Đối tác liên kết Cyber" [ref=e185] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e186]:
            - link "Chỗ ở cho tuyến đầu" [ref=e187] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e188]:
            - link "Lượt giới thiệu của khách" [ref=e189] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e190]:
            - link "CyberSoft.edu.vn" [ref=e191] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e192]:
        - heading "Đón tiếp khách" [level=2] [ref=e193]
        - list [ref=e194]:
          - listitem [ref=e195]:
            - link "Cho thuê nhà" [ref=e196] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e197]:
            - link "Tổ chức Trải nghiệm trực tuyến" [ref=e198] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e199]:
            - link "Tổ chức Trải nghiệm" [ref=e200] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e201]:
            - link "Đón tiếp khách có trách nhiệm" [ref=e202] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e203]:
            - link "Trung tâm tài nguyên" [ref=e204] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e205]:
            - link "Trung tâm cộng đồng" [ref=e206] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e207]:
        - heading "Hỗ trợ" [level=2] [ref=e208]
        - list [ref=e209]:
          - listitem [ref=e210]:
            - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e211] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e212]:
            - link "Trung tâm trợ giúp" [ref=e213] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e214]:
            - link "Các tùy chọn hủy" [ref=e215] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e216]:
            - link "Hỗ trợ khu dân cư" [ref=e217] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e218]:
            - link "Tin cây và an toàn" [ref=e219] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
    - generic [ref=e221]:
      - generic [ref=e222]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
      - generic [ref=e223]:
        - img [ref=e225]
        - text: Tiếng Việt (VN)
        - text: USD
        - generic [ref=e227]: Hỗ trợ tài nguyên
```

# Test source

```ts
  1   | import { BOOKING } from '@constants/booking.config';
  2   | import { HOMEPAGE } from '@constants/homePage.config';
  3   | import { test, expect } from '@fixtures/test_hook';
  4   | 
  5   | test.describe('Booking', () => {
  6   |     const navigateToRoomDetail = async (
  7   |         homePage: Awaited<ReturnType<any>>,
  8   |         page: import('@playwright/test').Page
  9   |     ) => {
  10  |         await homePage.selectLocation('hcm');
  11  |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  12  | 
  13  |         const roomCard = page.locator('a[href*="room-detail"]').first();
  14  |         await roomCard.waitFor({ state: 'visible', timeout: 10000 });
  15  |         await roomCard.click();
  16  |         await page.waitForURL('**/room-detail/**', { timeout: 15000 });
  17  |     };
  18  | 
  19  |     test('BOOKING_01: Not logged in click Book → show login request notification', async ({
  20  |         homePage,
  21  |         page,
  22  |     }) => {
  23  |         await navigateToRoomDetail(homePage, page);
  24  | 
  25  |         const bookButton = page.getByRole('button', { name: BOOKING.ROOM_DETAIL.BTN_BOOK });
  26  |         await bookButton.scrollIntoViewIfNeeded();
  27  |         await bookButton.click();
  28  | 
  29  |         const notification = page.getByText(BOOKING.BOOKING_FLOW.LOGIN_ALERT);
  30  |         await expect(notification).toBeVisible({ timeout: 5000 });
  31  |     });
  32  | 
  33  |     test('BOOKING_02: Log in first → book room → success + appears in dashboard', async ({
  34  |         homePage,
  35  |         page,
  36  |     }) => {
  37  |         await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  38  |         const userMenu = page.getByRole('button', { name: /Open user menu/i });
  39  |         await expect(userMenu).toBeVisible({ timeout: 10000 });
  40  | 
> 41  |         await page.goto('/');
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  42  |         await navigateToRoomDetail(homePage, page);
  43  | 
  44  |         const roomTitle = await page.locator('h2').first().textContent();
  45  | 
  46  |         const bookButton = page.getByRole('button', { name: BOOKING.ROOM_DETAIL.BTN_BOOK });
  47  |         await bookButton.scrollIntoViewIfNeeded();
  48  |         await bookButton.click();
  49  | 
  50  |         const confirmButton = page.getByRole('button', { name: BOOKING.BOOKING_FLOW.BTN_CONFIRM });
  51  |         await expect(confirmButton).toBeVisible({ timeout: 5000 });
  52  |         await confirmButton.click();
  53  | 
  54  |         const successMessage = page.getByText(BOOKING.BOOKING_FLOW.TOAST_SUCCESS);
  55  |         await expect(successMessage).toBeVisible({ timeout: 5000 });
  56  | 
  57  |         // Verify booking appears in dashboard
  58  |         await page.goto('/');
  59  |         await page.getByRole('button', { name: /Open user menu/i }).click();
  60  |         await page.locator('#user-dropdown').getByText('Dashboard').click();
  61  |         await page.waitForLoadState('domcontentloaded');
  62  | 
  63  |         const bookedRoom = page.getByText(roomTitle!.trim()).first();
  64  |         await expect(bookedRoom).toBeVisible({ timeout: 10000 });
  65  |     });
  66  | 
  67  |     test('BOOKING_03: Log in directly on room detail page → book room → success + appears in dashboard', async ({
  68  |         homePage,
  69  |         page,
  70  |     }) => {
  71  |         await navigateToRoomDetail(homePage, page);
  72  | 
  73  |         const roomTitle = await page.locator('h2').first().textContent();
  74  | 
  75  |         // Login from room detail page (avatar button is the first bg-main in nav)
  76  |         await page.locator('button.bg-main').first().click();
  77  |         await page.locator('#user-dropdown').getByText(HOMEPAGE.LOGIN.BTN_LOGIN).click();
  78  |         await page.getByPlaceholder(HOMEPAGE.LOGIN.EMAIL_PLACEHOLDER).fill(process.env.TEST_EMAIL!);
  79  |         await page.getByPlaceholder(HOMEPAGE.LOGIN.PASSWORD_PLACEHOLDER).fill(process.env.TEST_PASSWORD!);
  80  |         await page.getByRole('button', { name: HOMEPAGE.LOGIN.BTN_LOGIN }).click();
  81  | 
  82  |         const userMenu = page.getByRole('button', { name: /Open user menu/i });
  83  |         await expect(userMenu).toBeVisible({ timeout: 10000 });
  84  | 
  85  |         const bookButton = page.getByRole('button', { name: BOOKING.ROOM_DETAIL.BTN_BOOK });
  86  |         await bookButton.scrollIntoViewIfNeeded();
  87  |         await bookButton.click();
  88  | 
  89  |         const confirmButton = page.getByRole('button', { name: BOOKING.BOOKING_FLOW.BTN_CONFIRM });
  90  |         await expect(confirmButton).toBeVisible({ timeout: 5000 });
  91  |         await confirmButton.click();
  92  | 
  93  |         const successMessage = page.getByText(BOOKING.BOOKING_FLOW.TOAST_SUCCESS);
  94  |         await expect(successMessage).toBeVisible({ timeout: 5000 });
  95  | 
  96  |         // Verify booking appears in dashboard
  97  |         await page.goto('/');
  98  |         await page.getByRole('button', { name: /Open user menu/i }).click();
  99  |         await page.locator('#user-dropdown').getByText('Dashboard').click();
  100 |         await page.waitForLoadState('domcontentloaded');
  101 | 
  102 |         const bookedRoom = page.getByText(roomTitle!.trim()).first();
  103 |         await expect(bookedRoom).toBeVisible({ timeout: 10000 });
  104 |     });
  105 | 
  106 |     test('BOOKING_04: Booking modal displays fully: price, reviews, dates, guests, book button, total price, language consistency', async ({
  107 |         homePage,
  108 |         page,
  109 |     }) => {
  110 |         // BUG: Inconsistent display
  111 |         test.fail();
  112 |         await navigateToRoomDetail(homePage, page);
  113 | 
  114 |         // Room price per night ($XX / night)
  115 |         const priceSection = page.getByText(BOOKING.ROOM_DETAIL.NIGHT_LABEL);
  116 |         await priceSection.scrollIntoViewIfNeeded();
  117 |         await expect(priceSection).toBeVisible();
  118 | 
  119 |         // Rating (star + evaluation)
  120 |         const ratingSection = page.getByText(/đánh giá/i).first();
  121 |         await expect(ratingSection).toBeVisible();
  122 | 
  123 |         // Checkin / Checkout date fields
  124 |         await expect(page.getByText(HOMEPAGE.SEARCH.CHECKIN)).toBeVisible();
  125 |         await expect(page.getByText(HOMEPAGE.SEARCH.CHECKOUT)).toBeVisible();
  126 | 
  127 |         // Guest section with +/- buttons
  128 |         await expect(page.getByText('Khách').first()).toBeVisible();
  129 |         await expect(page.getByRole('button', { name: '–' })).toBeVisible();
  130 |         await expect(page.getByRole('button', { name: '+' })).toBeVisible();
  131 | 
  132 |         // Book button
  133 |         await expect(page.getByRole('button', { name: BOOKING.ROOM_DETAIL.BTN_BOOK })).toBeVisible();
  134 | 
  135 |         // Not charged message
  136 |         await expect(page.getByText(BOOKING.BOOKING_FLOW.NOT_CHARGED_YET)).toBeVisible();
  137 | 
  138 |         // Total before taxes
  139 |         await expect(page.getByText(BOOKING.BOOKING_FLOW.TOTAL_LABEL)).toBeVisible();
  140 | 
  141 |         // Language consistency: "Cleaning fee" and "Total before taxes" are EN in VN UI
```