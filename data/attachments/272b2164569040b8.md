# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/search.spec.ts >> Search >> SEARCH_07: Click vào search bar → mở rộng, click ra ngoài → thu gọn (BUG)
- Location: tests/homepage/search.spec.ts:152:9

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('div.absolute').filter({ has: getByRole('heading', { name: 'Tìm kiếm địa điểm' }) })
Expected: hidden
Received: visible
Timeout:  3000ms

Call log:
  - Expect "toBeHidden" with timeout 3000ms
  - waiting for locator('div.absolute').filter({ has: getByRole('heading', { name: 'Tìm kiếm địa điểm' }) })
    10 × locator resolved to <div class="absolute w-[1/2]  top-[70px] left-0 z-50 bg-white rounded-lg p-6 border-2 border-gray-300 overflow-y-auto overscroll-y-auto cursor-auto max-h-[calc(800px-250px)]">…</div>
       - unexpected value "visible"

```

```yaml
- heading "Tìm kiếm địa điểm" [level=1]
- text: None
- paragraph: Hồ Chí Minh
- paragraph: Cần Thơ
- paragraph: Nha Trang
- paragraph: Hà Nội
- paragraph: Phú Quốc
- paragraph: Đà Nẵng
- paragraph: Đà Lạt
- paragraph: Phan Thiết
```

# Test source

```ts
  69  |     test('SEARCH_04: Chọn ngày trên trang chủ → search bar cập nhật đúng ngày đã chọn', async ({
  70  |         page,
  71  |     }) => {
  72  |         await page.goto('/');
  73  | 
  74  |         // Lấy text ngày mặc định trước khi chọn
  75  |         const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  76  |         await dateTrigger.click();
  77  | 
  78  |         const picker = page.locator('.rdrDateRangePickerWrapper');
  79  |         await expect(picker).toBeVisible();
  80  | 
  81  |         // Chọn "This Week"
  82  |         await picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' }).click();
  83  | 
  84  |         // Date picker vẫn hiển thị sau khi chọn range
  85  |         await expect(picker).toBeVisible();
  86  | 
  87  |         // Click ra ngoài picker để đóng
  88  |         await page.locator('body').click({ position: { x: 10, y: 10 }, force: true });
  89  | 
  90  |         // Ngày trên search bar phải cập nhật (có thể giống hoặc khác tùy tuần)
  91  |         // Chỉ cần search bar vẫn hiển thị đúng format ngày DD/MM/YYYY
  92  |         const dateSection = page
  93  |             .locator('div')
  94  |             .filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ })
  95  |             .first();
  96  |         await expect(dateSection).toBeVisible();
  97  |     });
  98  | 
  99  |     test('SEARCH_05: Chọn ngày trên trang kết quả → date picker hoạt động bình thường', async ({
  100 |         homePage,
  101 |         page,
  102 |     }) => {
  103 |         // Vào trang kết quả trước
  104 |         await homePage.selectLocation('hcm');
  105 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  106 | 
  107 |         // Mở date picker trên trang kết quả
  108 |         const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  109 |         await dateTrigger.click();
  110 | 
  111 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  112 |         await expect(picker).toBeVisible();
  113 | 
  114 |         // Chọn "This Week"
  115 |         await picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' }).click();
  116 |         await expect(picker).toBeVisible();
  117 |     });
  118 | 
  119 |     test('SEARCH_06: Vào room detail → booking modal giữ lại ngày, số khách đã chọn trước đó', async ({
  120 |         homePage,
  121 |         page,
  122 |     }) => {
  123 |         await homePage.selectLocation('hcm');
  124 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  125 | 
  126 |         const roomCard = page.locator('a[href*="room-detail"]').first();
  127 |         await roomCard.waitFor({ state: 'visible', timeout: 10000 });
  128 |         await roomCard.click();
  129 |         await page.waitForURL('**/room-detail/**', { timeout: 15000 });
  130 | 
  131 |         // Ngày checkin được pre-fill (format DD-MM-YYYY)
  132 |         const checkinField = page
  133 |             .locator('div.cursor-pointer')
  134 |             .filter({ hasText: 'Nhận phòng' })
  135 |             .first();
  136 |         await expect(checkinField.getByText(/\d{2}-\d{2}-\d{4}/)).toBeVisible();
  137 | 
  138 |         // Ngày checkout được pre-fill
  139 |         const checkoutField = page
  140 |             .locator('div.cursor-pointer')
  141 |             .filter({ hasText: 'Trả phòng' })
  142 |             .first();
  143 |         await expect(checkoutField.getByText(/\d{2}-\d{2}-\d{4}/)).toBeVisible();
  144 | 
  145 |         // Guest count được pre-fill
  146 |         await expect(page.getByText(/\d+ khách/)).toBeVisible();
  147 | 
  148 |         // Nút đặt phòng hiển thị
  149 |         await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
  150 |     });
  151 | 
  152 |     test('SEARCH_07: Click vào search bar → mở rộng, click ra ngoài → thu gọn (BUG)', async ({
  153 |         page,
  154 |     }) => {
  155 |         // BUG: Search bar không collapse khi click ra ngoài
  156 |         test.fail();
  157 | 
  158 |         await page.goto('/');
  159 | 
  160 |         // Click vào location field → search bar mở rộng
  161 |         await page.getByText('Địa điểm').click();
  162 |         const popup = page.locator('div.absolute').filter({
  163 |             has: page.getByRole('heading', { name: 'Tìm kiếm địa điểm' }),
  164 |         });
  165 |         await expect(popup).toBeVisible();
  166 | 
  167 |         // Click ra ngoài → search bar phải thu gọn
  168 |         await page.locator('body').click({ position: { x: 10, y: 10 } });
> 169 |         await expect(popup).toBeHidden({ timeout: 3000 });
      |                             ^ Error: expect(locator).toBeHidden() failed
  170 |     });
  171 | 
  172 |     test('SEARCH_08: Áp dụng filter giá → kết quả thay đổi theo filter (BUG)', async ({
  173 |         homePage,
  174 |         page,
  175 |     }) => {
  176 |         // BUG: Filters không hoạt động đúng trên trang kết quả
  177 |         test.fail();
  178 | 
  179 |         // Vào trang kết quả
  180 |         await homePage.selectLocation('hcm');
  181 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  182 | 
  183 |         // Lấy số phòng trước khi lọc
  184 |         const roomCards = page.locator('[class*="card"]');
  185 |         await roomCards.first().waitFor({ state: 'visible', timeout: 10000 });
  186 |         const countBefore = await roomCards.count();
  187 | 
  188 |         // Click filter "Giá"
  189 |         const priceFilter = page.getByRole('button', { name: 'Giá' });
  190 |         if (await priceFilter.isVisible()) {
  191 |             await priceFilter.click();
  192 |             await page.waitForTimeout(500);
  193 | 
  194 |             // Chọn range giá nếu có slider/option
  195 |             const applyBtn = page.getByRole('button', { name: /áp dụng|apply/i });
  196 |             if (await applyBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
  197 |                 await applyBtn.click();
  198 |             }
  199 |         }
  200 | 
  201 |         // Sau khi lọc, kết quả phải thay đổi hoặc vẫn hiển thị đúng
  202 |         const countAfter = await roomCards.count();
  203 |         expect(countAfter).toBeGreaterThanOrEqual(0);
  204 |         expect(countAfter).not.toBe(countBefore);
  205 |     });
  206 | 
  207 |     test('SEARCH_09: Trang kết quả hiển thị đủ: banner location, search bar, filters, danh sách phòng', async ({
  208 |         homePage,
  209 |         page,
  210 |     }) => {
  211 |         await homePage.selectLocation('hcm');
  212 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  213 | 
  214 |         // Banner hiển thị tên location
  215 |         await expect(page.getByText(/hồ chí minh|ho chi minh/i).first()).toBeVisible({
  216 |             timeout: 10000,
  217 |         });
  218 | 
  219 |         // Search bar vẫn hiển thị trên trang kết quả
  220 |         await expect(page.getByText('Bạn sắp đi đâu?')).toBeVisible();
  221 | 
  222 |         // Filter buttons hiển thị
  223 |         await expect(page.getByRole('button', { name: 'Loại nơi ở' })).toBeVisible();
  224 | 
  225 |         // Danh sách phòng hiển thị
  226 |         const roomCards = page.locator('[class*="card"]').first();
  227 |         await expect(roomCards).toBeVisible({ timeout: 10000 });
  228 |     });
  229 | });
  230 | 
```