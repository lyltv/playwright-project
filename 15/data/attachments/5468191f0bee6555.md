# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/room-detail.spec.ts >> Room Detail >> ROOM_04: Click "Hiển thị thêm"/"Ẩn bớt" description (BUG)
- Location: tests/booking/room-detail.spec.ts:138:9

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: getByText(/Hiển thị thêm|Xem thêm/i) resolved to 2 elements:
    1) <span class="underline font-bold cursor-pointer">Hiển thị thêm</span> aka getByText('Hiển thị thêm').first()
    2) <span class="font-bold underline cursor-pointer">Hiển thị thêm</span> aka getByText('Hiển thị thêm').nth(1)

Call log:
  - waiting for getByText(/Hiển thị thêm|Xem thêm/i)

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
  48  |         await expect(page.getByText(`$${room.giaTien}`, { exact: true })).toBeVisible();
  49  | 
  50  |         // Amenities: visible if true, hidden if false
  51  |         const amenityMap: Record<string, string> = {
  52  |             wifi: 'Wifi',
  53  |             tivi: 'Tivi',
  54  |             doXe: 'Bãi đỗ xe',
  55  |             hoBoi: 'Hồ bơi',
  56  |             banUi: 'Bàn ủi',
  57  |             mayGiat: 'Máy giặt',
  58  |         };
  59  |         for (const [key, label] of Object.entries(amenityMap)) {
  60  |             const amenity = page.getByText(label, { exact: true });
  61  |             if (room[key]) {
  62  |                 await expect(amenity).toBeVisible();
  63  |             }
  64  |         }
  65  | 
  66  |         // Review section
  67  |         await expect(page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING })).toBeVisible();
  68  | 
  69  |         // Booking section
  70  |         await expect(page.getByRole('button', { name: BOOKING.ROOM_DETAIL.BTN_BOOK })).toBeVisible();
  71  |     });
  72  | 
  73  |     test('ROOM_02: Access room detail via direct URL → displays correctly', async ({ page }) => {
  74  |         const [apiResponse] = await Promise.all([
  75  |             page.waitForResponse(
  76  |                 (res) => res.url().includes('/api/phong-thue/') && res.status() === 200
  77  |             ),
  78  |             page.goto('/room-detail/1', { waitUntil: 'domcontentloaded', timeout: 30000 }),
  79  |         ]);
  80  | 
  81  |         const body = await apiResponse.json();
  82  |         const room = body.content;
  83  | 
  84  |         // Room name
  85  |         await expect(page.locator('h2').first()).toContainText(room.tenPhong);
  86  | 
  87  |         // Room information
  88  |         await expect(page.getByText(/Khách/i).first()).toBeVisible();
  89  | 
  90  |         // Location link
  91  |         const locationLink = page.locator('a[href*="/rooms/"]').first();
  92  |         await expect(locationLink).toBeVisible();
  93  | 
  94  |         // Image
  95  |         const images = page.locator('img[src*="airbnb"], img[src*="phong"]').first();
  96  |         await expect(images).toBeVisible({ timeout: 10000 });
  97  | 
  98  |         // Description
  99  |         await expect(page.getByText(BOOKING.ROOM_DETAIL.TRANSLATE_BTN)).toBeVisible();
  100 | 
  101 |         // Amenities
  102 |         const amenities = page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.AMENITIES_HEADING });
  103 |         await expect(amenities).toBeVisible();
  104 | 
  105 |         // Booking section
  106 |         await expect(page.getByText(BOOKING.ROOM_DETAIL.NIGHT_LABEL)).toBeVisible();
  107 |         await expect(page.getByRole('button', { name: BOOKING.ROOM_DETAIL.BTN_BOOK })).toBeVisible();
  108 | 
  109 |         // Review section
  110 |         await expect(page.getByRole('heading', { name: BOOKING.ROOM_DETAIL.COMMENTS_HEADING })).toBeVisible();
  111 |     });
  112 | 
  113 |     test('ROOM_03: Click "Dịch sang tiếng Anh" → content is translated (BUG)', async ({
  114 |         homePage,
  115 |         page,
  116 |     }) => {
  117 |         // BUG: Translate button does not actually translate the description content into English
  118 |         test.fail();
  119 | 
  120 |         await navigateToRoomDetail(homePage, page);
  121 | 
  122 |         const descParagraph = page
  123 |             .locator('p')
  124 |             .filter({ hasText: /Tự nhận phòng|Chủ nhà siêu cấp/i })
  125 |             .first();
  126 |         const descBefore = await descParagraph.textContent();
  127 | 
  128 |         const translateBtn = page.getByRole('button', { name: BOOKING.ROOM_DETAIL.TRANSLATE_BTN });
  129 |         await translateBtn.scrollIntoViewIfNeeded();
  130 |         await translateBtn.click();
  131 |         await page.waitForTimeout(2000);
  132 | 
  133 |         // Description content must change to English
  134 |         const descAfter = await descParagraph.textContent();
  135 |         expect(descAfter).not.toBe(descBefore);
  136 |     });
  137 | 
  138 |     test('ROOM_04: Click "Hiển thị thêm"/"Ẩn bớt" description (BUG)', async ({
  139 |         homePage,
  140 |         page,
  141 |     }) => {
  142 |         // BUG: Show more/Show less does not function correctly
  143 |         test.fail();
  144 | 
  145 |         await navigateToRoomDetail(homePage, page);
  146 | 
  147 |         const showMoreBtn = page.getByText(BOOKING.ROOM_DETAIL.SHOW_MORE_BTN);
> 148 |         await showMoreBtn.scrollIntoViewIfNeeded();
      |                           ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: getByText(/Hiển thị thêm|Xem thêm/i) resolved to 2 elements:
  149 | 
  150 |         // Get description height before expanding
  151 |         const description = page
  152 |             .locator('p')
  153 |             .filter({ hasText: /Tự nhận phòng|Chủ nhà siêu cấp/i })
  154 |             .first();
  155 |         const heightBefore = await description.boundingBox().then((b) => b?.height ?? 0);
  156 | 
  157 |         await showMoreBtn.click();
  158 | 
  159 |         // Description must expand (height increases)
  160 |         const heightAfter = await description.boundingBox().then((b) => b?.height ?? 0);
  161 |         expect(heightAfter).toBeGreaterThan(heightBefore);
  162 | 
  163 |         // Click "Ẩn bớt" → description collapses again
  164 |         const showLessBtn = page.getByText(BOOKING.ROOM_DETAIL.SHOW_LESS_BTN);
  165 |         await expect(showLessBtn).toBeVisible();
  166 |         await showLessBtn.click();
  167 | 
  168 |         const heightCollapsed = await description.boundingBox().then((b) => b?.height ?? 0);
  169 |         expect(heightCollapsed).toBeLessThan(heightAfter);
  170 |     });
  171 | 
  172 |     test('ROOM_05: Click image → gallery opens, navigate next/prev, close gallery', async ({
  173 |         homePage,
  174 |         page,
  175 |     }) => {
  176 |         await navigateToRoomDetail(homePage, page);
  177 | 
  178 |         // Click on Ant Image component to open preview
  179 |         await page.locator('.ant-image').first().click();
  180 | 
  181 |         // Preview image displays
  182 |         const previewImage = page.locator('img.ant-image-preview-img');
  183 |         await expect(previewImage).toBeVisible({ timeout: 5000 });
  184 | 
  185 |         // Next/prev button
  186 |         const nextBtn = page.locator('.ant-image-preview-switch-right');
  187 |         if (await nextBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
  188 |             await nextBtn.click();
  189 |             await expect(previewImage).toBeVisible();
  190 |         }
  191 | 
  192 |         // Close preview
  193 |         await page.keyboard.press('Escape');
  194 |         await expect(previewImage).toBeHidden({ timeout: 3000 });
  195 |     });
  196 | });
  197 | 
```