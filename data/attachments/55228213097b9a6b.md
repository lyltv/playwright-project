# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/booking.spec.ts >> Booking >> BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)
- Location: tests/booking/booking.spec.ts:146:9

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
  75  |         await page.locator('#user-dropdown').getByText('Đăng nhập').click();
  76  |         await page.getByPlaceholder('Vui lòng nhập tài khoản').fill(process.env.TEST_EMAIL!);
  77  |         await page.getByPlaceholder('Vui lòng nhập mật khẩu').fill(process.env.TEST_PASSWORD!);
  78  |         await page.getByRole('button', { name: 'Đăng nhập' }).click();
  79  | 
  80  |         const userMenu = page.getByRole('button', { name: /Open user menu/i });
  81  |         await expect(userMenu).toBeVisible({ timeout: 10000 });
  82  | 
  83  |         const bookButton = page.getByRole('button', { name: 'Đặt phòng' });
  84  |         await bookButton.scrollIntoViewIfNeeded();
  85  |         await bookButton.click();
  86  | 
  87  |         const confirmButton = page.getByRole('button', { name: /xác nhận/i });
  88  |         await expect(confirmButton).toBeVisible({ timeout: 5000 });
  89  |         await confirmButton.click();
  90  | 
  91  |         const successMessage = page.getByText(/thêm mới thành công/i);
  92  |         await expect(successMessage).toBeVisible({ timeout: 5000 });
  93  | 
  94  |         // Verify booking xuất hiện trong dashboard
  95  |         await page.goto('/');
  96  |         await page.getByRole('button', { name: /Open user menu/i }).click();
  97  |         await page.locator('#user-dropdown').getByText('Dashboard').click();
  98  |         await page.waitForLoadState('domcontentloaded');
  99  | 
  100 |         const bookedRoom = page.getByText(roomTitle!.trim()).first();
  101 |         await expect(bookedRoom).toBeVisible({ timeout: 10000 });
  102 |     });
  103 | 
  104 |     test('BOOKING_04: Booking modal hiển thị đủ: giá, đánh giá, ngày, khách, nút đặt, tổng tiền, ngôn ngữ nhất quán', async ({
  105 |         homePage,
  106 |         page,
  107 |     }) => {
  108 |         await navigateToRoomDetail(homePage, page);
  109 | 
  110 |         // Giá phòng mỗi đêm ($XX / night)
  111 |         const priceSection = page.getByText('/ night');
  112 |         await priceSection.scrollIntoViewIfNeeded();
  113 |         await expect(priceSection).toBeVisible();
  114 | 
  115 |         // Đánh giá (star + đánh giá)
  116 |         const ratingSection = page.getByText(/đánh giá/i).first();
  117 |         await expect(ratingSection).toBeVisible();
  118 | 
  119 |         // Nhận phòng / Trả phòng date fields
  120 |         await expect(page.getByText('Nhận phòng')).toBeVisible();
  121 |         await expect(page.getByText('Trả phòng')).toBeVisible();
  122 | 
  123 |         // Khách section với +/- buttons
  124 |         await expect(page.getByText('Khách').first()).toBeVisible();
  125 |         await expect(page.getByRole('button', { name: '–' })).toBeVisible();
  126 |         await expect(page.getByRole('button', { name: '+' })).toBeVisible();
  127 | 
  128 |         // Nút Đặt phòng
  129 |         await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
  130 | 
  131 |         // Thông báo chưa trừ tiền
  132 |         await expect(page.getByText('Bạn vẫn chưa bị trừ tiền')).toBeVisible();
  133 | 
  134 |         // Tổng tiền
  135 |         await expect(page.getByText('Total before taxes')).toBeVisible();
  136 | 
  137 |         // Language consistency: "Cleaning fee" và "Total before taxes" là EN trong UI VN
  138 |         const cleaningFee = page.getByText('Cleaning fee');
  139 |         const totalEN = page.getByText('Total before taxes');
  140 |         const hasEnglishMix = (await cleaningFee.isVisible()) || (await totalEN.isVisible());
  141 |         expect
  142 |             .soft(hasEnglishMix, 'Booking modal có mix ngôn ngữ EN/VN — không nhất quán')
  143 |             .toBeFalsy();
  144 |     });
  145 | 
  146 |     test('BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)', async ({
  147 |         homePage,
  148 |         page,
  149 |     }) => {
  150 |         // BUG: Date picker cho phép chọn ngày trong quá khứ (Yesterday, Last Week, Last Month)
  151 |         test.fail();
  152 | 
  153 |         await navigateToRoomDetail(homePage, page);
  154 | 
  155 |         const checkinField = page.getByText('Nhận phòng').locator('..');
  156 |         await checkinField.scrollIntoViewIfNeeded();
  157 |         await checkinField.click();
  158 | 
  159 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  160 |         await expect(picker).toBeVisible({ timeout: 5000 });
  161 | 
  162 |         // Chọn "Yesterday" → date picker không nên cho phép ngày quá khứ
  163 |         await picker.getByText('Yesterday').click();
  164 |         await page.getByText('Close').click();
  165 | 
  166 |         // Ngày quá khứ không được áp dụng vào check-in
  167 |         const yesterday = new Date();
  168 |         yesterday.setDate(yesterday.getDate() - 1);
  169 |         const dd = String(yesterday.getDate()).padStart(2, '0');
  170 |         const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  171 |         const yyyy = yesterday.getFullYear();
  172 |         const yesterdayFormatted = `${dd}-${mm}-${yyyy}`;
  173 | 
  174 |         const checkinDate = checkinField.getByText(yesterdayFormatted);
> 175 |         await expect(checkinDate).toBeHidden({ timeout: 3000 });
      |                                   ^ Error: expect(locator).toBeHidden() failed
  176 |     });
  177 | 
  178 |     test('BOOKING_06: Tăng/giảm số khách bằng +/– → đúng giá trị, không vượt giới hạn min/max', async ({
  179 |         homePage,
  180 |         page,
  181 |     }) => {
  182 |         await navigateToRoomDetail(homePage, page);
  183 | 
  184 |         const incrementBtn = page.getByRole('button', { name: '+' });
  185 |         const decrementBtn = page.getByRole('button', { name: '–' });
  186 |         const guestCount = page.getByText(/\d+ khách/).first();
  187 | 
  188 |         await incrementBtn.scrollIntoViewIfNeeded();
  189 | 
  190 |         // Lấy số khách ban đầu
  191 |         const initialText = await guestCount.textContent();
  192 |         const initialCount = parseInt(initialText?.replace(/\D/g, '') || '1');
  193 | 
  194 |         // Click + để tăng
  195 |         await incrementBtn.click();
  196 |         await expect(guestCount).toHaveText(`${initialCount + 1} khách`, { timeout: 3000 });
  197 | 
  198 |         // Click – để giảm về ban đầu
  199 |         await decrementBtn.click();
  200 |         await expect(guestCount).toHaveText(`${initialCount} khách`, { timeout: 3000 });
  201 | 
  202 |         // Test giới hạn dưới: click – cho đến khi về tối thiểu
  203 |         for (let i = 0; i < initialCount; i++) {
  204 |             await decrementBtn.click();
  205 |         }
  206 |         const minText = await guestCount.textContent();
  207 |         const minCount = parseInt(minText?.replace(/\D/g, '') || '0');
  208 |         expect(minCount).toBeGreaterThanOrEqual(1);
  209 | 
  210 |         // Lấy max khách từ mô tả phòng (VD: "3 Khách • Phòng Studio")
  211 |         const roomInfo = page.getByText(/\d+ Khách/i).first();
  212 |         const roomInfoText = await roomInfo.textContent();
  213 |         const maxGuest = parseInt(roomInfoText?.match(/(\d+)\s*Khách/i)?.[1] || '10');
  214 | 
  215 |         // Test giới hạn trên: click + nhiều lần vượt max
  216 |         for (let i = minCount; i <= maxGuest + 1; i++) {
  217 |             await incrementBtn.click();
  218 |         }
  219 |         const afterMaxText = await guestCount.textContent();
  220 |         const afterMaxCount = parseInt(afterMaxText?.replace(/\D/g, '') || '0');
  221 |         expect(afterMaxCount).toBeLessThanOrEqual(maxGuest);
  222 |     });
  223 | 
  224 |     test('BOOKING_07: Click Nhận phòng → mở date picker, chọn ngày → hiển thị đúng trên modal', async ({
  225 |         homePage,
  226 |         page,
  227 |     }) => {
  228 |         await navigateToRoomDetail(homePage, page);
  229 | 
  230 |         // Click vào ô Nhận phòng (scope chính xác bằng class cursor-pointer)
  231 |         const checkinField = page
  232 |             .locator('div.cursor-pointer')
  233 |             .filter({ hasText: 'Nhận phòng' })
  234 |             .first();
  235 |         await checkinField.scrollIntoViewIfNeeded();
  236 |         await checkinField.click();
  237 | 
  238 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  239 |         await expect(picker).toBeVisible({ timeout: 5000 });
  240 | 
  241 |         // Chọn "This Week" để set ngày
  242 |         await picker.getByText('This Week').click();
  243 | 
  244 |         // Đóng picker
  245 |         await page.getByText('Close').click();
  246 |         await expect(picker).toBeHidden({ timeout: 3000 });
  247 | 
  248 |         // Ngày checkin và checkout phải hiển thị trên booking modal (format DD-MM-YYYY)
  249 |         const checkinDate = checkinField.getByText(/\d{2}-\d{2}-\d{4}/);
  250 |         await expect(checkinDate).toBeVisible();
  251 | 
  252 |         const checkoutField = page
  253 |             .locator('div.cursor-pointer')
  254 |             .filter({ hasText: 'Trả phòng' })
  255 |             .first();
  256 |         const checkoutDate = checkoutField.getByText(/\d{2}-\d{2}-\d{4}/);
  257 |         await expect(checkoutDate).toBeVisible();
  258 |     });
  259 | });
  260 | 
```