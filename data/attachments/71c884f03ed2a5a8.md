# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/booked.spec.ts >> Dashboard - Booked Rooms >> BOOKED_03: Should load multiple rooms with pagination
- Location: tests/dashboard/booked.spec.ts:42:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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
      - button "Open user menu Ly Le Thi Van" [ref=e9] [cursor=pointer]:
        - generic [ref=e10]: Open user menu
        - img [ref=e11]
        - generic [ref=e12]: Ly Le Thi Van
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: /
        - listitem [ref=e17]:
          - link "About" [ref=e18] [cursor=pointer]:
            - /url: /info-user
        - listitem [ref=e19]:
          - link "Services" [ref=e20] [cursor=pointer]:
            - /url: /info-user
        - listitem [ref=e21]:
          - link "Pricing" [ref=e22] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e23]:
          - link "Contact" [ref=e24] [cursor=pointer]:
            - /url: "#"
  - paragraph [ref=e29]: Thông tin người dùng Ly Le Thi Van
  - generic [ref=e30]:
    - generic [ref=e32]:
      - button "Cập nhật ảnh" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - paragraph [ref=e38]: Xác minh danh tính
        - paragraph [ref=e39]: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
        - button "Nhận huy hiệu" [ref=e40] [cursor=pointer]:
          - generic [ref=e41]: Nhận huy hiệu
        - paragraph [ref=e43]: Ly Le Thi Van đã xác nhận
        - paragraph [ref=e44]:
          - img [ref=e46]
          - text: Địa chỉ email
    - generic [ref=e48]:
      - paragraph [ref=e49]: Xin chào, tôi là Ly Le Thi Van
      - paragraph [ref=e50]: Bắt đầu tham gia vào 2023
      - button "Chỉnh sửa hồ sơ" [ref=e51] [cursor=pointer]
      - heading "Phòng đã thuê" [level=1] [ref=e52]
      - generic [ref=e53]:
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e56] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e59]:
            - generic [ref=e61]:
              - generic: prev
              - generic [ref=e68]: next
              - button "Guest favorite" [ref=e75]:
                - generic [ref=e76]: Guest favorite
              - button [ref=e77]:
                - img [ref=e78]
            - generic [ref=e80]:
              - generic [ref=e81]:
                - generic [ref=e82]:
                  - paragraph [ref=e83]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e84]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e86]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e87]:
                  - generic [ref=e88]: Wifi •
                  - generic [ref=e89]: Máy giặt •
                  - generic [ref=e90]: Tivi •
                  - generic [ref=e91]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e92]:
                - generic [ref=e93]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e96] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e99]:
            - generic [ref=e101]:
              - generic: prev
              - generic [ref=e108]: next
              - button "Guest favorite" [ref=e115]:
                - generic [ref=e116]: Guest favorite
              - button [ref=e117]:
                - img [ref=e118]
            - generic [ref=e120]:
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - paragraph [ref=e123]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e124]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e126]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e127]:
                  - generic [ref=e128]: Wifi •
                  - generic [ref=e129]: Máy giặt •
                  - generic [ref=e130]: Tivi •
                  - generic [ref=e131]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e132]:
                - generic [ref=e133]: $ 28
                - text: / đêm
  - generic [ref=e134]:
    - generic [ref=e135]:
      - generic [ref=e136]:
        - heading "Giới thiệu" [level=2] [ref=e137]
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link "Phương thức hoạt động của Cyber" [ref=e140] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e141]:
            - link "Trang tin tức" [ref=e142] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e143]:
            - link "Nhà đầu tư" [ref=e144] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e145]:
            - link "Cyber Plus" [ref=e146] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e147]:
            - link "Cyber Luxe" [ref=e148] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e149]:
            - link "HotelTonight" [ref=e150] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e151]:
            - link "Cyber for Work" [ref=e152] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e153]:
            - link "Nhờ có Host, mọi điều đều có thể" [ref=e154] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e155]:
            - link "Cơ hội nghề nghiệp" [ref=e156] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e157]:
            - link "Thư của nhà sáng lập" [ref=e158] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e159]:
        - heading "Cộng đồng" [level=2] [ref=e160]
        - list [ref=e161]:
          - listitem [ref=e162]:
            - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e163] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e164]:
            - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e165] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e166]:
            - link "Đối tác liên kết Cyber" [ref=e167] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e168]:
            - link "Chỗ ở cho tuyến đầu" [ref=e169] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e170]:
            - link "Lượt giới thiệu của khách" [ref=e171] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e172]:
            - link "CyberSoft.edu.vn" [ref=e173] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e174]:
        - heading "Đón tiếp khách" [level=2] [ref=e175]
        - list [ref=e176]:
          - listitem [ref=e177]:
            - link "Cho thuê nhà" [ref=e178] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e179]:
            - link "Tổ chức Trải nghiệm trực tuyến" [ref=e180] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e181]:
            - link "Tổ chức Trải nghiệm" [ref=e182] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e183]:
            - link "Đón tiếp khách có trách nhiệm" [ref=e184] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e185]:
            - link "Trung tâm tài nguyên" [ref=e186] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e187]:
            - link "Trung tâm cộng đồng" [ref=e188] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e189]:
        - heading "Hỗ trợ" [level=2] [ref=e190]
        - list [ref=e191]:
          - listitem [ref=e192]:
            - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e193] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e194]:
            - link "Trung tâm trợ giúp" [ref=e195] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e196]:
            - link "Các tùy chọn hủy" [ref=e197] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e198]:
            - link "Hỗ trợ khu dân cư" [ref=e199] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e200]:
            - link "Tin cây và an toàn" [ref=e201] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
    - generic [ref=e203]:
      - generic [ref=e204]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
      - generic [ref=e205]:
        - img [ref=e207]
        - text: Tiếng Việt (VN)
        - text: USD
        - generic [ref=e209]: Hỗ trợ tài nguyên
