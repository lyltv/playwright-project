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
                - generic [ref=e140]: 07-06-2026
              - generic [ref=e141] [cursor=pointer]:
                - generic [ref=e142]: Trả phòng
                - generic [ref=e143]: 14-06-2026
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
  43  | 
  44  |         const bookButton = page.getByRole('button', { name: 'Đặt phòng' });
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
> 143 |             .toBeFalsy();
      |              ^ Error: Booking modal có mix ngôn ngữ EN/VN — không nhất quán
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
```