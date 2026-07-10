# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/review.spec.ts >> User Reviews >> REVIEW_05: Submit comment without selecting stars → still succeeds
- Location: tests/booking/review.spec.ts:110:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo5.cybersoft.edu.vn/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - link "Cyber Logo CyberSoft" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "Cyber Logo" [ref=e6]
        - generic [ref=e7]: CyberSoft
      - button "Open user menu Quyên Cập Nhật" [ref=e9] [cursor=pointer]:
        - generic [ref=e10]: Open user menu
        - img [ref=e11]
        - generic [ref=e12]: Quyên Cập Nhật
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: /
        - listitem [ref=e17]:
          - link "About" [ref=e18] [cursor=pointer]:
            - /url: /
        - listitem [ref=e19]:
          - link "Services" [ref=e20] [cursor=pointer]:
            - /url: /
        - listitem [ref=e21]:
          - link "Pricing" [ref=e22] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e23]:
          - link "Contact" [ref=e24] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e26]:
    - generic [ref=e27]: Your browser does not support the video tag.
    - generic [ref=e31]:
      - heading "Cyberbnb" [level=2] [ref=e34]
      - paragraph [ref=e35]: Belong anywhere
  - generic [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39] [cursor=pointer]:
        - paragraph [ref=e40]: Địa điểm
        - paragraph [ref=e41]: Bạn sắp đi đâu?
      - paragraph [ref=e45] [cursor=pointer]: 06/07/2026 – 13/07/2026
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
```

# Test source

```ts
  19  |         homePage,
  20  |         page,
  21  |     }) => {
  22  |         // BUG: Some reviews do not display full details (missing avatar, stars...)
  23  |         test.fail();
  24  | 
  25  |         await navigateToRoomDetail(homePage, page);
  26  | 
  27  |         const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  28  |         await commentSection.scrollIntoViewIfNeeded();
  29  | 
  30  |         // Get first review
  31  |         const firstReview = commentSection.locator('~ div').first();
  32  |         await expect(firstReview).toBeVisible();
  33  | 
  34  |         // Username must exist
  35  |         const username = firstReview.locator('p').first();
  36  |         await expect(username).toBeVisible();
  37  |         const usernameText = await username.textContent();
  38  |         expect(usernameText?.trim().length).toBeGreaterThan(0);
  39  | 
  40  |         // Time must exist
  41  |         const time = firstReview.locator('time');
  42  |         await expect(time).toBeVisible();
  43  | 
  44  |         // Star rating must exist
  45  |         const stars = firstReview.locator('img[alt="star"], img[src*="star"]');
  46  |         const starCount = await stars.count();
  47  |         expect(starCount).toBeGreaterThan(0);
  48  | 
  49  |         // Comment content must exist
  50  |         const commentText = firstReview.locator('div').last();
  51  |         const content = await commentText.textContent();
  52  |         expect(content?.trim().length).toBeGreaterThan(0);
  53  |     });
  54  | 
  55  |     test('REVIEW_02: Guest user sees "Need login to comment" notification', async ({
  56  |         homePage,
  57  |         page,
  58  |     }) => {
  59  |         await navigateToRoomDetail(homePage, page);
  60  | 
  61  |         const loginAlert = page.getByText(BOOKING.REVIEW.NEED_LOGIN_MSG);
  62  |         await loginAlert.scrollIntoViewIfNeeded();
  63  |         await expect(loginAlert).toBeVisible();
  64  |     });
  65  | 
  66  |     test('REVIEW_03: Logged in user submits comment → success and instantly displays', async ({
  67  |         homePage,
  68  |         page,
  69  |     }) => {
  70  |         await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  71  |         await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
  72  |             timeout: 10000,
  73  |         });
  74  | 
  75  |         await page.goto('/');
  76  |         await navigateToRoomDetail(homePage, page);
  77  | 
  78  |         const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  79  |         await commentSection.scrollIntoViewIfNeeded();
  80  | 
  81  |         // Type comment
  82  |         const commentText = `Auto test review ${Date.now()}`;
  83  |         const commentInput = page.getByPlaceholder('Write something...');
  84  |         await commentInput.scrollIntoViewIfNeeded();
  85  |         await commentInput.fill(commentText);
  86  | 
  87  |         // Submit
  88  |         const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
  89  |         await submitBtn.click();
  90  | 
  91  |         // Comment displays instantly in the list
  92  |         await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
  93  |     });
  94  | 
  95  |     test('REVIEW_04: Room with no comments → displays "No comments"', async ({ page }) => {
  96  |         await page.goto('/room-detail/9999', { waitUntil: 'domcontentloaded', timeout: 30000 });
  97  | 
  98  |         const noBinhLuan = page.getByText(BOOKING.REVIEW.NO_COMMENTS);
  99  |         const hasBinhLuan = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  100 | 
  101 |         await hasBinhLuan.scrollIntoViewIfNeeded();
  102 | 
  103 |         if (await noBinhLuan.isVisible({ timeout: 3000 }).catch(() => false)) {
  104 |             await expect(noBinhLuan).toBeVisible();
  105 |         } else {
  106 |             test.skip(true, 'This room already has comments, need an empty room to test');
  107 |         }
  108 |     });
  109 | 
  110 |     test('REVIEW_05: Submit comment without selecting stars → still succeeds', async ({
  111 |         homePage,
  112 |         page,
  113 |     }) => {
  114 |         await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  115 |         await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
  116 |             timeout: 10000,
  117 |         });
  118 | 
