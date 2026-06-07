# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/profile.spec.ts >> Dashboard - Update Profile >> UPDATE_PROFILE_03: Should update profile successfully
- Location: tests/dashboard/profile.spec.ts:42:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 30000ms exceeded.
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
        - button "Open user menu Ly Le Thi Van" [ref=e9] [cursor=pointer]:
          - generic [ref=e10]: Open user menu
          - img [ref=e11]
          - generic [ref=e12]: Ly Le Thi Van
        - list [ref=e14]:
          - listitem [ref=e15]:
            - link "Home" [ref=e16] [cursor=pointer]:
              - /url: /
          - listitem [ref=e17]:
            - link "About" [ref=e18] [cursor=pointer]:
              - /url: /info-user
          - listitem [ref=e19]:
            - link "Services" [ref=e20] [cursor=pointer]:
              - /url: /info-user
          - listitem [ref=e21]:
            - link "Pricing" [ref=e22] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e23]:
            - link "Contact" [ref=e24] [cursor=pointer]:
              - /url: "#"
    - paragraph [ref=e29]: Thông tin người dùng Ly Le Thi Van
    - generic [ref=e30]:
      - generic [ref=e32]:
        - button "Cập nhật ảnh" [ref=e35] [cursor=pointer]
        - generic [ref=e36]:
          - paragraph [ref=e38]: Xác minh danh tính
          - paragraph [ref=e39]: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
          - button "Nhận huy hiệu" [ref=e40] [cursor=pointer]:
            - generic [ref=e41]: Nhận huy hiệu
          - paragraph [ref=e43]: Ly Le Thi Van đã xác nhận
          - paragraph [ref=e44]:
            - img [ref=e46]
            - text: Địa chỉ email
      - generic [ref=e48]:
        - paragraph [ref=e49]: Xin chào, tôi là Ly Le Thi Van
        - paragraph [ref=e50]: Bắt đầu tham gia vào 2023
        - button "Chỉnh sửa hồ sơ" [ref=e51] [cursor=pointer]
        - heading "Phòng đã thuê" [level=1] [ref=e52]
        - generic [ref=e53]:
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e56] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e59]:
              - generic [ref=e61]:
                - generic: prev
                - generic [ref=e68]: next
                - button "Guest favorite" [ref=e75]:
                  - generic [ref=e76]: Guest favorite
                - button [ref=e77]:
                  - img [ref=e78]
              - generic [ref=e80]:
                - generic [ref=e81]:
                  - generic [ref=e82]:
                    - paragraph [ref=e83]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e84]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e86]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e87]:
                    - generic [ref=e88]: Wifi •
                    - generic [ref=e89]: Máy giặt •
                    - generic [ref=e90]: Tivi •
                    - generic [ref=e91]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e92]:
                  - generic [ref=e93]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e96] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e99]:
              - generic [ref=e101]:
                - generic: prev
                - generic [ref=e108]: next
                - button "Guest favorite" [ref=e115]:
                  - generic [ref=e116]: Guest favorite
                - button [ref=e117]:
                  - img [ref=e118]
              - generic [ref=e120]:
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - paragraph [ref=e123]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e124]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e126]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e127]:
                    - generic [ref=e128]: Wifi •
                    - generic [ref=e129]: Máy giặt •
                    - generic [ref=e130]: Tivi •
                    - generic [ref=e131]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e132]:
                  - generic [ref=e133]: $ 28
                  - text: / đêm
    - generic [ref=e134]:
      - generic [ref=e135]:
        - generic [ref=e136]:
          - heading "Giới thiệu" [level=2] [ref=e137]
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Phương thức hoạt động của Cyber" [ref=e140] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e141]:
              - link "Trang tin tức" [ref=e142] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e143]:
              - link "Nhà đầu tư" [ref=e144] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e145]:
              - link "Cyber Plus" [ref=e146] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e147]:
              - link "Cyber Luxe" [ref=e148] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e149]:
              - link "HotelTonight" [ref=e150] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e151]:
              - link "Cyber for Work" [ref=e152] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e153]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e154] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e155]:
              - link "Cơ hội nghề nghiệp" [ref=e156] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e157]:
              - link "Thư của nhà sáng lập" [ref=e158] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e159]:
          - heading "Cộng đồng" [level=2] [ref=e160]
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e163] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e164]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e165] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e166]:
              - link "Đối tác liên kết Cyber" [ref=e167] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e168]:
              - link "Chỗ ở cho tuyến đầu" [ref=e169] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e170]:
              - link "Lượt giới thiệu của khách" [ref=e171] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e172]:
              - link "CyberSoft.edu.vn" [ref=e173] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e174]:
          - heading "Đón tiếp khách" [level=2] [ref=e175]
          - list [ref=e176]:
            - listitem [ref=e177]:
              - link "Cho thuê nhà" [ref=e178] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e179]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e180] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e181]:
              - link "Tổ chức Trải nghiệm" [ref=e182] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e183]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e184] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e185]:
              - link "Trung tâm tài nguyên" [ref=e186] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e187]:
              - link "Trung tâm cộng đồng" [ref=e188] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e189]:
          - heading "Hỗ trợ" [level=2] [ref=e190]
          - list [ref=e191]:
            - listitem [ref=e192]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e193] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e194]:
              - link "Trung tâm trợ giúp" [ref=e195] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e196]:
              - link "Các tùy chọn hủy" [ref=e197] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e198]:
              - link "Hỗ trợ khu dân cư" [ref=e199] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e200]:
              - link "Tin cây và an toàn" [ref=e201] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e203]:
        - generic [ref=e204]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e205]:
          - img [ref=e207]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e209]: Hỗ trợ tài nguyên
  - img [ref=e211] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@fixtures/test_hook';
  2   | 
  3   | test.describe('Dashboard - Update Profile', () => {
  4   |     test.describe.configure({ mode: 'serial' });
  5   | 
  6   |     test('UPDATE_PROFILE_01: Should open profile editing popup', async ({ homePage, dashboardPage, page }) => {
  7   |         await dashboardPage.loginAndGotoDashboard(homePage);
  8   |         await dashboardPage.openProfileDialog();
  9   | 
  10  |         const dialog = page.getByRole('dialog');
  11  |         await expect(dialog.getByText('Chỉnh sửa hồ sơ')).toBeVisible();
  12  |         await expect(dialog.locator('#email')).toBeVisible();
  13  |         await expect(dialog.locator('#name')).toBeVisible();
  14  |         await expect(dialog.locator('#phone')).toBeVisible();
  15  |         await expect(dialog.getByRole('button', { name: 'Cập nhật' })).toBeVisible();
  16  |         await expect(dialog.locator('button.ant-modal-close')).toBeVisible();
  17  | 
  18  |         // Data phải được preload từ server
  19  |         const emailValue = await dialog.locator('#email').inputValue();
  20  |         expect(emailValue.length).toBeGreaterThan(0);
  21  |     });
  22  | 
  23  |     test('UPDATE_PROFILE_02: Should close popup without saving', async ({ homePage, dashboardPage, page }) => {
  24  |         await dashboardPage.loginAndGotoDashboard(homePage);
  25  |         await dashboardPage.openProfileDialog();
  26  | 
  27  |         const dialog = page.getByRole('dialog');
  28  |         const oldName = await dialog.locator('#name').inputValue();
  29  | 
  30  |         // Sửa name rồi đóng bằng X
  31  |         await dialog.locator('#name').clear();
  32  |         await dialog.locator('#name').fill('Tên Tạm Thời');
  33  |         await dialog.locator('button.ant-modal-close').click();
  34  |         await expect(dialog).toBeHidden();
  35  | 
  36  |         // Mở lại → dữ liệu phải vẫn như cũ
  37  |         await dashboardPage.openProfileDialog();
  38  |         const dialog2 = page.getByRole('dialog');
  39  |         await expect(dialog2.locator('#name')).toHaveValue(oldName);
  40  |     });
  41  | 
  42  |     test('UPDATE_PROFILE_03: Should update profile successfully', async ({ homePage, dashboardPage, page }) => {
  43  |         await dashboardPage.loginAndGotoDashboard(homePage);
  44  |         await dashboardPage.openProfileDialog();
  45  | 
  46  |         const dialog = page.getByRole('dialog');
  47  |         const oldName = await dialog.locator('#name').inputValue();
  48  |         const oldPhone = await dialog.locator('#phone').inputValue();
  49  | 
  50  |         const newName = 'Quyên Cập Nhật';
  51  |         const newPhone = '0999888777';
  52  |         await dialog.locator('#name').clear();
  53  |         await dialog.locator('#name').fill(newName);
  54  |         await dialog.locator('#phone').clear();
  55  |         await dialog.locator('#phone').fill(newPhone);
  56  | 
  57  |         // Chờ API trả về thành công
  58  |         const [response] = await Promise.all([
> 59  |             page.waitForResponse((res) =>
      |                  ^ Error: page.waitForResponse: Test timeout of 30000ms exceeded.
  60  |                 res.url().includes('/api/users/') && res.request().method() === 'PUT'
  61  |             ),
  62  |             dialog.getByRole('button', { name: 'Cập nhật' }).click(),
  63  |         ]);
  64  |         expect(response.status()).toBe(200);
  65  | 
  66  |         // Dialog tự đóng sau khi update thành công
  67  |         await expect(dialog).toBeHidden({ timeout: 5000 });
  68  | 
  69  |         // Mở lại xác nhận dữ liệu mới
  70  |         await dashboardPage.openProfileDialog();
  71  |         const dialog2 = page.getByRole('dialog');
  72  |         await expect(dialog2.locator('#name')).toHaveValue(newName);
  73  |         await expect(dialog2.locator('#phone')).toHaveValue(newPhone);
  74  | 
  75  |         // Restore
  76  |         await dialog2.locator('#name').clear();
  77  |         await dialog2.locator('#name').fill(oldName);
  78  |         await dialog2.locator('#phone').clear();
  79  |         await dialog2.locator('#phone').fill(oldPhone);
  80  |         const [restoreRes] = await Promise.all([
  81  |             page.waitForResponse((res) =>
  82  |                 res.url().includes('/api/users/') && res.request().method() === 'PUT'
  83  |             ),
  84  |             dialog2.getByRole('button', { name: 'Cập nhật' }).click(),
  85  |         ]);
  86  |         expect(restoreRes.status()).toBe(200);
  87  |     });
  88  | 
  89  |     test('UPDATE_PROFILE_04: Should show error when email is blank', async ({ homePage, dashboardPage, page }) => {
  90  |         await dashboardPage.loginAndGotoDashboard(homePage);
  91  |         await dashboardPage.openProfileDialog();
  92  | 
  93  |         const dialog = page.getByRole('dialog');
  94  |         await dialog.locator('#email').clear();
  95  |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  96  | 
  97  |         await expect(dialog.getByText('Vui lòng nhập email!')).toBeVisible();
  98  |         await expect(dialog.getByText('Chỉnh sửa hồ sơ')).toBeVisible();
  99  |     });
  100 | 
  101 |     test('UPDATE_PROFILE_05: Should show error for incorrect email format', async ({ homePage, dashboardPage, page }) => {
  102 |         await dashboardPage.loginAndGotoDashboard(homePage);
  103 |         await dashboardPage.openProfileDialog();
  104 | 
  105 |         const dialog = page.getByRole('dialog');
  106 |         await dialog.locator('#email').clear();
  107 |         await dialog.locator('#email').fill('emailkhonghople');
  108 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  109 | 
  110 |         await expect(dialog.getByText(/định dạng email|email.*invalid/i)).toBeVisible();
  111 |     });
  112 | 
  113 |     test('UPDATE_PROFILE_06: Should show error for existing email', async ({ homePage, dashboardPage, page }) => {
  114 |         await dashboardPage.loginAndGotoDashboard(homePage);
  115 |         await dashboardPage.openProfileDialog();
  116 | 
  117 |         const dialog = page.getByRole('dialog');
  118 |         const oldEmail = await dialog.locator('#email').inputValue();
  119 | 
  120 |         await dialog.locator('#email').clear();
  121 |         await dialog.locator('#email').fill('diemquyen2596dhcn1b@gmail.com');
  122 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  123 |         await page.waitForTimeout(1500);
  124 | 
  125 |         // Đóng dialog rồi mở lại xác nhận email vẫn giữ nguyên
  126 |         await dialog.locator('button.ant-modal-close').click();
  127 |         await expect(dialog).toBeHidden();
  128 |         await dashboardPage.openProfileDialog();
  129 |         const dialog2 = page.getByRole('dialog');
  130 |         await expect(dialog2.locator('#email')).toHaveValue(oldEmail);
  131 |     });
  132 | 
  133 |     test('UPDATE_PROFILE_07: Should show error when name is blank', async ({ homePage, dashboardPage, page }) => {
  134 |         await dashboardPage.loginAndGotoDashboard(homePage);
  135 |         await dashboardPage.openProfileDialog();
  136 | 
  137 |         const dialog = page.getByRole('dialog');
  138 |         await dialog.locator('#name').clear();
  139 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  140 | 
  141 |         await expect(dialog.getByText('Vui lòng nhập họ tên!')).toBeVisible();
  142 |     });
  143 | 
  144 |     test('UPDATE_PROFILE_08: Should accept name with numbers/special chars', async ({ homePage, dashboardPage, page }) => {
  145 |         await dashboardPage.loginAndGotoDashboard(homePage);
  146 |         await dashboardPage.openProfileDialog();
  147 | 
  148 |         const dialog = page.getByRole('dialog');
  149 |         await dialog.locator('#name').clear();
  150 |         await dialog.locator('#name').fill('Test@User#123');
  151 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  152 | 
  153 |         // Nếu update thành công → toast hiện, nếu không → dialog vẫn mở
  154 |         const successToast = page.getByText(/cập nhật thành công/i);
  155 |         const isSuccess = await successToast.isVisible({ timeout: 3000 }).catch(() => false);
  156 | 
  157 |         // Dù thành công hay không, form phải chấp nhận input (không crash)
  158 |         expect(isSuccess || await dialog.isVisible()).toBeTruthy();
  159 |     });
```