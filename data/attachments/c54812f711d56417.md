# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/register.spec.ts >> CyberBnB Register >> Should close register form by clicking outside popup
- Location: tests/homepage/register.spec.ts:86:9

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByRole('dialog')
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" with timeout 10000ms
  - waiting for getByRole('dialog')
    - locator resolved to <div role="dialog" aria-modal="true" class="ant-modal css-zl9ks2 ant-zoom-appear ant-zoom-appear-start ant-zoom">…</div>
    4 × unexpected value "visible"
      - locator resolved to <div role="dialog" aria-modal="true" class="ant-modal css-zl9ks2 ant-zoom-appear ant-zoom-appear-active ant-zoom">…</div>
    19 × unexpected value "visible"
       - locator resolved to <div role="dialog" aria-modal="true" class="ant-modal css-zl9ks2">…</div>
    - unexpected value "visible"

```

```yaml
- dialog:
  - button "Close"
  - heading "Đăng ký tài khoản" [level=2]
  - text: Name
  - textbox "Name":
    - /placeholder: Điền tên vào đây...
  - text: Email
  - textbox "Email":
    - /placeholder: Điền tên vào đây...
  - text: Password
  - textbox "Password":
    - /placeholder: Điền mật khẩu....
  - img "eye-invisible"
  - text: Phone number
  - textbox "Phone number":
    - /placeholder: Điền số điện thoại....
  - text: Birthday
  - textbox "Birthday":
    - /placeholder: Chọn ngày sinh
  - img "calendar"
  - text: Gender
  - combobox "Gender"
  - text: Chọn giới tính
  - button "Đăng ký"
