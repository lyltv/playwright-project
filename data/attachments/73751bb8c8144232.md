# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/avatar.spec.ts >> Dashboard - Update Avatar >> UPDATE_AVATAR_06: Should reject image exceeding file size limit
- Location: tests/dashboard/avatar.spec.ts:91:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/size|kích thước|dung lượng/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/size|kích thước|dung lượng/i)

```

```yaml
- navigation:
  - link "Cyber Logo CyberSoft":
    - /url: /
    - img "Cyber Logo"
    - text: CyberSoft
  - button "Open user menu Quyên Cập Nhật":
    - text: Open user menu
    - img
    - text: Quyên Cập Nhật
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "About":
        - /url: /info-user
    - listitem:
      - link "Services":
        - /url: /info-user
    - listitem:
      - link "Pricing":
        - /url: "#"
    - listitem:
      - link "Contact":
        - /url: "#"
- paragraph: Thông tin người dùng Quyên Cập Nhật
- button "Cập nhật ảnh"
- paragraph: Xác minh danh tính
- paragraph: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
- button "Nhận huy hiệu"
- paragraph: Quyên Cập Nhật đã xác nhận
- paragraph: Địa chỉ email
- paragraph: Xin chào, tôi là Quyên Cập Nhật
- paragraph: Bắt đầu tham gia vào 2023
- button "Chỉnh sửa hồ sơ"
- heading "Phòng đã thuê" [level=1]
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading [level=3]
- list:
  - listitem
  - listitem
  - listitem
- heading "Giới thiệu" [level=2]
- list:
  - listitem:
    - link "Phương thức hoạt động của Cyber":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trang tin tức":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Nhà đầu tư":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber Plus":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber Luxe":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "HotelTonight":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber for Work":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Nhờ có Host, mọi điều đều có thể":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cơ hội nghề nghiệp":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Thư của nhà sáng lập":
      - /url: https://cybersoft.edu.vn
- heading "Cộng đồng" [level=2]
- list:
  - listitem:
    - link "Sự đa đạng và Cảm giác thân thuộc":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tiện nghi phù hợp cho người khuyết tật":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Đối tác liên kết Cyber":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Chỗ ở cho tuyến đầu":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Lượt giới thiệu của khách":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "CyberSoft.edu.vn":
      - /url: https://cybersoft.edu.vn
- heading "Đón tiếp khách" [level=2]
- list:
  - listitem:
    - link "Cho thuê nhà":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tổ chức Trải nghiệm trực tuyến":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tổ chức Trải nghiệm":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Đón tiếp khách có trách nhiệm":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm tài nguyên":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm cộng đồng":
      - /url: https://cybersoft.edu.vn
- heading "Hỗ trợ" [level=2]
- list:
  - listitem:
    - link "Biện pháp ứng phó đại dịch COVID-19":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm trợ giúp":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Các tùy chọn hủy":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Hỗ trợ khu dân cư":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tin cây và an toàn":
      - /url: https://cybersoft.edu.vn