```

# Test source

```ts
  1  | import { test, expect } from '@fixtures/test_hook';
  2  | 
  3  | test.describe('Dashboard - Booked Rooms', () => {
  4  |     test('BOOKED_01: Should display list of rented rooms', async ({ homePage, dashboardPage, page }) => {
  5  |         await dashboardPage.loginAndGotoDashboard(homePage);
  6  | 
  7  |         await page.waitForLoadState('networkidle');
  8  | 
  9  |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  10 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  11 | 
  12 |         const hasCards = await roomCards.first().isVisible({ timeout: 5000 }).catch(() => false);
  13 |         const hasEmpty = await emptyMessage.isVisible({ timeout: 3000 }).catch(() => false);
  14 | 
  15 |         expect(hasCards || hasEmpty, 'Dashboard phải hiển thị danh sách phòng hoặc thông báo trống').toBeTruthy();
  16 | 
  17 |         if (hasCards) {
  18 |             const cardCount = await roomCards.count();
  19 |             expect(cardCount).toBeGreaterThan(0);
  20 |             const firstCardText = await roomCards.first().textContent();
  21 |             expect(firstCardText!.trim().length).toBeGreaterThan(0);
  22 |         }
  23 |     });
  24 | 
  25 |     test('BOOKED_02: Should show message when no rooms rented', async ({ page, homePage, dashboardPage }) => {
  26 |         // Test với tài khoản mới đăng ký (không có phòng đã thuê)
  27 |         // Dùng tài khoản hiện tại nếu chưa có booking
  28 |         await dashboardPage.loginAndGotoDashboard(homePage);
  29 | 
  30 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  31 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  32 | 
  33 |         const cardCount = await roomCards.count();
  34 |         if (cardCount === 0) {
  35 |             await expect(emptyMessage).toBeVisible();
  36 |         } else {
  37 |             // Tài khoản đã có phòng → skip test này
  38 |             test.skip();
  39 |         }
  40 |     });
  41 | 
  42 |     test('BOOKED_03: Should load multiple rooms with pagination', async ({ homePage, dashboardPage, page }) => {
  43 |         // BUG: Phân trang không hoạt động khi có nhiều phòng
  44 |         test.fail();
  45 | 
  46 |         await dashboardPage.loginAndGotoDashboard(homePage);
  47 | 
> 48 |         await page.waitForLoadState('networkidle');
     |                    ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  49 | 
  50 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  51 |         await expect(roomCards.first()).toBeVisible({ timeout: 10000 });
  52 | 
  53 |         const pagination = page.locator('.ant-pagination');
  54 |         const loadMore = page.getByRole('button', { name: /xem thêm|load more/i });
  55 | 
  56 |         const hasPagination = await pagination.isVisible().catch(() => false);
  57 |         const hasLoadMore = await loadMore.isVisible().catch(() => false);
  58 | 
  59 |         expect(hasPagination || hasLoadMore, 'Phải có phân trang hoặc nút xem thêm').toBeTruthy();
  60 |     });
  61 | });
  62 | 
```