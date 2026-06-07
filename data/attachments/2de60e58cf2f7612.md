# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/location.spec.ts >> Prominent Location >> PROMINENT_LOCATION_01: Should filter room data by location
- Location: tests/homepage/location.spec.ts:4:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[class*="card"], [class*="room"], [class*="listing"]').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('[class*="card"], [class*="room"], [class*="listing"]').first()

```

```yaml
- img
- navigation:
  - link "Cyber Logo CyberSoft":
    - /url: /
    - img "Cyber Logo"
    - text: CyberSoft
  - button:
    - img
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "About":
        - /url: /rooms/ho-chi-minh
    - listitem:
      - link "Services":
        - /url: /rooms/ho-chi-minh
    - listitem:
      - link "Pricing":
        - /url: "#"
    - listitem:
      - link "Contact":
        - /url: "#"
- paragraph: Không tìm thấy phòng phù hợp cho bạn tại Ho Chi Minh !!!
- paragraph: Địa điểm
- paragraph: Bạn sắp đi đâu?
- paragraph: 07/06/2026 – 14/06/2026
- paragraph: Thêm khách
- img "search"
- button "Loại nơi ở"
- button "Giá"
- button "Đặt ngay"
- button "Phòng và phòng ngủ"
- button "Bộ lọc khác"
- heading "Giới thiệu" [level=2]
- list:
  - listitem:
    - link "Phương thức hoạt động của Cyber":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trang tin tức":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Nhà đầu tư":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber Plus":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber Luxe":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "HotelTonight":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber for Work":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Nhờ có Host, mọi điều đều có thể":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cơ hội nghề nghiệp":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Thư của nhà sáng lập":
      - /url: https://cybersoft.edu.vn
- heading "Cộng đồng" [level=2]
- list:
  - listitem:
    - link "Sự đa đạng và Cảm giác thân thuộc":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tiện nghi phù hợp cho người khuyết tật":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Đối tác liên kết Cyber":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Chỗ ở cho tuyến đầu":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Lượt giới thiệu của khách":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "CyberSoft.edu.vn":
      - /url: https://cybersoft.edu.vn
- heading "Đón tiếp khách" [level=2]
- list:
  - listitem:
    - link "Cho thuê nhà":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tổ chức Trải nghiệm trực tuyến":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tổ chức Trải nghiệm":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Đón tiếp khách có trách nhiệm":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm tài nguyên":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm cộng đồng":
      - /url: https://cybersoft.edu.vn
- heading "Hỗ trợ" [level=2]
- list:
  - listitem:
    - link "Biện pháp ứng phó đại dịch COVID-19":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm trợ giúp":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Các tùy chọn hủy":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Hỗ trợ khu dân cư":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tin cây và an toàn":
      - /url: https://cybersoft.edu.vn
- text: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web. Tiếng Việt (VN)USDHỗ trợ tài nguyên
```

# Test source

```ts
  1  | import { test, expect } from '@fixtures/test_hook';
  2  | 
  3  | test.describe('Prominent Location', () => {
  4  |     test('PROMINENT_LOCATION_01: Should filter room data by location', async ({ homePage, page }) => {
  5  |         // Click vào card Hồ Chí Minh
  6  |         await homePage.selectLocation('hcm');
  7  |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  8  | 
  9  |         // Chỉ hiển thị phòng ở HCM
  10 |         expect(page.url()).toContain('ho-chi-minh');
  11 |         const roomCards = page.locator('[class*="card"], [class*="room"], [class*="listing"]');
> 12 |         await expect(roomCards.first()).toBeVisible({ timeout: 10000 });
     |                                         ^ Error: expect(locator).toBeVisible() failed
  13 |     });
  14 | 
  15 |     test('PROMINENT_LOCATION_02: Should navigate to room list on location click', async ({ homePage, page }) => {
  16 |         await homePage.selectLocation('hanoi');
  17 |         await page.waitForURL('**/rooms/ha-noi**', { timeout: 15000 });
  18 | 
  19 |         expect(page.url()).toContain('ha-noi');
  20 |     });
  21 | 
  22 |     test('PROMINENT_LOCATION_03: Should switch between locations', async ({ homePage, page }) => {
  23 |         // Chọn HCM trước
  24 |         await homePage.selectLocation('hcm');
  25 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  26 |         expect(page.url()).toContain('ho-chi-minh');
  27 | 
  28 |         // Quay lại trang chủ
  29 |         await page.goto('/');
  30 |         await page.waitForLoadState('domcontentloaded');
  31 | 
  32 |         // Chọn Hà Nội
  33 |         await homePage.selectLocation('hanoi');
  34 |         await page.waitForURL('**/rooms/ha-noi**', { timeout: 15000 });
  35 |         expect(page.url()).toContain('ha-noi');
  36 |     });
  37 | 
  38 |     test('PROMINENT_LOCATION_04: Should show hover effect on location cards', async ({ page }) => {
  39 |         await page.goto('/');
  40 | 
  41 |         const locationCard = page.locator('a[href*="ho-chi-minh"]').first();
  42 |         await locationCard.scrollIntoViewIfNeeded();
  43 |         await expect(locationCard).toBeVisible();
  44 | 
  45 |         // Lấy style trước hover
  46 |         const styleBefore = await locationCard.evaluate((el) => {
  47 |             const s = window.getComputedStyle(el);
  48 |             return `${s.boxShadow}|${s.transform}|${s.opacity}|${s.filter}`;
  49 |         });
  50 | 
  51 |         // Hover vào card
  52 |         await locationCard.hover();
  53 |         await page.waitForTimeout(300);
  54 | 
  55 |         // Lấy style sau hover — kiểm tra có thay đổi
  56 |         const styleAfter = await locationCard.evaluate((el) => {
  57 |             const s = window.getComputedStyle(el);
  58 |             return `${s.boxShadow}|${s.transform}|${s.opacity}|${s.filter}`;
  59 |         });
  60 | 
  61 |         // Nếu style thay đổi → có hiệu ứng hover
  62 |         // Nếu không thay đổi → card vẫn phải visible (hover không crash)
  63 |         expect(locationCard).toBeVisible();
  64 |     });
  65 | });
  66 | 
```