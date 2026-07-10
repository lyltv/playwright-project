# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/booked.spec.ts >> Dashboard - Booked Rooms >> BOOKED_03: Should load multiple rooms with pagination
- Location: tests/dashboard/booked.spec.ts:63:9

# Error details

```
Error: Phải có phân trang hoặc nút xem thêm

expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - img [ref=e4]
    - navigation [ref=e10]:
      - generic [ref=e11]:
        - link "Cyber Logo CyberSoft" [ref=e12] [cursor=pointer]:
          - /url: /
          - img "Cyber Logo" [ref=e13]
          - generic [ref=e14]: CyberSoft
        - button "Open user menu Quyên Cập Nhật" [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: Open user menu
          - img [ref=e18]
          - generic [ref=e19]: Quyên Cập Nhật
        - list [ref=e21]:
          - listitem [ref=e22]:
            - link "Home" [ref=e23] [cursor=pointer]:
              - /url: /
          - listitem [ref=e24]:
            - link "About" [ref=e25] [cursor=pointer]:
              - /url: /info-user
          - listitem [ref=e26]:
            - link "Services" [ref=e27] [cursor=pointer]:
              - /url: /info-user
          - listitem [ref=e28]:
            - link "Pricing" [ref=e29] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e30]:
            - link "Contact" [ref=e31] [cursor=pointer]:
              - /url: "#"
    - generic [ref=e35]:
      - paragraph: Thông tin người dùng undefined
    - generic [ref=e36]:
      - generic [ref=e38]:
        - button "Cập nhật ảnh" [ref=e41] [cursor=pointer]
        - generic [ref=e42]:
          - paragraph [ref=e44]: Xác minh danh tính
          - paragraph [ref=e45]: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
          - button "Nhận huy hiệu" [ref=e46] [cursor=pointer]:
            - generic [ref=e47]: Nhận huy hiệu
          - paragraph [ref=e49]: đã xác nhận
          - paragraph [ref=e50]:
            - img [ref=e52]
            - text: Địa chỉ email
      - generic [ref=e54]:
        - paragraph [ref=e55]: Xin chào, tôi là
        - paragraph [ref=e56]: Bắt đầu tham gia vào 2023
        - button "Chỉnh sửa hồ sơ" [ref=e57] [cursor=pointer]
        - heading "Phòng đã thuê" [level=1] [ref=e58]
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e63]:
              - heading [level=3] [ref=e64]
              - list [ref=e65]:
                - listitem [ref=e66]
                - listitem [ref=e67]
                - listitem [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e72]:
                - heading [level=3] [ref=e73]
                - list [ref=e74]:
                  - listitem [ref=e75]
                  - listitem [ref=e76]
                  - listitem [ref=e77]
              - generic [ref=e80]:
                - heading [level=3] [ref=e81]
                - list [ref=e82]:
                  - listitem [ref=e83]
                  - listitem [ref=e84]
                  - listitem [ref=e85]
              - generic [ref=e88]:
                - heading [level=3] [ref=e89]
                - list [ref=e90]:
                  - listitem [ref=e91]
                  - listitem [ref=e92]
                  - listitem [ref=e93]
          - generic [ref=e95]:
            - generic [ref=e98]:
              - heading [level=3] [ref=e99]
              - list [ref=e100]:
                - listitem [ref=e101]
                - listitem [ref=e102]
                - listitem [ref=e103]
            - generic [ref=e104]:
              - generic [ref=e107]:
                - heading [level=3] [ref=e108]
                - list [ref=e109]:
                  - listitem [ref=e110]
                  - listitem [ref=e111]
                  - listitem [ref=e112]
              - generic [ref=e115]:
                - heading [level=3] [ref=e116]
                - list [ref=e117]:
                  - listitem [ref=e118]
                  - listitem [ref=e119]
                  - listitem [ref=e120]
              - generic [ref=e123]:
                - heading [level=3] [ref=e124]
                - list [ref=e125]:
                  - listitem [ref=e126]
                  - listitem [ref=e127]
                  - listitem [ref=e128]
    - generic [ref=e129]:
      - generic [ref=e130]:
        - generic [ref=e131]:
          - heading "Giới thiệu" [level=2] [ref=e132]
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link "Phương thức hoạt động của Cyber" [ref=e135] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e136]:
              - link "Trang tin tức" [ref=e137] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e138]:
              - link "Nhà đầu tư" [ref=e139] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e140]:
              - link "Cyber Plus" [ref=e141] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e142]:
              - link "Cyber Luxe" [ref=e143] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e144]:
              - link "HotelTonight" [ref=e145] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e146]:
              - link "Cyber for Work" [ref=e147] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e148]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e149] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e150]:
              - link "Cơ hội nghề nghiệp" [ref=e151] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e152]:
              - link "Thư của nhà sáng lập" [ref=e153] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e154]:
          - heading "Cộng đồng" [level=2] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e158] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e159]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e160] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e161]:
              - link "Đối tác liên kết Cyber" [ref=e162] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e163]:
              - link "Chỗ ở cho tuyến đầu" [ref=e164] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e165]:
              - link "Lượt giới thiệu của khách" [ref=e166] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e167]:
              - link "CyberSoft.edu.vn" [ref=e168] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e169]:
          - heading "Đón tiếp khách" [level=2] [ref=e170]
          - list [ref=e171]:
            - listitem [ref=e172]:
              - link "Cho thuê nhà" [ref=e173] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e174]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e175] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e176]:
              - link "Tổ chức Trải nghiệm" [ref=e177] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e178]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e179] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e180]:
              - link "Trung tâm tài nguyên" [ref=e181] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e182]:
              - link "Trung tâm cộng đồng" [ref=e183] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e184]:
          - heading "Hỗ trợ" [level=2] [ref=e185]
          - list [ref=e186]:
            - listitem [ref=e187]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e188] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e189]:
              - link "Trung tâm trợ giúp" [ref=e190] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e191]:
              - link "Các tùy chọn hủy" [ref=e192] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e193]:
              - link "Hỗ trợ khu dân cư" [ref=e194] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e195]:
              - link "Tin cây và an toàn" [ref=e196] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e198]:
        - generic [ref=e199]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e200]:
          - img [ref=e202]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e204]: Hỗ trợ tài nguyên
  - generic [ref=e206]:
    - img "check-circle" [ref=e207]:
      - img [ref=e208]
    - text: Đăng nhập thành công
```

