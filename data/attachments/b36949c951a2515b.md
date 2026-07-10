# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/booking.spec.ts >> Booking >> BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)
- Location: tests/booking/booking.spec.ts:146:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Nhận phòng').locator('..') resolved to 2 elements:
    1) <div class="w-full">…</div> aka getByText('Dịch sang tiếng Anh Tự nhận')
    2) <div class="cursor-pointer grow p-3 bg-white hover:bg-gray-300 duration-300 rounded-tl-lg border-x-2 border-t-2 border-gray-600">…</div> aka getByText('Nhận phòng08-06-')

Call log:
  - waiting for getByText('Nhận phòng').locator('..')

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
              - /url: /room-detail/1
          - listitem [ref=e17]:
            - link "Services" [ref=e18] [cursor=pointer]:
              - /url: /room-detail/1
          - listitem [ref=e19]:
            - link "Pricing" [ref=e20] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e21]:
            - link "Contact" [ref=e22] [cursor=pointer]:
              - /url: "#"
    - generic [ref=e24]:
      - heading "NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!" [level=2] [ref=e25]
      - generic [ref=e28]:
        - generic [ref=e30]:
          - img [ref=e31]
          - text: Chủ nhà siêu cấp
        - link "Hồ Chí Minh, Việt Nam" [ref=e33] [cursor=pointer]:
          - /url: /rooms/ho-chi-minh
      - generic [ref=e36]:
        - generic [ref=e40] [cursor=pointer]:
          - img "eye" [ref=e41]:
            - img [ref=e42]
          - text: Xem trước
        - generic [ref=e47] [cursor=pointer]:
          - img "eye" [ref=e48]:
            - img [ref=e49]
          - text: Xem trước
        - generic [ref=e54] [cursor=pointer]:
          - img "eye" [ref=e55]:
            - img [ref=e56]
          - text: Xem trước
        - generic [ref=e61] [cursor=pointer]:
          - img "eye" [ref=e62]:
            - img [ref=e63]
          - text: Xem trước
        - generic [ref=e68] [cursor=pointer]:
          - img "eye" [ref=e69]:
            - img [ref=e70]
          - text: Xem trước
      - generic [ref=e78]:
        - generic [ref=e79]:
          - generic [ref=e80]:
            - generic [ref=e81]:
              - heading "Toàn bộ căn hộ. Chủ nhà nnhatsang" [level=3] [ref=e82]
              - paragraph [ref=e83]: 3 Khách • Phòng Studio • 1 Phòng ngủ • 1 giường • 1 Phòng tắm
            - img [ref=e86]
          - generic [ref=e92]:
            - generic [ref=e93]:
              - img [ref=e94]
              - generic [ref=e97]:
                - heading "Toàn bộ nhà" [level=4] [ref=e98]
                - paragraph [ref=e99]: Bạn sẽ có chung cư cao cấp cho riêng mình.
            - generic [ref=e100]:
              - img [ref=e101]
              - generic [ref=e104]:
                - heading "Vệ sinh tăng cường" [level=4] [ref=e105]
                - paragraph [ref=e106]: Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb. Hiển thị thêm
            - generic [ref=e107]:
              - img [ref=e108]
              - generic [ref=e110]:
                - heading "Phong là Chủ nhà siêu cấp" [level=4] [ref=e111]
                - paragraph [ref=e112]: Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.
            - generic [ref=e113]:
              - img [ref=e114]
              - heading "Miễn phí hủy trong 48 giờ" [level=4] [ref=e118]
          - generic [ref=e120]:
            - button "Dịch sang tiếng Anh" [ref=e122] [cursor=pointer]:
              - generic [ref=e123]: Dịch sang tiếng Anh
              - img [ref=e124]
            - paragraph [ref=e126]: Tự nhận phòng Tự nhận phòng bằng khóa thông minh. Dinh Long là Chủ nhà siêu cấp Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.
            - text: Hiển thị thêm
        - generic [ref=e130]:
          - generic [ref=e131]:
            - generic [ref=e132]:
              - generic [ref=e133]: $28
              - text: / night
            - generic [ref=e135]:
              - img "star" [ref=e136]:
                - img [ref=e137]
              - generic [ref=e139] [cursor=pointer]: (0) đánh giá
          - generic [ref=e140]:
            - generic [ref=e141]:
              - generic [ref=e142] [cursor=pointer]:
                - generic [ref=e143]: Nhận phòng
                - generic [ref=e144]: 08-06-2026
              - generic [ref=e145] [cursor=pointer]:
                - generic [ref=e146]: Trả phòng
                - generic [ref=e147]: 15-06-2026
            - generic [ref=e148]:
              - generic [ref=e149]: Khách
              - generic [ref=e150]:
                - button "–" [ref=e152] [cursor=pointer]:
                  - generic [ref=e153]: –
                - generic [ref=e154]: 1 khách
                - button "+" [ref=e156] [cursor=pointer]:
                  - generic [ref=e157]: +
          - button "Đặt phòng" [ref=e158] [cursor=pointer]
          - paragraph [ref=e159]: Bạn vẫn chưa bị trừ tiền
          - generic [ref=e160]:
            - paragraph [ref=e161]: $28 X 7 nights
            - paragraph [ref=e162]: $ 196
          - generic [ref=e163]:
            - paragraph [ref=e164]: Cleaning fee
            - paragraph [ref=e165]: $ 8
          - generic [ref=e167]:
            - paragraph [ref=e168]: Total before taxes
            - paragraph [ref=e169]: "204"
      - generic [ref=e170]:
        - heading "Các tiện ích đi kèm" [level=3] [ref=e171]
        - generic [ref=e172]:
          - generic [ref=e173]:
            - img [ref=e175]
            - text: Wifi
          - generic [ref=e177]:
            - img [ref=e179]
            - text: Tivi
          - generic [ref=e181]:
            - img [ref=e183]
            - text: Bãi đỗ xe
          - generic [ref=e185]:
            - img [ref=e187]
            - text: Bàn ủi
          - generic [ref=e189]:
            - img [ref=e191]
            - text: Hồ bơi
          - generic [ref=e193]:
            - img [ref=e195]
            - text: Máy giặt
        - button "Ẩn bớt tiện nghi" [ref=e197] [cursor=pointer]
      - alert [ref=e199]:
        - generic [ref=e201]: Cần đăng nhập để bình luận
      - heading "Bình luận" [level=3] [ref=e203]
      - paragraph [ref=e204]: Chưa có bình luận
    - generic [ref=e205]:
      - generic [ref=e206]:
        - generic [ref=e207]:
          - heading "Giới thiệu" [level=2] [ref=e208]
          - list [ref=e209]:
            - listitem [ref=e210]:
              - link "Phương thức hoạt động của Cyber" [ref=e211] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e212]:
              - link "Trang tin tức" [ref=e213] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e214]:
              - link "Nhà đầu tư" [ref=e215] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e216]:
              - link "Cyber Plus" [ref=e217] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e218]:
              - link "Cyber Luxe" [ref=e219] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e220]:
              - link "HotelTonight" [ref=e221] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e222]:
              - link "Cyber for Work" [ref=e223] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e224]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e225] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e226]:
              - link "Cơ hội nghề nghiệp" [ref=e227] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e228]:
              - link "Thư của nhà sáng lập" [ref=e229] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e230]:
          - heading "Cộng đồng" [level=2] [ref=e231]
          - list [ref=e232]:
            - listitem [ref=e233]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e234] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e235]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e236] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e237]:
              - link "Đối tác liên kết Cyber" [ref=e238] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e239]:
              - link "Chỗ ở cho tuyến đầu" [ref=e240] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e241]:
              - link "Lượt giới thiệu của khách" [ref=e242] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e243]:
              - link "CyberSoft.edu.vn" [ref=e244] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e245]:
          - heading "Đón tiếp khách" [level=2] [ref=e246]
          - list [ref=e247]:
            - listitem [ref=e248]:
              - link "Cho thuê nhà" [ref=e249] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e250]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e251] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e252]:
              - link "Tổ chức Trải nghiệm" [ref=e253] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e254]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e255] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e256]:
              - link "Trung tâm tài nguyên" [ref=e257] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e258]:
              - link "Trung tâm cộng đồng" [ref=e259] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e260]:
          - heading "Hỗ trợ" [level=2] [ref=e261]
          - list [ref=e262]:
            - listitem [ref=e263]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e264] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e265]:
              - link "Trung tâm trợ giúp" [ref=e266] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e267]:
              - link "Các tùy chọn hủy" [ref=e268] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e269]:
              - link "Hỗ trợ khu dân cư" [ref=e270] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e271]:
              - link "Tin cây và an toàn" [ref=e272] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e274]:
        - generic [ref=e275]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e276]:
          - img [ref=e278]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e280]: Hỗ trợ tài nguyên
  - img [ref=e282] [cursor=pointer]
```

# Test source

```ts
  57  |         await page.getByRole('button', { name: /Open user menu/i }).click();
  58  |         await page.locator('#user-dropdown').getByText('Dashboard').click();
  59  |         await page.waitForLoadState('domcontentloaded');
  60  | 
  61  |         const bookedRoom = page.getByText(roomTitle!.trim()).first();
  62  |         await expect(bookedRoom).toBeVisible({ timeout: 10000 });
  63  |     });
  64  | 
  65  |     test('BOOKING_03: Đăng nhập ngay tại trang room detail → đặt phòng → thành công + xuất hiện trong dashboard', async ({
  66  |         homePage,
  67  |         page,
  68  |     }) => {
  69  |         await navigateToRoomDetail(homePage, page);
  70  | 
  71  |         const roomTitle = await page.locator('h2').first().textContent();
  72  | 
  73  |         // Login từ trang room detail (avatar button là bg-main đầu tiên trong nav)
  74  |         await page.locator('button.bg-main').first().click();
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
> 157 |         await checkinField.click();
      |                            ^ Error: locator.click: Error: strict mode violation: getByText('Nhận phòng').locator('..') resolved to 2 elements:
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
  175 |         await expect(checkinDate).toBeHidden({ timeout: 3000 });
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
```