> 119 |         await page.goto('/');
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  120 |         await navigateToRoomDetail(homePage, page);
  121 | 
  122 |         const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  123 |         await commentSection.scrollIntoViewIfNeeded();
  124 | 
  125 |         const commentText = `No star review ${Date.now()}`;
  126 |         const commentInput = page.getByPlaceholder('Write something...');
  127 |         await commentInput.scrollIntoViewIfNeeded();
  128 |         await commentInput.fill(commentText);
  129 | 
  130 |         const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
  131 |         await submitBtn.click();
  132 | 
  133 |         await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
  134 |     });
  135 | 
  136 |     test('REVIEW_06: Extremely long comment → character limit or warning (BUG)', async ({
  137 |         homePage,
  138 |         page,
  139 |     }) => {
  140 |         // BUG: No character limit enforced for reviews
  141 |         test.fail();
  142 | 
  143 |         await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  144 |         await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
  145 |             timeout: 10000,
  146 |         });
  147 | 
  148 |         await page.goto('/');
  149 |         await navigateToRoomDetail(homePage, page);
  150 | 
  151 |         const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  152 |         await commentSection.scrollIntoViewIfNeeded();
  153 | 
  154 |         const longComment = 'A'.repeat(1500);
  155 |         const commentInput = page.getByPlaceholder('Write something...');
  156 |         await commentInput.scrollIntoViewIfNeeded();
  157 |         await commentInput.fill(longComment);
  158 | 
  159 |         const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
  160 |         await submitBtn.click();
  161 | 
  162 |         const warning = page.getByText(/giới hạn|tối đa|max|limit|character/i);
  163 |         await expect(warning).toBeVisible({ timeout: 5000 });
  164 |     });
  165 | 
  166 |     test('REVIEW_07: Comment with only spaces → reject submit (BUG)', async ({
  167 |         homePage,
  168 |         page,
  169 |     }) => {
  170 |         // BUG: App allows submitting comments with only spaces
  171 |         test.fail();
  172 | 
  173 |         await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  174 |         await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
  175 |             timeout: 10000,
  176 |         });
  177 | 
  178 |         await page.goto('/');
  179 |         await navigateToRoomDetail(homePage, page);
  180 | 
  181 |         const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  182 |         await commentSection.scrollIntoViewIfNeeded();
  183 | 
  184 |         const commentInput = page.getByPlaceholder('Write something...');
  185 |         await commentInput.scrollIntoViewIfNeeded();
  186 |         await commentInput.fill('     ');
  187 | 
  188 |         const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
  189 |         await submitBtn.click();
  190 | 
  191 |         const validationMsg = page.getByText(BOOKING.REVIEW.ERR_REQUIRED);
  192 |         await expect(validationMsg).toBeVisible({ timeout: 5000 });
  193 |     });
  194 | 
  195 |     test('REVIEW_08: Comment with special characters, emoji → success', async ({
  196 |         homePage,
  197 |         page,
  198 |     }) => {
  199 |         await homePage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  200 |         await expect(page.getByRole('button', { name: /Open user menu/i })).toBeVisible({
  201 |             timeout: 10000,
  202 |         });
  203 | 
  204 |         await page.goto('/');
  205 |         await navigateToRoomDetail(homePage, page);
  206 | 
  207 |         const commentSection = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING });
  208 |         await commentSection.scrollIntoViewIfNeeded();
  209 | 
  210 |         const commentText = `Special chars test @#$%^& 😀🎉 ${Date.now()}`;
  211 |         const commentInput = page.getByPlaceholder('Write something...');
  212 |         await commentInput.scrollIntoViewIfNeeded();
  213 |         await commentInput.fill(commentText);
  214 | 
  215 |         const submitBtn = page.getByRole('button', { name: BOOKING.REVIEW.BTN_SUBMIT });
  216 |         await submitBtn.click();
  217 | 
  218 |         await expect(page.getByText(commentText)).toBeVisible({ timeout: 5000 });
  219 |     });
```