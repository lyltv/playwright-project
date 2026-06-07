# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/booking.spec.ts >> Booking >> BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)
- Location: tests/booking/booking.spec.ts:139:9

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByText('Nhận phòng').locator('..').getByText('05-06-2026')
Expected: hidden
Received: visible
Timeout:  3000ms

Call log:
  - Expect "toBeHidden" with timeout 3000ms
  - waiting for getByText('Nhận phòng').locator('..').getByText('05-06-2026')
    10 × locator resolved to <div>05-06-2026</div>
       - unexpected value "visible"

```

```yaml
- text: 05-06-2026
```

# Test source

```ts
  65  |         const roomTitle = await page.locator('h2').first().textContent();
  66  | 
  67  |         // Login từ trang room detail (avatar button là bg-main đầu tiên trong nav)
  68  |         await page.locator('button.bg-main').first().click();
  69  |         await page.locator('#user-dropdown').getByText('Đăng nhập').click();
  70  |         await page.getByPlaceholder('Vui lòng nhập tài khoản').fill(process.env.TEST_EMAIL!);
  71  |         await page.getByPlaceholder('Vui lòng nhập mật khẩu').fill(process.env.TEST_PASSWORD!);
  72  |         await page.getByRole('button', { name: 'Đăng nhập' }).click();
  73  | 
  74  |         const userMenu = page.getByRole('button', { name: /Open user menu/i });
  75  |         await expect(userMenu).toBeVisible({ timeout: 10000 });
  76  | 
  77  |         const bookButton = page.getByRole('button', { name: 'Đặt phòng' });
  78  |         await bookButton.scrollIntoViewIfNeeded();
  79  |         await bookButton.click();
  80  | 
  81  |         const confirmButton = page.getByRole('button', { name: /xác nhận/i });
  82  |         await expect(confirmButton).toBeVisible({ timeout: 5000 });
  83  |         await confirmButton.click();
  84  | 
  85  |         const successMessage = page.getByText(/thêm mới thành công/i);
  86  |         await expect(successMessage).toBeVisible({ timeout: 5000 });
  87  | 
  88  |         // Verify booking xuất hiện trong dashboard
  89  |         await page.goto('/');
  90  |         await page.getByRole('button', { name: /Open user menu/i }).click();
  91  |         await page.locator('#user-dropdown').getByText('Dashboard').click();
  92  |         await page.waitForLoadState('domcontentloaded');
  93  | 
  94  |         const bookedRoom = page.getByText(roomTitle!.trim()).first();
  95  |         await expect(bookedRoom).toBeVisible({ timeout: 10000 });
  96  |     });
  97  | 
  98  |     test('BOOKING_04: Booking modal hiển thị đủ: giá, đánh giá, ngày, khách, nút đặt, tổng tiền, ngôn ngữ nhất quán', async ({
  99  |         homePage,
  100 |         page,
  101 |     }) => {
  102 |         await navigateToRoomDetail(homePage, page);
  103 | 
  104 |         // Giá phòng mỗi đêm ($XX / night)
  105 |         const priceSection = page.getByText('/ night');
  106 |         await priceSection.scrollIntoViewIfNeeded();
  107 |         await expect(priceSection).toBeVisible();
  108 | 
  109 |         // Đánh giá (star + đánh giá)
  110 |         const ratingSection = page.getByText(/đánh giá/i).first();
  111 |         await expect(ratingSection).toBeVisible();
  112 | 
  113 |         // Nhận phòng / Trả phòng date fields
  114 |         await expect(page.getByText('Nhận phòng')).toBeVisible();
  115 |         await expect(page.getByText('Trả phòng')).toBeVisible();
  116 | 
  117 |         // Khách section với +/- buttons
  118 |         await expect(page.getByText('Khách').first()).toBeVisible();
  119 |         await expect(page.getByRole('button', { name: '–' })).toBeVisible();
  120 |         await expect(page.getByRole('button', { name: '+' })).toBeVisible();
  121 | 
  122 |         // Nút Đặt phòng
  123 |         await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
  124 | 
  125 |         // Thông báo chưa trừ tiền
  126 |         await expect(page.getByText('Bạn vẫn chưa bị trừ tiền')).toBeVisible();
  127 | 
  128 |         // Tổng tiền
  129 |         await expect(page.getByText('Total before taxes')).toBeVisible();
  130 | 
  131 |         // Language consistency: "Cleaning fee" và "Total before taxes" là EN trong UI VN
  132 |         const cleaningFee = page.getByText('Cleaning fee');
  133 |         const totalEN = page.getByText('Total before taxes');
  134 |         const hasEnglishMix =
  135 |             (await cleaningFee.isVisible()) || (await totalEN.isVisible());
  136 |         expect.soft(hasEnglishMix, 'Booking modal có mix ngôn ngữ EN/VN — không nhất quán').toBeFalsy();
  137 |     });
  138 | 
  139 |     test('BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)', async ({ homePage, page }) => {
  140 |         // BUG: Date picker cho phép chọn ngày trong quá khứ (Yesterday, Last Week, Last Month)
  141 |         test.fail();
  142 | 
  143 |         await navigateToRoomDetail(homePage, page);
  144 | 
  145 |         const checkinField = page.getByText('Nhận phòng').locator('..');
  146 |         await checkinField.scrollIntoViewIfNeeded();
  147 |         await checkinField.click();
  148 | 
  149 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  150 |         await expect(picker).toBeVisible({ timeout: 5000 });
  151 | 
  152 |         // Chọn "Yesterday" → date picker không nên cho phép ngày quá khứ
  153 |         await picker.getByText('Yesterday').click();
  154 |         await page.getByText('Close').click();
  155 | 
  156 |         // Ngày quá khứ không được áp dụng vào check-in
  157 |         const yesterday = new Date();
  158 |         yesterday.setDate(yesterday.getDate() - 1);
  159 |         const dd = String(yesterday.getDate()).padStart(2, '0');
  160 |         const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  161 |         const yyyy = yesterday.getFullYear();
  162 |         const yesterdayFormatted = `${dd}-${mm}-${yyyy}`;
  163 | 
  164 |         const checkinDate = checkinField.getByText(yesterdayFormatted);
> 165 |         await expect(checkinDate).toBeHidden({ timeout: 3000 });
      |                                   ^ Error: expect(locator).toBeHidden() failed
  166 |     });
  167 | 
  168 |     test('BOOKING_06: Tăng/giảm số khách bằng +/– → đúng giá trị, không vượt giới hạn min/max', async ({ homePage, page }) => {
  169 |         await navigateToRoomDetail(homePage, page);
  170 | 
  171 |         const incrementBtn = page.getByRole('button', { name: '+' });
  172 |         const decrementBtn = page.getByRole('button', { name: '–' });
  173 |         const guestCount = page.getByText(/\d+ khách/).first();
  174 | 
  175 |         await incrementBtn.scrollIntoViewIfNeeded();
  176 | 
  177 |         // Lấy số khách ban đầu
  178 |         const initialText = await guestCount.textContent();
  179 |         const initialCount = parseInt(initialText?.replace(/\D/g, '') || '1');
  180 | 
  181 |         // Click + để tăng
  182 |         await incrementBtn.click();
  183 |         await expect(guestCount).toHaveText(`${initialCount + 1} khách`, { timeout: 3000 });
  184 | 
  185 |         // Click – để giảm về ban đầu
  186 |         await decrementBtn.click();
  187 |         await expect(guestCount).toHaveText(`${initialCount} khách`, { timeout: 3000 });
  188 | 
  189 |         // Test giới hạn dưới: click – cho đến khi về tối thiểu
  190 |         for (let i = 0; i < initialCount; i++) {
  191 |             await decrementBtn.click();
  192 |         }
  193 |         const minText = await guestCount.textContent();
  194 |         const minCount = parseInt(minText?.replace(/\D/g, '') || '0');
  195 |         expect(minCount).toBeGreaterThanOrEqual(1);
  196 | 
  197 |         // Lấy max khách từ mô tả phòng (VD: "3 Khách • Phòng Studio")
  198 |         const roomInfo = page.getByText(/\d+ Khách/i).first();
  199 |         const roomInfoText = await roomInfo.textContent();
  200 |         const maxGuest = parseInt(roomInfoText?.match(/(\d+)\s*Khách/i)?.[1] || '10');
  201 | 
  202 |         // Test giới hạn trên: click + nhiều lần vượt max
  203 |         for (let i = minCount; i <= maxGuest + 1; i++) {
  204 |             await incrementBtn.click();
  205 |         }
  206 |         const afterMaxText = await guestCount.textContent();
  207 |         const afterMaxCount = parseInt(afterMaxText?.replace(/\D/g, '') || '0');
  208 |         expect(afterMaxCount).toBeLessThanOrEqual(maxGuest);
  209 |     });
  210 | 
  211 |     test('BOOKING_07: Click Nhận phòng → mở date picker, chọn ngày → hiển thị đúng trên modal', async ({
  212 |         homePage,
  213 |         page,
  214 |     }) => {
  215 |         await navigateToRoomDetail(homePage, page);
  216 | 
  217 |         // Click vào ô Nhận phòng (scope chính xác bằng class cursor-pointer)
  218 |         const checkinField = page
  219 |             .locator('div.cursor-pointer')
  220 |             .filter({ hasText: 'Nhận phòng' })
  221 |             .first();
  222 |         await checkinField.scrollIntoViewIfNeeded();
  223 |         await checkinField.click();
  224 | 
  225 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  226 |         await expect(picker).toBeVisible({ timeout: 5000 });
  227 | 
  228 |         // Chọn "This Week" để set ngày
  229 |         await picker.getByText('This Week').click();
  230 | 
  231 |         // Đóng picker
  232 |         await page.getByText('Close').click();
  233 |         await expect(picker).toBeHidden({ timeout: 3000 });
  234 | 
  235 |         // Ngày checkin và checkout phải hiển thị trên booking modal (format DD-MM-YYYY)
  236 |         const checkinDate = checkinField.getByText(/\d{2}-\d{2}-\d{4}/);
  237 |         await expect(checkinDate).toBeVisible();
  238 | 
  239 |         const checkoutField = page
  240 |             .locator('div.cursor-pointer')
  241 |             .filter({ hasText: 'Trả phòng' })
  242 |             .first();
  243 |         const checkoutDate = checkoutField.getByText(/\d{2}-\d{2}-\d{4}/);
  244 |         await expect(checkoutDate).toBeVisible();
  245 |     });
  246 | });
  247 | 
```