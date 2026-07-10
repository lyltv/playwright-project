# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/booking.spec.ts >> Booking >> BOOKING_04: Booking modal hiển thị đủ: giá, đánh giá, ngày, khách, nút đặt, tổng tiền, ngôn ngữ nhất quán
- Location: tests/booking/booking.spec.ts:104:9

# Error details

```
Error: Booking modal có mix ngôn ngữ EN/VN — không nhất quán

expect(received).toBeFalsy()

Received: true
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
        - button [ref=e16] [cursor=pointer]:
          - img [ref=e17]
        - list [ref=e19]:
          - listitem [ref=e20]:
            - link "Home" [ref=e21] [cursor=pointer]:
              - /url: /
          - listitem [ref=e22]:
            - link "About" [ref=e23] [cursor=pointer]:
              - /url: /room-detail/1
          - listitem [ref=e24]:
            - link "Services" [ref=e25] [cursor=pointer]:
              - /url: /room-detail/1
          - listitem [ref=e26]:
            - link "Pricing" [ref=e27] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e28]:
            - link "Contact" [ref=e29] [cursor=pointer]:
              - /url: "#"
    - generic [ref=e31]:
      - heading [level=2] [ref=e32]
      - generic [ref=e35]:
        - generic [ref=e37]:
          - img [ref=e38]
          - text: Chủ nhà siêu cấp
        - link "," [ref=e40] [cursor=pointer]:
          - /url: /rooms/
      - generic [ref=e43]:
        - generic [ref=e45] [cursor=pointer]:
          - img "eye" [ref=e46]:
            - img [ref=e47]
          - text: Xem trước
        - generic [ref=e50] [cursor=pointer]:
          - img "eye" [ref=e51]:
            - img [ref=e52]
          - text: Xem trước
        - generic [ref=e55] [cursor=pointer]:
          - img "eye" [ref=e56]:
            - img [ref=e57]
          - text: Xem trước
        - generic [ref=e60] [cursor=pointer]:
          - img "eye" [ref=e61]:
            - img [ref=e62]
          - text: Xem trước
        - generic [ref=e65] [cursor=pointer]:
          - img "eye" [ref=e66]:
            - img [ref=e67]
          - text: Xem trước
      - generic [ref=e75]:
        - generic [ref=e76]:
          - generic [ref=e77]:
            - generic [ref=e78]:
              - heading "Toàn bộ căn hộ. Chủ nhà nnhatsang" [level=3] [ref=e79]
              - paragraph [ref=e80]: Khách • Phòng ngủ • giường • Phòng tắm
            - img [ref=e83]
          - generic [ref=e89]:
            - generic [ref=e90]:
              - img [ref=e91]
              - generic [ref=e94]:
                - heading "Toàn bộ nhà" [level=4] [ref=e95]
                - paragraph [ref=e96]: Bạn sẽ có chung cư cao cấp cho riêng mình.
            - generic [ref=e97]:
              - img [ref=e98]
              - generic [ref=e101]:
                - heading "Vệ sinh tăng cường" [level=4] [ref=e102]
                - paragraph [ref=e103]: Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb. Hiển thị thêm
            - generic [ref=e104]:
              - img [ref=e105]
              - generic [ref=e107]:
                - heading "Phong là Chủ nhà siêu cấp" [level=4] [ref=e108]
                - paragraph [ref=e109]: Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.
            - generic [ref=e110]:
              - img [ref=e111]
              - heading "Miễn phí hủy trong 48 giờ" [level=4] [ref=e115]
          - generic [ref=e117]:
            - button "Dịch sang tiếng Anh" [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: Dịch sang tiếng Anh
              - img [ref=e121]
            - paragraph [ref=e123]
            - text: Hiển thị thêm
        - generic [ref=e127]:
          - generic [ref=e128]:
            - generic [ref=e129]: $/ night
            - generic [ref=e131]:
              - img "star" [ref=e132]:
                - img [ref=e133]
              - generic [ref=e135] [cursor=pointer]: (0) đánh giá
          - generic [ref=e136]:
            - generic [ref=e137]:
              - generic [ref=e138] [cursor=pointer]:
                - generic [ref=e139]: Nhận phòng
                - generic [ref=e140]: 08-06-2026
              - generic [ref=e141] [cursor=pointer]:
                - generic [ref=e142]: Trả phòng
                - generic [ref=e143]: 15-06-2026
            - generic [ref=e144]:
              - generic [ref=e145]: Khách
              - generic [ref=e146]:
                - button "–" [ref=e148] [cursor=pointer]:
                  - generic [ref=e149]: –
                - generic [ref=e150]: 1 khách
                - button "+" [ref=e152] [cursor=pointer]:
                  - generic [ref=e153]: +
          - button "Đặt phòng" [ref=e154] [cursor=pointer]
          - paragraph [ref=e155]: Bạn vẫn chưa bị trừ tiền
          - generic [ref=e156]:
            - paragraph [ref=e157]: $ X 7 nights
            - paragraph [ref=e158]: $ NaN
          - generic [ref=e159]:
            - paragraph [ref=e160]: Cleaning fee
            - paragraph [ref=e161]: $ 8
          - generic [ref=e163]:
            - paragraph [ref=e164]: Total before taxes
            - paragraph [ref=e165]: NaN
      - generic [ref=e166]:
        - heading "Các tiện ích đi kèm" [level=3] [ref=e167]
        - button "Ẩn bớt tiện nghi" [ref=e168] [cursor=pointer]
      - alert [ref=e170]:
        - generic [ref=e172]: Cần đăng nhập để bình luận
      - heading "Bình luận" [level=3] [ref=e174]
      - paragraph [ref=e175]: Chưa có bình luận
    - generic [ref=e176]:
      - generic [ref=e177]:
        - generic [ref=e178]:
          - heading "Giới thiệu" [level=2] [ref=e179]
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Phương thức hoạt động của Cyber" [ref=e182] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e183]:
              - link "Trang tin tức" [ref=e184] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e185]:
              - link "Nhà đầu tư" [ref=e186] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e187]:
              - link "Cyber Plus" [ref=e188] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e189]:
              - link "Cyber Luxe" [ref=e190] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e191]:
              - link "HotelTonight" [ref=e192] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e193]:
              - link "Cyber for Work" [ref=e194] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e195]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e196] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e197]:
              - link "Cơ hội nghề nghiệp" [ref=e198] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e199]:
              - link "Thư của nhà sáng lập" [ref=e200] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e201]:
          - heading "Cộng đồng" [level=2] [ref=e202]
          - list [ref=e203]:
            - listitem [ref=e204]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e205] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e206]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e207] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e208]:
              - link "Đối tác liên kết Cyber" [ref=e209] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e210]:
              - link "Chỗ ở cho tuyến đầu" [ref=e211] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e212]:
              - link "Lượt giới thiệu của khách" [ref=e213] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e214]:
              - link "CyberSoft.edu.vn" [ref=e215] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e216]:
          - heading "Đón tiếp khách" [level=2] [ref=e217]
          - list [ref=e218]:
            - listitem [ref=e219]:
              - link "Cho thuê nhà" [ref=e220] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e221]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e222] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e223]:
              - link "Tổ chức Trải nghiệm" [ref=e224] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e225]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e226] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e227]:
              - link "Trung tâm tài nguyên" [ref=e228] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e229]:
              - link "Trung tâm cộng đồng" [ref=e230] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e231]:
          - heading "Hỗ trợ" [level=2] [ref=e232]
          - list [ref=e233]:
            - listitem [ref=e234]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e235] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e236]:
              - link "Trung tâm trợ giúp" [ref=e237] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e238]:
              - link "Các tùy chọn hủy" [ref=e239] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e240]:
              - link "Hỗ trợ khu dân cư" [ref=e241] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e242]:
              - link "Tin cây và an toàn" [ref=e243] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e245]:
        - generic [ref=e246]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e247]:
          - img [ref=e249]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e251]: Hỗ trợ tài nguyên
  - img [ref=e253] [cursor=pointer]
```

