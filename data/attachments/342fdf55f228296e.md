# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/room-detail.spec.ts >> Room Detail >> ROOM_04: Click "Hiển thị thêm"/"Ẩn bớt" mô tả phòng (BUG)
- Location: tests/booking/room-detail.spec.ts:134:9

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
  44  |         await expect(infoText).toContainText(`${room.phongTam} Phòng tắm`);
  45  | 
  46  |         // Giá phòng
  47  |         await expect(page.getByText(`$${room.giaTien}`, { exact: true })).toBeVisible();
  48  | 
  49  |         // Tiện ích: hiển thị nếu true, ẩn nếu false
  50  |         const amenityMap: Record<string, string> = {
  51  |             wifi: 'Wifi',
  52  |             tivi: 'Tivi',
  53  |             doXe: 'Bãi đỗ xe',
  54  |             hoBoi: 'Hồ bơi',
  55  |             banUi: 'Bàn ủi',
  56  |             mayGiat: 'Máy giặt',
  57  |         };
  58  |         for (const [key, label] of Object.entries(amenityMap)) {
  59  |             const amenity = page.getByText(label, { exact: true });
  60  |             if (room[key]) {
  61  |                 await expect(amenity).toBeVisible();
  62  |             }
  63  |         }
  64  | 
  65  |         // Section bình luận
  66  |         await expect(page.getByRole('heading', { name: 'Bình luận' })).toBeVisible();
  67  | 
  68  |         // Section booking
  69  |         await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
  70  |     });
  71  | 
  72  |     test('ROOM_02: Truy cập room detail bằng URL trực tiếp → hiển thị đúng', async ({ page }) => {
  73  |         const [apiResponse] = await Promise.all([
  74  |             page.waitForResponse(
  75  |                 (res) => res.url().includes('/api/phong-thue/') && res.status() === 200,
  76  |             ),
  77  |             page.goto('/room-detail/1', { waitUntil: 'domcontentloaded', timeout: 30000 }),
  78  |         ]);
  79  | 
  80  |         const body = await apiResponse.json();
  81  |         const room = body.content;
  82  | 
  83  |         // Tên phòng
  84  |         await expect(page.locator('h2').first()).toContainText(room.tenPhong);
  85  | 
  86  |         // Thông tin phòng
  87  |         await expect(page.getByText(/Khách/i).first()).toBeVisible();
  88  | 
  89  |         // Location link
  90  |         const locationLink = page.locator('a[href*="/rooms/"]').first();
  91  |         await expect(locationLink).toBeVisible();
  92  | 
  93  |         // Ảnh
  94  |         const images = page.locator('img[src*="airbnb"], img[src*="phong"]').first();
  95  |         await expect(images).toBeVisible({ timeout: 10000 });
  96  | 
  97  |         // Mô tả
  98  |         await expect(page.getByText('Dịch sang tiếng Anh')).toBeVisible();
  99  | 
  100 |         // Tiện ích
  101 |         const amenities = page.getByRole('heading', { name: /tiện ích/i });
  102 |         await expect(amenities).toBeVisible();
  103 | 
  104 |         // Booking section
  105 |         await expect(page.getByText('/ night')).toBeVisible();
  106 |         await expect(page.getByRole('button', { name: 'Đặt phòng' })).toBeVisible();
  107 | 
  108 |         // Bình luận section
  109 |         await expect(page.getByRole('heading', { name: 'Bình luận' })).toBeVisible();
  110 |     });
  111 | 
  112 |     test('ROOM_03: Click "Dịch sang tiếng Anh" → nội dung được dịch (BUG)', async ({
  113 |         homePage,
  114 |         page,
  115 |     }) => {
  116 |         // BUG: Nút dịch không thực sự dịch nội dung mô tả sang tiếng Anh
  117 |         test.fail();
  118 | 
  119 |         await navigateToRoomDetail(homePage, page);
  120 | 
  121 |         const descParagraph = page.locator('p').filter({ hasText: /Tự nhận phòng|Chủ nhà siêu cấp/i }).first();
  122 |         const descBefore = await descParagraph.textContent();
  123 | 
  124 |         const translateBtn = page.getByRole('button', { name: 'Dịch sang tiếng Anh' });
  125 |         await translateBtn.scrollIntoViewIfNeeded();
  126 |         await translateBtn.click();
  127 |         await page.waitForTimeout(2000);
  128 | 
  129 |         // Nội dung mô tả phải thay đổi sang tiếng Anh
  130 |         const descAfter = await descParagraph.textContent();
  131 |         expect(descAfter).not.toBe(descBefore);
  132 |     });
  133 | 
  134 |     test('ROOM_04: Click "Hiển thị thêm"/"Ẩn bớt" mô tả phòng (BUG)', async ({
  135 |         homePage,
  136 |         page,
  137 |     }) => {
  138 |         // BUG: Show more/Show less không hoạt động đúng
  139 |         test.fail();
  140 | 
  141 |         await navigateToRoomDetail(homePage, page);
  142 | 
  143 |         const showMoreBtn = page.getByText(/Hiển thị thêm|Xem thêm/i);
> 144 |         await showMoreBtn.scrollIntoViewIfNeeded();
      |                           ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: getByText(/Hiển thị thêm|Xem thêm/i) resolved to 2 elements:
  145 | 
  146 |         // Lấy chiều cao mô tả trước khi expand
  147 |         const description = page.locator('p').filter({ hasText: /Tự nhận phòng|Chủ nhà siêu cấp/i }).first();
  148 |         const heightBefore = await description.boundingBox().then((b) => b?.height ?? 0);
  149 | 
  150 |         await showMoreBtn.click();
  151 | 
  152 |         // Mô tả phải mở rộng (chiều cao tăng)
  153 |         const heightAfter = await description.boundingBox().then((b) => b?.height ?? 0);
  154 |         expect(heightAfter).toBeGreaterThan(heightBefore);
  155 | 
  156 |         // Click "Ẩn bớt" → mô tả thu gọn lại
  157 |         const showLessBtn = page.getByText(/Ẩn bớt|Thu gọn/i);
  158 |         await expect(showLessBtn).toBeVisible();
  159 |         await showLessBtn.click();
  160 | 
  161 |         const heightCollapsed = await description.boundingBox().then((b) => b?.height ?? 0);
  162 |         expect(heightCollapsed).toBeLessThan(heightAfter);
  163 |     });
  164 | 
  165 |     test('ROOM_05: Click ảnh → gallery mở, điều hướng next/prev, đóng gallery', async ({
  166 |         homePage,
  167 |         page,
  168 |     }) => {
  169 |         await navigateToRoomDetail(homePage, page);
  170 | 
  171 |         // Click vào Ant Image component để mở preview
  172 |         await page.locator('.ant-image').first().click();
  173 | 
  174 |         // Ảnh preview hiển thị
  175 |         const previewImage = page.locator('img.ant-image-preview-img');
  176 |         await expect(previewImage).toBeVisible({ timeout: 5000 });
  177 | 
  178 |         // Nút next/prev
  179 |         const nextBtn = page.locator('.ant-image-preview-switch-right');
  180 |         if (await nextBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
  181 |             await nextBtn.click();
  182 |             await expect(previewImage).toBeVisible();
  183 |         }
  184 | 
  185 |         // Đóng preview
  186 |         await page.keyboard.press('Escape');
  187 |         await expect(previewImage).toBeHidden({ timeout: 3000 });
  188 |     });
  189 | });
  190 | 
```