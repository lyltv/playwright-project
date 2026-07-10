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
        - generic:
          - button:
            - img
        - list [ref=e16]:
          - listitem [ref=e17]:
            - link "Home" [ref=e18] [cursor=pointer]:
              - /url: /
          - listitem [ref=e19]:
            - link "About" [ref=e20] [cursor=pointer]:
              - /url: /room-detail/1
          - listitem [ref=e21]:
            - link "Services" [ref=e22] [cursor=pointer]:
              - /url: /room-detail/1
          - listitem [ref=e23]:
            - link "Pricing" [ref=e24] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e25]:
            - link "Contact" [ref=e26] [cursor=pointer]:
              - /url: "#"
    - generic [ref=e28]:
      - heading [level=2] [ref=e29]
      - generic [ref=e32]:
        - generic [ref=e34]:
          - img [ref=e35]
          - text: Chủ nhà siêu cấp
        - link "," [ref=e37] [cursor=pointer]:
          - /url: /rooms/
      - generic [ref=e40]:
        - generic [ref=e42] [cursor=pointer]:
          - img "eye" [ref=e43]:
            - img [ref=e44]
          - text: Xem trước
        - generic [ref=e47] [cursor=pointer]:
          - img "eye" [ref=e48]:
            - img [ref=e49]
          - text: Xem trước
        - generic [ref=e52] [cursor=pointer]:
          - img "eye" [ref=e53]:
            - img [ref=e54]
          - text: Xem trước
        - generic [ref=e57] [cursor=pointer]:
          - img "eye" [ref=e58]:
            - img [ref=e59]
          - text: Xem trước
        - generic [ref=e62] [cursor=pointer]:
          - img "eye" [ref=e63]:
            - img [ref=e64]
          - text: Xem trước
      - generic [ref=e72]:
        - generic [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]:
              - heading "Toàn bộ căn hộ. Chủ nhà nnhatsang" [level=3] [ref=e76]
              - paragraph [ref=e77]: Khách • Phòng ngủ • giường • Phòng tắm
            - img [ref=e80]
          - generic [ref=e86]:
            - generic [ref=e87]:
              - img [ref=e88]
              - generic [ref=e91]:
                - heading "Toàn bộ nhà" [level=4] [ref=e92]
                - paragraph [ref=e93]: Bạn sẽ có chung cư cao cấp cho riêng mình.
            - generic [ref=e94]:
              - img [ref=e95]
              - generic [ref=e98]:
                - heading "Vệ sinh tăng cường" [level=4] [ref=e99]
                - paragraph [ref=e100]: Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb. Hiển thị thêm
            - generic [ref=e101]:
              - img [ref=e102]
              - generic [ref=e104]:
                - heading "Phong là Chủ nhà siêu cấp" [level=4] [ref=e105]
                - paragraph [ref=e106]: Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.
            - generic [ref=e107]:
              - img [ref=e108]
              - heading "Miễn phí hủy trong 48 giờ" [level=4] [ref=e112]
          - generic [ref=e114]:
            - button "Dịch sang tiếng Anh" [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: Dịch sang tiếng Anh
              - img [ref=e118]
            - paragraph [ref=e120]
            - text: Hiển thị thêm
        - generic [ref=e124]:
          - generic [ref=e125]:
            - generic [ref=e126]: $/ night
            - generic [ref=e128]:
              - img "star" [ref=e129]:
                - img [ref=e130]
              - generic [ref=e132] [cursor=pointer]: (0) đánh giá
          - generic [ref=e133]:
            - generic [ref=e134]:
              - generic [ref=e135] [cursor=pointer]:
                - generic [ref=e136]: Nhận phòng
                - generic [ref=e137]: 08-06-2026
              - generic [ref=e138] [cursor=pointer]:
                - generic [ref=e139]: Trả phòng
                - generic [ref=e140]: 15-06-2026
            - generic [ref=e141]:
              - generic [ref=e142]: Khách
              - generic [ref=e143]:
                - button "–" [ref=e145] [cursor=pointer]:
                  - generic [ref=e146]: –
                - generic [ref=e147]: 1 khách
                - button "+" [ref=e149] [cursor=pointer]:
                  - generic [ref=e150]: +
          - button "Đặt phòng" [ref=e151] [cursor=pointer]
          - paragraph [ref=e152]: Bạn vẫn chưa bị trừ tiền
          - generic [ref=e153]:
            - paragraph [ref=e154]: $ X 7 nights
            - paragraph [ref=e155]: $ NaN
          - generic [ref=e156]:
            - paragraph [ref=e157]: Cleaning fee
            - paragraph [ref=e158]: $ 8
          - generic [ref=e160]:
            - paragraph [ref=e161]: Total before taxes
            - paragraph [ref=e162]: NaN
      - generic [ref=e163]:
        - heading "Các tiện ích đi kèm" [level=3] [ref=e164]
        - button "Ẩn bớt tiện nghi" [ref=e165] [cursor=pointer]
      - alert [ref=e167]:
        - generic [ref=e169]: Cần đăng nhập để bình luận
      - heading "Bình luận" [level=3] [ref=e171]
      - paragraph [ref=e172]: Chưa có bình luận
    - generic [ref=e173]:
      - generic [ref=e174]:
        - generic [ref=e175]:
          - heading "Giới thiệu" [level=2] [ref=e176]
          - list [ref=e177]:
            - listitem [ref=e178]:
              - link "Phương thức hoạt động của Cyber" [ref=e179] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e180]:
              - link "Trang tin tức" [ref=e181] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e182]:
              - link "Nhà đầu tư" [ref=e183] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e184]:
              - link "Cyber Plus" [ref=e185] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e186]:
              - link "Cyber Luxe" [ref=e187] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e188]:
              - link "HotelTonight" [ref=e189] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e190]:
              - link "Cyber for Work" [ref=e191] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e192]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e193] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e194]:
              - link "Cơ hội nghề nghiệp" [ref=e195] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e196]:
              - link "Thư của nhà sáng lập" [ref=e197] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e198]:
          - heading "Cộng đồng" [level=2] [ref=e199]
          - list [ref=e200]:
            - listitem [ref=e201]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e202] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e203]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e204] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e205]:
              - link "Đối tác liên kết Cyber" [ref=e206] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e207]:
              - link "Chỗ ở cho tuyến đầu" [ref=e208] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e209]:
              - link "Lượt giới thiệu của khách" [ref=e210] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e211]:
              - link "CyberSoft.edu.vn" [ref=e212] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e213]:
          - heading "Đón tiếp khách" [level=2] [ref=e214]
          - list [ref=e215]:
            - listitem [ref=e216]:
              - link "Cho thuê nhà" [ref=e217] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e218]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e219] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e220]:
              - link "Tổ chức Trải nghiệm" [ref=e221] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e222]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e223] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e224]:
              - link "Trung tâm tài nguyên" [ref=e225] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e226]:
              - link "Trung tâm cộng đồng" [ref=e227] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e228]:
          - heading "Hỗ trợ" [level=2] [ref=e229]
          - list [ref=e230]:
            - listitem [ref=e231]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e232] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e233]:
              - link "Trung tâm trợ giúp" [ref=e234] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e235]:
              - link "Các tùy chọn hủy" [ref=e236] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e237]:
              - link "Hỗ trợ khu dân cư" [ref=e238] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e239]:
              - link "Tin cây và an toàn" [ref=e240] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e242]:
        - generic [ref=e243]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e244]:
          - img [ref=e246]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e248]: Hỗ trợ tài nguyên
  - img [ref=e250] [cursor=pointer]
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