- text: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web. Tiếng Việt (VN)USDHỗ trợ tài nguyên
```

# Test source

```ts
  6   |     test.describe.configure({ mode: 'serial' });
  7   | 
  8   |     test('UPDATE_AVATAR_01: Should open photo update popup', async ({
  9   |         homePage,
  10  |         dashboardPage,
  11  |         page,
  12  |     }) => {
  13  |         await dashboardPage.loginAndGotoDashboard(homePage);
  14  |         await dashboardPage.openAvatarDialog();
  15  | 
  16  |         const dialog = page.getByRole('dialog');
  17  |         await expect(dialog).toBeVisible();
  18  | 
  19  |         // Popup có nút chọn file và nút upload
  20  |         const fileInput = dialog.locator('input[type="file"]');
  21  |         await expect(fileInput).toBeAttached();
  22  |         await expect(dialog.getByRole('button', { name: /Upload/i })).toBeVisible();
  23  |         await expect(dialog.getByRole('button', { name: 'Close' })).toBeVisible();
  24  |     });
  25  | 
  26  |     test('UPDATE_AVATAR_02: Should close photo update popup', async ({
  27  |         homePage,
  28  |         dashboardPage,
  29  |         page,
  30  |     }) => {
  31  |         await dashboardPage.loginAndGotoDashboard(homePage);
  32  |         await dashboardPage.openAvatarDialog();
  33  | 
  34  |         const dialog = page.getByRole('dialog');
  35  |         await expect(dialog).toBeVisible();
  36  | 
  37  |         await dialog.getByRole('button', { name: 'Close' }).click();
  38  |         await expect(dialog).toBeHidden();
  39  |     });
  40  | 
  41  |     test('UPDATE_AVATAR_03: Should upload image in correct format', async ({
  42  |         homePage,
  43  |         dashboardPage,
  44  |         page,
  45  |     }) => {
  46  |         await dashboardPage.loginAndGotoDashboard(homePage);
  47  |         await dashboardPage.openAvatarDialog();
  48  | 
  49  |         const dialog = page.getByRole('dialog');
  50  |         const fileInput = dialog.locator('input[type="file"]');
  51  | 
  52  |         // Upload ảnh JPG hợp lệ
  53  |         const testImagePath = path.resolve(__dirname, '../../test-data/valid-avatar.jpg');
  54  |         await fileInput.setInputFiles(testImagePath);
  55  |         await dialog.getByRole('button', { name: /Upload/i }).click();
  56  | 
  57  |         await expect(page.getByText(/thành công|success/i)).toBeVisible({ timeout: 10000 });
  58  |     });
  59  | 
  60  |     test('UPDATE_AVATAR_04: Should show error when no image selected', async ({
  61  |         homePage,
  62  |         dashboardPage,
  63  |         page,
  64  |     }) => {
  65  |         await dashboardPage.loginAndGotoDashboard(homePage);
  66  |         await dashboardPage.openAvatarDialog();
  67  | 
  68  |         const dialog = page.getByRole('dialog');
  69  |         await dialog.getByRole('button', { name: /Upload/i }).click();
  70  | 
  71  |         await expect(page.getByText(/chọn|select/i)).toBeVisible({ timeout: 5000 });
  72  |     });
  73  | 
  74  |     test.skip('UPDATE_AVATAR_05: Should reject non-image file format', async ({
  75  |         homePage,
  76  |         dashboardPage,
  77  |         page,
  78  |     }) => {
  79  |         await dashboardPage.loginAndGotoDashboard(homePage);
  80  |         await dashboardPage.openAvatarDialog();
  81  |         const dialog = page.getByRole('dialog');
  82  |         const fileInput = dialog.locator('input[type="file"]');
  83  |         const testImagePath = path.resolve(__dirname, '../../test-data/invalid-file.md');
  84  |         await fileInput.setInputFiles(testImagePath);
  85  |         await dialog.getByRole('button', { name: /Upload/i }).click();
  86  |         await expect(page.getByText(/format|định dạng|không hợp lệ/i)).toBeVisible({
  87  |             timeout: 5000,
  88  |         });
  89  |     });
  90  | 
  91  |     test('UPDATE_AVATAR_06: Should reject image exceeding file size limit', async ({
  92  |         homePage,
  93  |         dashboardPage,
  94  |         page,
  95  |     }) => {
  96  |         await dashboardPage.loginAndGotoDashboard(homePage);
  97  |         await dashboardPage.openAvatarDialog();
  98  | 
  99  |         const dialog = page.getByRole('dialog');
  100 |         const fileInput = dialog.locator('input[type="file"]');
  101 | 
  102 |         const testImagePath = path.resolve(__dirname, '../../test-data/large-image.jpg');
  103 |         await fileInput.setInputFiles(testImagePath);
  104 |         await dialog.getByRole('button', { name: /Upload/i }).click();
  105 | 
> 106 |         await expect(page.getByText(/size|kích thước|dung lượng/i)).toBeVisible({ timeout: 5000 });
      |                                                                     ^ Error: expect(locator).toBeVisible() failed
  107 |     });
  108 | 
  109 |     test('UPDATE_AVATAR_07: Should handle rectangular image upload', async ({
  110 |         homePage,
  111 |         dashboardPage,
  112 |         page,
  113 |     }) => {
  114 |         await dashboardPage.loginAndGotoDashboard(homePage);
  115 |         await dashboardPage.openAvatarDialog();
  116 | 
  117 |         const dialog = page.getByRole('dialog');
  118 |         const fileInput = dialog.locator('input[type="file"]');
  119 | 
  120 |         const testImagePath = path.resolve(__dirname, '../../test-data/rectangular-image.jpg');
  121 |         await fileInput.setInputFiles(testImagePath);
  122 |         await dialog.getByRole('button', { name: /Upload/i }).click();
  123 | 
  124 |         await expect(page.getByText(/thành công|success/i)).toBeVisible({ timeout: 10000 });
  125 | 
  126 |         // Avatar không bị overflow
  127 |         const avatar = page
  128 |             .locator('img[alt*="avatar"], img[alt*="Avatar"], .ant-avatar img')
  129 |             .first();
  130 |         if (await avatar.isVisible()) {
  131 |             const box = await avatar.boundingBox();
  132 |             if (box) {
  133 |                 expect(box.width).toBeGreaterThan(0);
  134 |                 expect(box.height).toBeGreaterThan(0);
  135 |             }
  136 |         }
  137 |     });
  138 | 
  139 |     test('UPDATE_AVATAR_08: Should handle multiple upload clicks', async ({
  140 |         homePage,
  141 |         dashboardPage,
  142 |         page,
  143 |     }) => {
  144 |         await dashboardPage.loginAndGotoDashboard(homePage);
  145 |         await dashboardPage.openAvatarDialog();
  146 | 
  147 |         const dialog = page.getByRole('dialog');
  148 |         const fileInput = dialog.locator('input[type="file"]');
  149 | 
  150 |         const testImagePath = path.resolve(__dirname, '../../test-data/valid-avatar.jpg');
  151 |         await fileInput.setInputFiles(testImagePath);
  152 | 
  153 |         const uploadBtn = dialog.getByRole('button', { name: /Upload/i });
  154 |         await Promise.all([uploadBtn.click(), uploadBtn.click({ delay: 50 })]);
  155 | 
  156 |         await page.waitForTimeout(3000);
  157 |         const successToasts = page.getByText(/thành công|success/i);
  158 |         const count = await successToasts.count();
  159 |         expect(count).toBeLessThanOrEqual(1);
  160 |     });
  161 | 
  162 |     test('UPDATE_AVATAR_09: Should persist avatar after page refresh', async ({
  163 |         homePage,
  164 |         dashboardPage,
  165 |         page,
  166 |     }) => {
  167 |         await dashboardPage.loginAndGotoDashboard(homePage);
  168 | 
  169 |         // Lấy src avatar hiện tại — tìm ảnh trên trang dashboard
  170 |         const avatar = page.locator('img').first();
  171 |         await avatar.getAttribute('src');
  172 | 
  173 |         await page.reload();
  174 |         await page.waitForLoadState('domcontentloaded');
  175 | 
  176 |         const avatarAfter = page.locator('img').first();
  177 |         const srcAfter = await avatarAfter.getAttribute('src');
  178 | 
  179 |         // Avatar phải giữ nguyên sau refresh
  180 |         expect(srcAfter).toBeTruthy();
  181 |     });
  182 | });
  183 | 
```