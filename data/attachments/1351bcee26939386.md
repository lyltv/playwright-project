# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/booking.spec.ts >> Booking >> BOOKING_05: Select past date (Yesterday) → must not apply to check-in (BUG: app allows)
- Location: tests/booking/booking.spec.ts:150:9

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByText('Nhận phòng').locator('..').getByText('06-06-2026')
Expected: hidden
Received: visible
Timeout:  3000ms

Call log:
  - Expect "toBeHidden" with timeout 3000ms
  - waiting for getByText('Nhận phòng').locator('..').getByText('06-06-2026')
    10 × locator resolved to <div>06-06-2026</div>
       - unexpected value "visible"

```

```yaml
- text: 06-06-2026
```

# Test source

```ts
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
  142 |         const cleaningFee = page.getByText(BOOKING.BOOKING_FLOW.CLEANING_FEE);
  143 |         const totalEN = page.getByText(BOOKING.BOOKING_FLOW.TOTAL_LABEL);
  144 |         const hasEnglishMix = (await cleaningFee.isVisible()) || (await totalEN.isVisible());
  145 |         expect
  146 |             .soft(hasEnglishMix, 'Booking modal has mixed EN/VN language - inconsistent')
  147 |             .toBeFalsy();
  148 |     });
  149 | 
  150 |     test('BOOKING_05: Select past date (Yesterday) → must not apply to check-in (BUG: app allows)', async ({
  151 |         homePage,
  152 |         page,
  153 |     }) => {
  154 |         // BUG: Date picker allows selecting past dates (Yesterday, Last Week, Last Month)
  155 |         test.fail();
  156 | 
  157 |         await navigateToRoomDetail(homePage, page);
  158 | 
  159 |         const checkinField = page.getByText(HOMEPAGE.SEARCH.CHECKIN).locator('..');
  160 |         await checkinField.scrollIntoViewIfNeeded();
  161 |         await checkinField.click();
  162 | 
  163 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  164 |         await expect(picker).toBeVisible({ timeout: 5000 });
  165 | 
  166 |         // Select "Yesterday" → date picker should not allow past dates
  167 |         await picker.getByText('Yesterday').click();
  168 |         await page.getByText('Close').click();
  169 | 
  170 |         // Past dates should not be applied to check-in
  171 |         const yesterday = new Date();
  172 |         yesterday.setDate(yesterday.getDate() - 1);
  173 |         const dd = String(yesterday.getDate()).padStart(2, '0');
  174 |         const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  175 |         const yyyy = yesterday.getFullYear();
  176 |         const yesterdayFormatted = `${dd}-${mm}-${yyyy}`;
  177 | 
  178 |         const checkinDate = checkinField.getByText(yesterdayFormatted);
> 179 |         await expect(checkinDate).toBeHidden({ timeout: 3000 });
      |                                   ^ Error: expect(locator).toBeHidden() failed
  180 |     });
  181 | 
  182 |     test('BOOKING_06: Increase/decrease guest count using +/– → correct values, within min/max limits', async ({
  183 |         homePage,
  184 |         page,
  185 |     }) => {
  186 |         await navigateToRoomDetail(homePage, page);
  187 | 
  188 |         const incrementBtn = page.getByRole('button', { name: '+' });
  189 |         const decrementBtn = page.getByRole('button', { name: '–' });
  190 |         const guestCount = page.getByText(new RegExp(`\\d+ ${HOMEPAGE.SEARCH.GUEST_SUFFIX}`)).first();
  191 | 
  192 |         await incrementBtn.scrollIntoViewIfNeeded();
  193 | 
  194 |         // Get initial guest count
  195 |         const initialText = await guestCount.textContent();
  196 |         const initialCount = parseInt(initialText?.replace(/\D/g, '') || '1');
  197 | 
  198 |         // Click + to increase
  199 |         await incrementBtn.click();
  200 |         await expect(guestCount).toHaveText(`${initialCount + 1} ${HOMEPAGE.SEARCH.GUEST_SUFFIX}`, { timeout: 3000 });
  201 | 
  202 |         // Click – to decrease back to initial
  203 |         await decrementBtn.click();
  204 |         await expect(guestCount).toHaveText(`${initialCount} ${HOMEPAGE.SEARCH.GUEST_SUFFIX}`, { timeout: 3000 });
  205 | 
  206 |         // Test lower limit: click – until minimum
  207 |         for (let i = 0; i < initialCount; i++) {
  208 |             await decrementBtn.click();
  209 |         }
  210 |         const minText = await guestCount.textContent();
  211 |         const minCount = parseInt(minText?.replace(/\D/g, '') || '0');
  212 |         expect(minCount).toBeGreaterThanOrEqual(1);
  213 | 
  214 |         // Get max guests from room description (e.g. "3 Khách • Phòng Studio")
  215 |         const roomInfo = page.getByText(/\d+ Khách/i).first();
  216 |         const roomInfoText = await roomInfo.textContent();
  217 |         const maxGuest = parseInt(roomInfoText?.match(/(\d+)\s*Khách/i)?.[1] || '10');
  218 | 
  219 |         // Test upper limit: click + multiple times past max
  220 |         for (let i = minCount; i <= maxGuest + 1; i++) {
  221 |             await incrementBtn.click();
  222 |         }
  223 |         const afterMaxText = await guestCount.textContent();
  224 |         const afterMaxCount = parseInt(afterMaxText?.replace(/\D/g, '') || '0');
  225 |         expect(afterMaxCount).toBeLessThanOrEqual(maxGuest);
  226 |     });
  227 | 
  228 |     test('BOOKING_07: Click Check-in → opens date picker, select dates → displays correctly on modal', async ({
  229 |         homePage,
  230 |         page,
  231 |     }) => {
  232 |         await navigateToRoomDetail(homePage, page);
  233 | 
  234 |         // Click on Check-in field (scoped precisely using cursor-pointer class)
  235 |         const checkinField = page
  236 |             .locator('div.cursor-pointer')
  237 |             .filter({ hasText: HOMEPAGE.SEARCH.CHECKIN })
  238 |             .first();
  239 |         await checkinField.scrollIntoViewIfNeeded();
  240 |         await checkinField.click();
  241 | 
  242 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  243 |         await expect(picker).toBeVisible({ timeout: 5000 });
  244 | 
  245 |         // Select "This Week" to set dates
  246 |         await picker.getByText('This Week').click();
  247 | 
  248 |         // Close picker
  249 |         await page.getByText('Close').click();
  250 |         await expect(picker).toBeHidden({ timeout: 3000 });
  251 | 
  252 |         // Checkin and checkout dates must display on booking modal (format DD-MM-YYYY)
  253 |         const checkinDate = checkinField.getByText(/\d{2}-\d{2}-\d{4}/);
  254 |         await expect(checkinDate).toBeVisible();
  255 | 
  256 |         const checkoutField = page
  257 |             .locator('div.cursor-pointer')
  258 |             .filter({ hasText: HOMEPAGE.SEARCH.CHECKOUT })
  259 |             .first();
  260 |         const checkoutDate = checkoutField.getByText(/\d{2}-\d{2}-\d{4}/);
  261 |         await expect(checkoutDate).toBeVisible();
  262 |     });
  263 | });
  264 | 
```