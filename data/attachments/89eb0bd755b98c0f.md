# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/search.spec.ts >> Search >> SEARCH_07: Click on search bar → expands, click outside → collapses (BUG)
- Location: tests/homepage/search.spec.ts:153:9

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
  70  |     test('SEARCH_04: Select dates on homepage → search bar updates with correct selected dates', async ({
  71  |         page,
  72  |     }) => {
  73  |         await page.goto('/');
  74  | 
  75  |         // Get default date text before selection
  76  |         const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  77  |         await dateTrigger.click();
  78  | 
  79  |         const picker = page.locator('.rdrDateRangePickerWrapper');
  80  |         await expect(picker).toBeVisible();
  81  | 
  82  |         // Choose "This Week"
  83  |         await picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' }).click();
  84  | 
  85  |         // Date picker is still visible after selecting range
  86  |         await expect(picker).toBeVisible();
  87  | 
  88  |         // Click outside the picker to close
  89  |         await page.locator('body').click({ position: { x: 10, y: 10 }, force: true });
  90  | 
  91  |         // Date on search bar must update (can be same or different depending on the week)
  92  |         // Just verify search bar still displays correct format DD/MM/YYYY
  93  |         const dateSection = page
  94  |             .locator('div')
  95  |             .filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ })
  96  |             .first();
  97  |         await expect(dateSection).toBeVisible();
  98  |     });
  99  | 
  100 |     test('SEARCH_05: Select dates on results page → date picker works normally', async ({
  101 |         homePage,
  102 |         page,
  103 |     }) => {
  104 |         // Go to results page first
  105 |         await homePage.selectLocation('hcm');
  106 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  107 | 
  108 |         // Open date picker on results page
  109 |         const dateTrigger = page.getByText(getSearchDateRangeRegex(1, 7));
  110 |         await dateTrigger.click();
  111 | 
  112 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  113 |         await expect(picker).toBeVisible();
  114 | 
  115 |         // Choose "This Week"
  116 |         await picker.locator('button.rdrStaticRange').filter({ hasText: 'This Week' }).click();
  117 |         await expect(picker).toBeVisible();
  118 |     });
  119 | 
  120 |     test('SEARCH_06: Navigate to room detail → booking modal retains previously selected dates and guest count', async ({
  121 |         homePage,
  122 |         page,
  123 |     }) => {
  124 |         await homePage.selectLocation('hcm');
  125 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  126 | 
  127 |         const roomCard = page.locator('a[href*="room-detail"]').first();
  128 |         await roomCard.waitFor({ state: 'visible', timeout: 10000 });
  129 |         await roomCard.click();
  130 |         await page.waitForURL('**/room-detail/**', { timeout: 15000 });
  131 | 
  132 |         // Checkin date is pre-filled (format DD-MM-YYYY)
  133 |         const checkinField = page
  134 |             .locator('div.cursor-pointer')
  135 |             .filter({ hasText: HOMEPAGE.SEARCH.CHECKIN })
  136 |             .first();
  137 |         await expect(checkinField.getByText(/\d{2}-\d{2}-\d{4}/)).toBeVisible();
  138 | 
  139 |         // Checkout date is pre-filled
  140 |         const checkoutField = page
  141 |             .locator('div.cursor-pointer')
  142 |             .filter({ hasText: HOMEPAGE.SEARCH.CHECKOUT })
  143 |             .first();
  144 |         await expect(checkoutField.getByText(/\d{2}-\d{2}-\d{4}/)).toBeVisible();
  145 | 
  146 |         // Guest count is pre-filled
  147 |         await expect(page.getByText(new RegExp(`\\d+ ${HOMEPAGE.SEARCH.GUEST_SUFFIX}`))).toBeVisible();
  148 | 
  149 |         // Book button is visible
  150 |         await expect(page.getByRole('button', { name: HOMEPAGE.SEARCH.BTN_BOOK })).toBeVisible();
  151 |     });
  152 | 
  153 |     test('SEARCH_07: Click on search bar → expands, click outside → collapses (BUG)', async ({
  154 |         page,
  155 |     }) => {
  156 |         // BUG: Search bar does not collapse when clicking outside
  157 |         test.fail();
  158 | 
  159 |         await page.goto('/');
  160 | 
  161 |         // Click on location field → search bar expands
  162 |         await page.getByText(HOMEPAGE.SEARCH_BAR.LOCATION_LABEL).click();
  163 |         const popup = page.locator('div.absolute').filter({
  164 |             has: page.getByRole('heading', { name: HOMEPAGE.LOCATION_PICKER.TITLE }),
  165 |         });
  166 |         await expect(popup).toBeVisible();
  167 | 
  168 |         // Click outside → search bar should collapse
  169 |         await page.locator('body').click({ position: { x: 10, y: 10 } });
> 170 |         await expect(popup).toBeHidden({ timeout: 3000 });
      |                             ^ Error: expect(locator).toBeHidden() failed
  171 |     });
  172 | 
  173 |     test('SEARCH_08: Apply price filter → results change according to filter (BUG)', async ({
  174 |         homePage,
  175 |         page,
  176 |     }) => {
  177 |         // BUG: Filters do not work correctly on the results page
  178 |         test.fail();
  179 | 
  180 |         // Go to results page
  181 |         await homePage.selectLocation('hcm');
  182 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  183 | 
  184 |         // Get room count before filtering
  185 |         const roomCards = page.locator('[class*="card"]');
  186 |         await roomCards.first().waitFor({ state: 'visible', timeout: 10000 });
  187 |         const countBefore = await roomCards.count();
  188 | 
  189 |         // Click "Price" filter
  190 |         const priceFilter = page.getByRole('button', { name: HOMEPAGE.FILTER_BAR[1] });
  191 |         if (await priceFilter.isVisible()) {
  192 |             await priceFilter.click();
  193 |             await page.waitForTimeout(500);
  194 | 
  195 |             // Select price range if slider/option is available
  196 |             const applyBtn = page.getByRole('button', { name: /áp dụng|apply/i });
  197 |             if (await applyBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
  198 |                 await applyBtn.click();
  199 |             }
  200 |         }
  201 | 
  202 |         // After filtering, results should change or display correctly
  203 |         const countAfter = await roomCards.count();
  204 |         expect(countAfter).toBeGreaterThanOrEqual(0);
  205 |         expect(countAfter).not.toBe(countBefore);
  206 |     });
  207 | 
  208 |     test('SEARCH_09: Results page displays full layout: location banner, search bar, filters, room list', async ({
  209 |         homePage,
  210 |         page,
  211 |     }) => {
  212 |         await homePage.selectLocation('hcm');
  213 |         await page.waitForURL('**/rooms/ho-chi-minh**', { timeout: 15000 });
  214 | 
  215 |         // Banner displays location name
  216 |         await expect(page.getByText(/hồ chí minh|ho chi minh/i).first()).toBeVisible({
  217 |             timeout: 10000,
  218 |         });
  219 | 
  220 |         // Search bar is still displayed on results page
  221 |         await expect(page.getByText(HOMEPAGE.LOCATION_PICKER.PLACEHOLDER)).toBeVisible();
  222 | 
  223 |         // Filter buttons are displayed
  224 |         await expect(page.getByRole('button', { name: HOMEPAGE.FILTER_BAR[0] })).toBeVisible();
  225 | 
  226 |         // Room list is displayed
  227 |         const roomCards = page.locator('[class*="card"]').first();
  228 |         await expect(roomCards).toBeVisible({ timeout: 10000 });
  229 |     });
  230 | });
  231 | 
```