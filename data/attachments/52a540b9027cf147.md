# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/search-filter.spec.ts >> Search Filter >> SEARCH_FILTER_09: Should search by pressing Enter
- Location: tests/homepage/search-filter.spec.ts:122:9

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/rooms/**" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - paragraph [ref=e41]: Hồ Chí Minh
        - paragraph [ref=e45] [cursor=pointer]: 07/06/2026 – 14/06/2026
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
  - img [ref=e227] [cursor=pointer]
```

# Test source

```ts
  36  |     test('SEARCH_FILTER_04: Should reject end date before start date', async ({ page }) => {
  37  |         await page.goto('/');
  38  |         const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  39  |         await dateTrigger.click();
  40  | 
  41  |         const picker = page.locator('.rdrDateRangePickerWrapper');
  42  |         await expect(picker).toBeVisible();
  43  | 
  44  |         // Chọn ngày bắt đầu ở cuối tháng
  45  |         const days = picker.locator('.rdrDay:not(.rdrDayPassive):not(.rdrDayDisabled)');
  46  |         const dayCount = await days.count();
  47  |         if (dayCount > 10) {
  48  |             await days.nth(dayCount - 3).click();
  49  |             await days.nth(2).click();
  50  |         }
  51  | 
  52  |         await expect(page.getByText(/không hợp lệ|invalid/i)).toBeVisible();
  53  |     });
  54  | 
  55  |     test('SEARCH_FILTER_05: Should have disabled past dates', async ({ page }) => {
  56  |         await page.goto('/');
  57  |         const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  58  |         await dateTrigger.click();
  59  | 
  60  |         const picker = page.locator('.rdrDateRangePickerWrapper');
  61  |         await expect(picker).toBeVisible();
  62  | 
  63  |         // Các ngày quá khứ phải bị disabled hoặc passive
  64  |         const disabledDays = picker.locator('.rdrDayDisabled, .rdrDayPassive');
  65  |         const count = await disabledDays.count();
  66  |         expect(count).toBeGreaterThan(0);
  67  |     });
  68  | 
  69  |     test('SEARCH_FILTER_06: Should filter rooms by guest count', async ({ page }) => {
  70  |         await page.goto('/');
  71  | 
  72  |         await page.getByText('Thêm khách').click();
  73  |         await page.waitForTimeout(500);
  74  | 
  75  |         const addBtn = page.locator('button').filter({ hasText: '+' }).first();
  76  |         if (await addBtn.isVisible()) {
  77  |             await addBtn.click();
  78  |             await addBtn.click();
  79  | 
  80  |             const guestDisplay = page.getByText(/\d+ khách/i).first();
  81  |             await expect(guestDisplay).toBeVisible({ timeout: 3000 });
  82  |         }
  83  |     });
  84  | 
  85  |     test('SEARCH_FILTER_07: Should handle excessive guest count', async ({ page }) => {
  86  |         await page.goto('/');
  87  | 
  88  |         await page.getByText('Thêm khách').click();
  89  |         await page.waitForTimeout(500);
  90  | 
  91  |         const addBtn = page.locator('button').filter({ hasText: '+' }).first();
  92  |         if (await addBtn.isVisible()) {
  93  |             for (let i = 0; i < 20; i++) {
  94  |                 await addBtn.click();
  95  |             }
  96  | 
  97  |             const guestDisplay = page.getByText(/(\d+) khách/i).first();
  98  |             await expect(guestDisplay).toBeVisible();
  99  |             const text = await guestDisplay.textContent();
  100 |             const count = parseInt(text?.match(/(\d+)/)?.[1] || '0');
  101 |             expect(count).toBeGreaterThan(0);
  102 |             expect(count).toBeLessThanOrEqual(16);
  103 |         }
  104 |     });
  105 | 
  106 |     test('SEARCH_FILTER_08: Should search by clicking magnifying glass icon', async ({ page }) => {
  107 |         await page.goto('/');
  108 | 
  109 |         await page.getByText('Bạn sắp đi đâu?').click();
  110 |         const popup = page.locator('div.absolute').filter({
  111 |             has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
  112 |         });
  113 |         await expect(popup).toBeVisible();
  114 |         await popup.getByText('Hồ Chí Minh').click();
  115 | 
  116 |         await page.locator('.anticon-search').click();
  117 |         await page.waitForURL('**/rooms/**', { timeout: 15000 });
  118 | 
  119 |         expect(page.url()).toContain('rooms');
  120 |     });
  121 | 
  122 |     test('SEARCH_FILTER_09: Should search by pressing Enter', async ({ page }) => {
  123 |         // BUG: Nhấn Enter không kích hoạt tìm kiếm
  124 |         test.fail();
  125 | 
  126 |         await page.goto('/');
  127 | 
  128 |         await page.getByText('Bạn sắp đi đâu?').click();
  129 |         const popup = page.locator('div.absolute').filter({
  130 |             has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
  131 |         });
  132 |         await expect(popup).toBeVisible();
  133 |         await popup.getByText('Hồ Chí Minh').click();
  134 | 
  135 |         await page.keyboard.press('Enter');
> 136 |         await page.waitForURL('**/rooms/**', { timeout: 15000 });
      |                    ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  137 | 
  138 |         expect(page.url()).toContain('rooms');
  139 |     });
  140 | });
  141 | 
```