# Test source

```ts
  45  |         await bookButton.scrollIntoViewIfNeeded();
  46  |         await bookButton.click();
  47  | 
  48  |         const confirmButton = page.getByRole('button', { name: /xác nhận/i });
  49  |         await expect(confirmButton).toBeVisible({ timeout: 5000 });
  50  |         await confirmButton.click();
  51  | 
  52  |         const successMessage = page.getByText(/thêm mới thành công/i);
  53  |         await expect(successMessage).toBeVisible({ timeout: 5000 });
  54  | 
  55  |         // Verify booking xuất hiện trong dashboard
  56  |         await page.goto('/');
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
  108 |         // BUG: Hiện thị không đồng nhất
  109 |         test.fail();
  110 |         await navigateToRoomDetail(homePage, page);
  111 | 
  112 |         // Giá phòng mỗi đêm ($XX / night)
  113 |         const priceSection = page.getByText('/ night');
  114 |         await priceSection.scrollIntoViewIfNeeded();
  115 |         await expect(priceSection).toBeVisible();
  116 | 
  117 |         // Đánh giá (star + đánh giá)
  118 |         const ratingSection = page.getByText(/đánh giá/i).first();
  119 |         await expect(ratingSection).toBeVisible();
  120 | 
  121 |         // Nhận phòng / Trả phòng date fields
  122 |         await expect(page.getByText('Nhận phòng')).toBeVisible();
  123 |         await expect(page.getByText('Trả phòng')).toBeVisible();
  124 | 
  125 |         // Khách section với +/- buttons
  126 |         await expect(page.getByText('Khách').first()).toBeVisible();
  127 |         await expect(page.getByRole('button', { name: '–' })).toBeVisible();
  128 |         await expect(page.getByRole('button', { name: '+' })).toBeVisible();
  129 | 
  130 |         // Nút Đặt phòng
  131 |         await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
  132 | 
  133 |         // Thông báo chưa trừ tiền
  134 |         await expect(page.getByText('Bạn vẫn chưa bị trừ tiền')).toBeVisible();
  135 | 
  136 |         // Tổng tiền
  137 |         await expect(page.getByText('Total before taxes')).toBeVisible();
  138 | 
  139 |         // Language consistency: "Cleaning fee" và "Total before taxes" là EN trong UI VN
  140 |         const cleaningFee = page.getByText('Cleaning fee');
  141 |         const totalEN = page.getByText('Total before taxes');
  142 |         const hasEnglishMix = (await cleaningFee.isVisible()) || (await totalEN.isVisible());
  143 |         expect
  144 |             .soft(hasEnglishMix, 'Booking modal có mix ngôn ngữ EN/VN — không nhất quán')
> 145 |             .toBeFalsy();
      |              ^ Error: Booking modal có mix ngôn ngữ EN/VN — không nhất quán
  146 |     });
  147 | 
  148 |     test('BOOKING_05: Chọn ngày quá khứ (Yesterday) → không được áp dụng vào check-in (BUG: app cho phép)', async ({
  149 |         homePage,
  150 |         page,
  151 |     }) => {
  152 |         // BUG: Date picker cho phép chọn ngày trong quá khứ (Yesterday, Last Week, Last Month)
  153 |         test.fail();
  154 | 
  155 |         await navigateToRoomDetail(homePage, page);
  156 | 
  157 |         const checkinField = page.getByText('Nhận phòng').locator('..');
  158 |         await checkinField.scrollIntoViewIfNeeded();
  159 |         await checkinField.click();
  160 | 
  161 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  162 |         await expect(picker).toBeVisible({ timeout: 5000 });
  163 | 
  164 |         // Chọn "Yesterday" → date picker không nên cho phép ngày quá khứ
  165 |         await picker.getByText('Yesterday').click();
  166 |         await page.getByText('Close').click();
  167 | 
  168 |         // Ngày quá khứ không được áp dụng vào check-in
  169 |         const yesterday = new Date();
  170 |         yesterday.setDate(yesterday.getDate() - 1);
  171 |         const dd = String(yesterday.getDate()).padStart(2, '0');
  172 |         const mm = String(yesterday.getMonth() + 1).padStart(2, '0');
  173 |         const yyyy = yesterday.getFullYear();
  174 |         const yesterdayFormatted = `${dd}-${mm}-${yyyy}`;
  175 | 
  176 |         const checkinDate = checkinField.getByText(yesterdayFormatted);
  177 |         await expect(checkinDate).toBeHidden({ timeout: 3000 });
  178 |     });
  179 | 
  180 |     test('BOOKING_06: Tăng/giảm số khách bằng +/– → đúng giá trị, không vượt giới hạn min/max', async ({
  181 |         homePage,
  182 |         page,
  183 |     }) => {
  184 |         await navigateToRoomDetail(homePage, page);
  185 | 
  186 |         const incrementBtn = page.getByRole('button', { name: '+' });
  187 |         const decrementBtn = page.getByRole('button', { name: '–' });
  188 |         const guestCount = page.getByText(/\d+ khách/).first();
  189 | 
  190 |         await incrementBtn.scrollIntoViewIfNeeded();
  191 | 
  192 |         // Lấy số khách ban đầu
  193 |         const initialText = await guestCount.textContent();
  194 |         const initialCount = parseInt(initialText?.replace(/\D/g, '') || '1');
  195 | 
  196 |         // Click + để tăng
  197 |         await incrementBtn.click();
  198 |         await expect(guestCount).toHaveText(`${initialCount + 1} khách`, { timeout: 3000 });
  199 | 
  200 |         // Click – để giảm về ban đầu
  201 |         await decrementBtn.click();
  202 |         await expect(guestCount).toHaveText(`${initialCount} khách`, { timeout: 3000 });
  203 | 
  204 |         // Test giới hạn dưới: click – cho đến khi về tối thiểu
  205 |         for (let i = 0; i < initialCount; i++) {
  206 |             await decrementBtn.click();
  207 |         }
  208 |         const minText = await guestCount.textContent();
  209 |         const minCount = parseInt(minText?.replace(/\D/g, '') || '0');
  210 |         expect(minCount).toBeGreaterThanOrEqual(1);
  211 | 
  212 |         // Lấy max khách từ mô tả phòng (VD: "3 Khách • Phòng Studio")
  213 |         const roomInfo = page.getByText(/\d+ Khách/i).first();
  214 |         const roomInfoText = await roomInfo.textContent();
  215 |         const maxGuest = parseInt(roomInfoText?.match(/(\d+)\s*Khách/i)?.[1] || '10');
  216 | 
  217 |         // Test giới hạn trên: click + nhiều lần vượt max
  218 |         for (let i = minCount; i <= maxGuest + 1; i++) {
  219 |             await incrementBtn.click();
  220 |         }
  221 |         const afterMaxText = await guestCount.textContent();
  222 |         const afterMaxCount = parseInt(afterMaxText?.replace(/\D/g, '') || '0');
  223 |         expect(afterMaxCount).toBeLessThanOrEqual(maxGuest);
  224 |     });
  225 | 
  226 |     test('BOOKING_07: Click Nhận phòng → mở date picker, chọn ngày → hiển thị đúng trên modal', async ({
  227 |         homePage,
  228 |         page,
  229 |     }) => {
  230 |         await navigateToRoomDetail(homePage, page);
  231 | 
  232 |         // Click vào ô Nhận phòng (scope chính xác bằng class cursor-pointer)
  233 |         const checkinField = page
  234 |             .locator('div.cursor-pointer')
  235 |             .filter({ hasText: 'Nhận phòng' })
  236 |             .first();
  237 |         await checkinField.scrollIntoViewIfNeeded();
  238 |         await checkinField.click();
  239 | 
  240 |         const picker = page.locator('.rdrDateRangePickerWrapper');
  241 |         await expect(picker).toBeVisible({ timeout: 5000 });
  242 | 
  243 |         // Chọn "This Week" để set ngày
  244 |         await picker.getByText('This Week').click();
  245 | 
```