# Test source

```ts
  1  | import { test, expect } from '@fixtures/test_hook';
  2  | 
  3  | test.describe('Dashboard - Booked Rooms', () => {
  4  |     test('BOOKED_01: Should display list of rented rooms', async ({
  5  |         homePage,
  6  |         dashboardPage,
  7  |         page,
  8  |     }) => {
  9  |         await dashboardPage.loginAndGotoDashboard(homePage);
  10 | 
  11 |         // await page.waitForLoadState('networkidle');
  12 | 
  13 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  14 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  15 |         await Promise.race([
  16 |             roomCards.first().waitFor({ state: 'visible', timeout: 15000 }),
  17 |             emptyMessage.first().waitFor({ state: 'visible', timeout: 15000 }),
  18 |         ]).catch(() => {
  19 |             console.log(
  20 |                 '⚠️ Cảnh báo: Chờ UI Dashboard hiển thị bị quá hạn nhưng vẫn tiếp tục kiểm tra assertion.'
  21 |             );
  22 |         });
  23 |         const hasCards = await roomCards
  24 |             .first()
  25 |             .isVisible({ timeout: 5000 })
  26 |             .catch(() => false);
  27 |         const hasEmpty = await emptyMessage.isVisible({ timeout: 3000 }).catch(() => false);
  28 | 
  29 |         expect(
  30 |             hasCards || hasEmpty,
  31 |             'Dashboard phải hiển thị danh sách phòng hoặc thông báo trống'
  32 |         ).toBeTruthy();
  33 | 
  34 |         if (hasCards) {
  35 |             const cardCount = await roomCards.count();
  36 |             expect(cardCount).toBeGreaterThan(0);
  37 |             const firstCardText = await roomCards.first().textContent();
  38 |             expect(firstCardText!.trim().length).toBeGreaterThan(0);
  39 |         }
  40 |     });
  41 | 
  42 |     test('BOOKED_02: Should show message when no rooms rented', async ({
  43 |         page,
  44 |         homePage,
  45 |         dashboardPage,
  46 |     }) => {
  47 |         // Test với tài khoản mới đăng ký (không có phòng đã thuê)
  48 |         // Dùng tài khoản hiện tại nếu chưa có booking
  49 |         await dashboardPage.loginAndGotoDashboard(homePage);
  50 | 
  51 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  52 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  53 | 
  54 |         const cardCount = await roomCards.count();
  55 |         if (cardCount === 0) {
  56 |             await expect(emptyMessage).toBeVisible();
  57 |         } else {
  58 |             // Tài khoản đã có phòng → skip test này
  59 |             test.skip();
  60 |         }
  61 |     });
  62 | 
  63 |     test('BOOKED_03: Should load multiple rooms with pagination', async ({
  64 |         homePage,
  65 |         dashboardPage,
  66 |         page,
  67 |     }) => {
  68 |         // BUG: Phân trang không hoạt động khi có nhiều phòng
  69 |         test.fail();
  70 | 
  71 |         await dashboardPage.loginAndGotoDashboard(homePage);
  72 | 
  73 |         // await page.waitForLoadState('networkidle');
  74 | 
  75 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  76 |         await expect(roomCards.first()).toBeVisible({ timeout: 10000 });
  77 | 
  78 |         const pagination = page.locator('.ant-pagination');
  79 |         const loadMore = page.getByRole('button', { name: /xem thêm|load more/i });
  80 | 
  81 |         const hasPagination = await pagination.isVisible().catch(() => false);
  82 |         const hasLoadMore = await loadMore.isVisible().catch(() => false);
  83 | 
> 84 |         expect(hasPagination || hasLoadMore, 'Phải có phân trang hoặc nút xem thêm').toBeTruthy();
     |                                                                                      ^ Error: Phải có phân trang hoặc nút xem thêm
  85 |     });
  86 | });
  87 | 
```