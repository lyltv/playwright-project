# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/login.spec.ts >> CyberBnB Login >> Should login successfully
- Location: tests/homepage/login.spec.ts:39:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('navigation').locator('span').filter({ hasText: /LE THI VAN LY/ }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('navigation').locator('span').filter({ hasText: /LE THI VAN LY/ }).first()

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
        - /url: /
    - listitem:
      - link "Services":
        - /url: /
    - listitem:
      - link "Pricing":
        - /url: "#"
    - listitem:
      - link "Contact":
        - /url: "#"
- text: Your browser does not support the video tag.
- heading "Cyberbnb" [level=2]
- paragraph: Belong anywhere
- paragraph: Địa điểm
- paragraph: Bạn sắp đi đâu?
- paragraph: 07/06/2026 – 14/06/2026
- paragraph: Thêm khách
- img "search"
- button "Loại nơi ở"
- button "Giá"
- button "Đặt ngay"
- button "Phòng và phòng ngủ"
- button "Bộ lọc khác"
- link "Hồ Chí Minh 15 phút lái xe":
  - /url: /rooms/ho-chi-minh
  - heading "Hồ Chí Minh" [level=2]
  - paragraph: 15 phút lái xe
- link "Cần Thơ 3 giờ lái xe":
  - /url: /rooms/can-tho
  - heading "Cần Thơ" [level=2]
  - paragraph: 3 giờ lái xe
- link "Nha Trang 6.5 giờ lái xe":
  - /url: /rooms/nha-trang
  - heading "Nha Trang" [level=2]
  - paragraph: 6.5 giờ lái xe
- link "Hà Nội 15 phút lái xe":
  - /url: /rooms/ha-noi
  - heading "Hà Nội" [level=2]
  - paragraph: 15 phút lái xe
- link "Phú Quốc 7.5 giờ lái xe":
  - /url: /rooms/phu-quoc
  - heading "Phú Quốc" [level=2]
  - paragraph: 7.5 giờ lái xe
- link "Đà Nẵng 45 phút lái xe":
  - /url: /rooms/da-nang
  - heading "Đà Nẵng" [level=2]
  - paragraph: 45 phút lái xe
- link "Đà Lạt 30 phút lái xe":
  - /url: /rooms/da-lat
  - heading "Đà Lạt" [level=2]
  - paragraph: 30 phút lái xe
- link "Phan Thiết 5 giờ lái xe":
  - /url: /rooms/phan-thiet
  - heading "Phan Thiết" [level=2]
  - paragraph: 5 giờ lái xe
- heading "Ở bất cứ đâu" [level=1]
- link "Toàn bộ nhà":
  - /url: /rooms/ho-chi-minh
- link "Chỗ ở độc đáo":
  - /url: /rooms/nha-trang
- link "Trang trại và thiên nhiên":
  - /url: /rooms/da-lat
- link "Cho phép mang theo thú cưng":
  - /url: /rooms/da-nang
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
  1   | import { test, expect } from '@fixtures/test_hook';
  2   | 
  3   | test.describe.configure({ mode: 'serial' });
  4   | 
  5   | test.describe('CyberBnB Login', () => {
  6   |     test('Should open login box', async ({ homePage, page }) => {
  7   |         await homePage.navigateToLogin();
  8   |         const loginDialog = page.getByRole('dialog');
  9   |         await expect(loginDialog).toBeVisible();
  10  | 
  11  |         await expect(loginDialog.getByRole('heading', { name: 'Đăng nhập' })).toBeVisible();
  12  |         await expect(loginDialog.getByText('Email', { exact: true }).first()).toBeVisible();
  13  |         await expect(page.getByPlaceholder('Vui lòng nhập tài khoản')).toBeVisible();
  14  | 
  15  |         await expect(loginDialog.getByText('Mật khẩu', { exact: true }).first()).toBeVisible();
  16  |         await expect(page.getByPlaceholder('Vui lòng nhập mật khẩu')).toBeVisible();
  17  |         // Dialog has 2 buttons
  18  |         const btnRegister = page.getByRole('button', { name: 'Đăng ký' });
  19  |         const btnLogin = page.getByRole('button', { name: 'Đăng nhập' });
  20  |         await expect(btnRegister).toBeVisible();
  21  |         await expect(btnLogin).toBeVisible();
  22  | 
  23  |         // Check 2 buttons color
  24  |         const registerBgColor = await btnRegister.evaluate(
  25  |             (el) => window.getComputedStyle(el).backgroundColor
  26  |         );
  27  |         expect(registerBgColor).toBe('rgb(254, 107, 110)');
  28  | 
  29  |         const loginBgColor = await btnLogin.evaluate(
  30  |             (el) => window.getComputedStyle(el).backgroundColor
  31  |         );
  32  |         expect(loginBgColor).toBe('rgb(0, 0, 0)');
  33  | 
  34  |         // Check text color
  35  |         const textColor = await btnLogin.evaluate((el) => window.getComputedStyle(el).color);
  36  |         expect(textColor).toBe('rgb(255, 255, 255)');
  37  |     });
  38  | 
  39  |     test('Should login successfully', async ({ homePage, page }) => {
  40  |         const email = process.env.TEST_EMAIL!;
  41  |         const password = process.env.TEST_PASSWORD!;
  42  | 
  43  |         // 1. Thực hiện đăng nhập
  44  |         await homePage.login(email, password);
  45  | 
  46  |         // 2. Nút user menu xuất hiện với tên user
  47  |         const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
  48  |         await expect(userMenuButton).toBeVisible({ timeout: 10000 });
  49  | 
  50  |         // 3. Tên user hiển thị trên navbar
  51  |         const userNameEnv = new RegExp(process.env.TEST_USER_NAME);
  52  |         const userName = page
  53  |             .getByRole('navigation')
  54  |             .locator('span', { hasText: userNameEnv })
  55  |             .first();
> 56  |         await expect(userName).toBeVisible();
      |                                ^ Error: expect(locator).toBeVisible() failed
  57  | 
  58  |         // 4. Nút "Đăng ký" (trước login) không còn hiển thị
  59  |         await expect(page.locator('button.bg-main')).toBeHidden();
  60  | 
  61  |         // 5. Mở dropdown menu và kiểm tra các option sau khi đã login
  62  |         await userMenuButton.click();
  63  |         const dropdown = page.locator('#user-dropdown').filter({ hasNotText: 'Đăng nhập' });
  64  |         await expect(dropdown).toBeVisible();
  65  |         await expect(dropdown.getByText('Sign out')).toBeVisible();
  66  |     });
  67  | 
  68  |     test('Should close login form with X button', async ({ homePage, page }) => {
  69  |         await homePage.navigateToLogin();
  70  |         const loginDialog = page.getByRole('dialog');
  71  |         await expect(loginDialog).toBeVisible();
  72  | 
  73  |         // Click nút X (Close) để đóng dialog
  74  |         await loginDialog.getByRole('button', { name: 'Close' }).click();
  75  | 
  76  |         // Dialog đăng nhập phải đóng lại
  77  |         await expect(loginDialog).toBeHidden();
  78  |     });
  79  | 
  80  |     test('Should close login form by clicking outside popup', async ({ homePage, page }) => {
  81  |         await homePage.navigateToLogin();
  82  |         const loginDialog = page.getByRole('dialog');
  83  |         await expect(loginDialog).toBeVisible();
  84  | 
  85  |         // Click bên ngoài dialog (vùng overlay)
  86  |         await page.mouse.click(10, 10);
  87  | 
  88  |         // Dialog phải đóng lại
  89  |         await expect(loginDialog).toBeHidden();
  90  |     });
  91  | 
  92  |     test('Should not login with empty email and password', async ({ homePage, page }) => {
  93  |         // 1. Mở dialog đăng nhập
  94  |         await homePage.navigateToLogin();
  95  |         const loginDialog = page.getByRole('dialog');
  96  |         await expect(loginDialog).toBeVisible();
  97  | 
  98  |         // 2. Không nhập gì, click Đăng nhập luôn
  99  |         await page.getByRole('button', { name: 'Đăng nhập' }).click();
  100 | 
  101 |         // 3. Hiển thị thông báo lỗi "Vui lòng không bỏ trống" cho cả Email và Mật khẩu
  102 |         const errorMessages = loginDialog.getByText('Vui lòng không bỏ trống');
  103 |         await expect(errorMessages).toHaveCount(2);
  104 | 
  105 |         // 4. Dialog đăng nhập vẫn còn hiển thị (không chuyển trang)
  106 |         await expect(loginDialog).toBeVisible();
  107 | 
  108 |         // 5. Không xuất hiện user menu (chưa đăng nhập được)
  109 |         const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
  110 |         await expect(userMenuButton).toBeHidden();
  111 |     });
  112 | 
  113 |     test('Should not login with wrong email', async ({ homePage, page }) => {
  114 |         // 1. Mở dialog và nhập email sai + mật khẩu đúng
  115 |         await homePage.navigateToLogin();
  116 |         const loginDialog = page.getByRole('dialog');
  117 |         await expect(loginDialog).toBeVisible();
  118 | 
  119 |         await homePage.emailInput.fill('wrong_email@gmail.com');
  120 |         await homePage.passwordInput.fill(process.env.TEST_PASSWORD!);
  121 |         await page.getByRole('button', { name: 'Đăng nhập' }).click();
  122 | 
  123 |         // 2. Hiển thị toast thông báo lỗi
  124 |         await expect(page.getByText('Email hoặc mật khẩu không đúng !')).toBeVisible({
  125 |             timeout: 5000,
  126 |         });
  127 | 
  128 |         // 3. Dialog vẫn mở, không đăng nhập được
  129 |         await expect(loginDialog).toBeVisible();
  130 |         const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
  131 |         await expect(userMenuButton).toBeHidden();
  132 |     });
  133 | 
  134 |     test('Should not login with wrong password', async ({ homePage, page }) => {
  135 |         // 1. Mở dialog và nhập email đúng + mật khẩu sai
  136 |         await homePage.navigateToLogin();
  137 |         const loginDialog = page.getByRole('dialog');
  138 |         await expect(loginDialog).toBeVisible();
  139 | 
  140 |         await homePage.emailInput.fill(process.env.TEST_EMAIL!);
  141 |         await homePage.passwordInput.fill('sai_mat_khau_123');
  142 |         await page.getByRole('button', { name: 'Đăng nhập' }).click();
  143 | 
  144 |         // 2. Hiển thị toast thông báo lỗi
  145 |         await expect(page.getByText('Email hoặc mật khẩu không đúng !')).toBeVisible({
  146 |             timeout: 5000,
  147 |         });
  148 | 
  149 |         // 3. Dialog vẫn mở, không đăng nhập được
  150 |         await expect(loginDialog).toBeVisible();
  151 |         const userMenuButton = page.getByRole('button', { name: /Open user menu/i });
  152 |         await expect(userMenuButton).toBeHidden();
  153 |     });
  154 | 
  155 |     test('Should not login with invalid email format', async ({ homePage, page }) => {
  156 |         await homePage.navigateToLogin();
```