```

# Test source

```ts
  1   | import { test, expect } from '@fixtures/test_hook';
  2   | import { Page, Locator } from '@playwright/test';
  3   | 
  4   | async function fillRegistrationForm(
  5   |     dialog: Locator,
  6   |     page: Page,
  7   |     overrides: Partial<{
  8   |         name: string;
  9   |         email: string;
  10  |         password: string;
  11  |         phone: string;
  12  |         birthday: string;
  13  |         gender: string;
  14  |     }> = {}
  15  | ) {
  16  |     const data = {
  17  |         name: 'Test User',
  18  |         email: `test${Date.now()}@gmail.com`,
  19  |         password: 'Test@12345',
  20  |         phone: '0901234567',
  21  |         birthday: '15/06/1995',
  22  |         gender: 'Nam',
  23  |         ...overrides,
  24  |     };
  25  | 
  26  |     await dialog.getByPlaceholder('Điền tên vào đây...').first().fill(data.name);
  27  |     await dialog.getByPlaceholder('Điền tên vào đây...').last().fill(data.email);
  28  |     await dialog.getByPlaceholder('Điền mật khẩu....').fill(data.password);
  29  |     await dialog.getByPlaceholder('Điền số điện thoại....').fill(data.phone);
  30  | 
  31  |     const birthdayInput = dialog.getByPlaceholder('Chọn ngày sinh');
  32  |     await birthdayInput.click();
  33  |     await birthdayInput.pressSequentially(data.birthday);
  34  |     await birthdayInput.press('Enter');
  35  | 
  36  |     await dialog.locator('.ant-select').click();
  37  |     const genderDropdown = page.locator('.ant-select-dropdown:visible');
  38  |     await genderDropdown.waitFor({ state: 'visible' });
  39  |     await genderDropdown.getByText(data.gender, { exact: true }).click();
  40  | }
  41  | 
  42  | test.describe('CyberBnB Register', () => {
  43  |     test('Should open signup box', async ({ homePage, page }) => {
  44  |         await homePage.navigateSignUp();
  45  |         const signUpDialog = page.getByRole('dialog');
  46  |         await expect(signUpDialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();
  47  |     });
  48  | 
  49  |     test('Should register successfully', async ({ homePage, page }) => {
  50  |         const randomId = Date.now();
  51  | 
  52  |         const signUpData = {
  53  |             name: `Test User ${randomId}`,
  54  |             email: `testuser${randomId}@gmail.com`,
  55  |             password: 'Test@12345',
  56  |             phone: '0901234567',
  57  |             birthday: '15/06/1995',
  58  |             gender: 'Nam',
  59  |         };
  60  | 
  61  |         // 1. Điền form và submit
  62  |         await homePage.signUp(signUpData);
  63  | 
  64  |         // 2. Toast "Đăng ký thành công" xuất hiện
  65  |         await expect(page.getByText('Đăng ký thành công')).toBeVisible({ timeout: 10000 });
  66  | 
  67  |         // 3. Sau đăng ký thành công, web tự mở dialog Đăng nhập
  68  |         const loginDialog = page.getByRole('dialog').filter({
  69  |             has: page.getByRole('heading', { name: 'Đăng nhập' }),
  70  |         });
  71  |         await expect(loginDialog).toBeVisible({ timeout: 5000 });
  72  |     });
  73  | 
  74  |     test('Should close register form with X button', async ({ homePage, page }) => {
  75  |         await homePage.navigateSignUp();
  76  |         const dialog = page.getByRole('dialog');
  77  |         await expect(dialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();
  78  | 
  79  |         // Click nút X (Close) để đóng dialog
  80  |         await dialog.getByRole('button', { name: 'Close' }).click();
  81  | 
  82  |         // Dialog đăng ký phải đóng lại
  83  |         await expect(dialog).toBeHidden();
  84  |     });
  85  | 
  86  |     test('Should close register form by clicking outside popup', async ({ homePage, page }) => {
  87  |         await homePage.navigateSignUp();
  88  |         const dialog = page.getByRole('dialog');
  89  |         await expect(dialog.getByRole('heading', { name: 'Đăng ký' })).toBeVisible();
  90  | 
  91  |         // Click bên ngoài dialog (vùng overlay)
  92  |         await page.mouse.click(10, 10);
  93  | 
  94  |         // Dialog phải đóng lại
> 95  |         await expect(dialog).toBeHidden();
      |                              ^ Error: expect(locator).toBeHidden() failed
  96  |     });
  97  | 
  98  |     test('Should not register with all fields empty', async ({ homePage, page }) => {
  99  |         // 1. Mở dialog đăng ký
  100 |         await homePage.navigateSignUp();
  101 |         const dialog = page.getByRole('dialog');
  102 |         await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();
  103 | 
  104 |         // 2. Không nhập gì, click Đăng ký luôn
  105 |         await dialog.getByRole('button', { name: 'Đăng ký' }).click();
  106 | 
  107 |         // 3. Hiển thị lỗi "Vui lòng không bỏ trống" cho Name, Email, Password, Phone
  108 |         const emptyErrors = dialog.getByText('Vui lòng không bỏ trống');
  109 |         await expect(emptyErrors).toHaveCount(4);
  110 | 
  111 |         // 4. Hiển thị lỗi riêng cho Birthday
  112 |         await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();
  113 | 
  114 |         // 5. Dialog vẫn mở, không đăng ký được
  115 |         await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();
  116 | 
  117 |         // 6. Không xuất hiện toast thành công
  118 |         await expect(page.getByText('Đăng ký thành công')).toBeHidden();
  119 |     });
  120 | 
  121 |     test('Should show error when only Name is filled', async ({ homePage, page }) => {
  122 |         await homePage.navigateSignUp();
  123 |         const dialog = page.getByRole('dialog');
  124 | 
  125 |         // Chỉ nhập Name, bỏ trống các field khác
  126 |         await dialog.getByPlaceholder('Điền tên vào đây...').first().fill('Test User');
  127 |         await dialog.getByRole('button', { name: 'Đăng ký' }).click();
  128 | 
  129 |         // Email, Password, Phone vẫn báo lỗi trống
  130 |         const emptyErrors = dialog.getByText('Vui lòng không bỏ trống');
  131 |         await expect(emptyErrors).toHaveCount(3);
  132 | 
  133 |         // Birthday vẫn báo lỗi
  134 |         await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();
  135 | 
  136 |         // Không đăng ký được
  137 |         await expect(page.getByText('Đăng ký thành công')).toBeHidden();
  138 |     });
  139 | 
  140 |     test('Should show error when only Email is filled', async ({ homePage, page }) => {
  141 |         await homePage.navigateSignUp();
  142 |         const dialog = page.getByRole('dialog');
  143 | 
  144 |         // Chỉ nhập Email
  145 |         await dialog.getByPlaceholder('Điền tên vào đây...').last().fill('test@gmail.com');
  146 |         await dialog.getByRole('button', { name: 'Đăng ký' }).click();
  147 | 
  148 |         // Name, Password, Phone vẫn báo lỗi trống
  149 |         const emptyErrors = dialog.getByText('Vui lòng không bỏ trống');
  150 |         await expect(emptyErrors).toHaveCount(3);
  151 | 
  152 |         // Birthday vẫn báo lỗi
  153 |         await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();
  154 | 
  155 |         await expect(page.getByText('Đăng ký thành công')).toBeHidden();
  156 |     });
  157 | 
  158 |     test('Should show error when Birthday is missing', async ({ homePage, page }) => {
  159 |         await homePage.navigateSignUp();
  160 |         const dialog = page.getByRole('dialog');
  161 | 
  162 |         // Nhập đủ 4 field text, bỏ trống Birthday
  163 |         await dialog.getByPlaceholder('Điền tên vào đây...').first().fill('Test User');
  164 |         await dialog.getByPlaceholder('Điền tên vào đây...').last().fill(`test${Date.now()}@gmail.com`);
  165 |         await dialog.getByPlaceholder('Điền mật khẩu....').fill('Test@12345');
  166 |         await dialog.getByPlaceholder('Điền số điện thoại....').fill('0901234567');
  167 |         await dialog.getByRole('button', { name: 'Đăng ký' }).click();
  168 | 
  169 |         // Không còn lỗi "Vui lòng không bỏ trống"
  170 |         await expect(dialog.getByText('Vui lòng không bỏ trống')).toHaveCount(0);
  171 | 
  172 |         // Chỉ còn lỗi Birthday
  173 |         await expect(dialog.getByText('Vui lòng chọn ngày sinh')).toBeVisible();
  174 | 
  175 |         // Không đăng ký được
  176 |         await expect(page.getByText('Đăng ký thành công')).toBeHidden();
  177 |     });
  178 | 
  179 |     test('Should not register with password under 6 characters', async ({ homePage, page }) => {
  180 |         // BUG: Web cho phép đăng ký với mật khẩu < 6 ký tự (không validate)
  181 |         test.fail();
  182 | 
  183 |         await homePage.navigateSignUp();
  184 |         const dialog = page.getByRole('dialog');
  185 |         await expect(dialog.getByRole('heading', { name: 'Đăng ký tài khoản' })).toBeVisible();
  186 | 
  187 |         await fillRegistrationForm(dialog, page, { password: '12345' });
  188 | 
  189 |         // Bắt API response khi click đăng ký
  190 |         const [response] = await Promise.all([
  191 |             page.waitForResponse((res) => res.url().includes('/auth/signup')),
  192 |             dialog.getByRole('button', { name: 'Đăng ký' }).click(),
  193 |         ]);
  194 | 
  195 |         // Server phải từ chối đăng ký với mật khẩu < 6 ký tự
```