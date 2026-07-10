# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking/review.spec.ts >> User Reviews >> REVIEW_06: Bình luận quá dài → giới hạn ký tự hoặc cảnh báo (BUG)
- Location: tests/booking/review.spec.ts:135:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('button.bg-main')
    - locator resolved to <button class=" text-sm bg-main  rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 font-bold duration-300 hover:scale-105 hover:bg-white hover:text-white">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not visible
  - retrying click action
    - waiting 500ms

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |     readonly page: Page;
  5  |     readonly avatarButton: Locator;
  6  |     readonly loginButton: Locator;
  7  |     readonly signUpButton: Locator;
  8  |     readonly hcmCard: Locator;
  9  |     readonly hanoiCard: Locator;
  10 |     readonly emailInput: Locator;
  11 |     readonly passwordInput: Locator;
  12 | 
  13 |     constructor(page: Page) {
  14 |         this.page = page;
  15 |         // 1. Tìm cái nút chứa ảnh avatar (nút này dùng để mở dropdown)
  16 |         this.avatarButton = page.locator('button.bg-main');
  17 | 
  18 |         // 2. Tìm nút Đăng nhập bên trong menu (dùng filter để chính xác)
  19 |         this.loginButton = page.locator('#user-dropdown').getByText('Đăng nhập');
  20 |         this.signUpButton = page.locator('#user-dropdown').getByText('Đăng ký');
  21 | 
  22 |         // 3. Thẻ địa danh
  23 |         this.hcmCard = page.locator('a[href*="ho-chi-minh"]');
  24 |         this.hanoiCard = page.locator('a[href*="ha-noi"]');
  25 | 
  26 |         // 4. Login form
  27 |         this.emailInput = page.getByPlaceholder('Vui lòng nhập tài khoản');
  28 |         this.passwordInput = page.getByPlaceholder('Vui lòng nhập mật khẩu');
  29 |     }
  30 | 
  31 |     async goto() {
  32 |         await this.page.goto('/', {
  33 |             waitUntil: 'domcontentloaded',
  34 |             timeout: 45000,
  35 |         });
  36 |     }
  37 |     async navigateToLogin() {
  38 |         await this.avatarButton.waitFor({ state: 'attached' });
  39 |         // Open menu then login
> 40 |         await this.avatarButton.click();
     |                                 ^ Error: locator.click: Test ended.
  41 |         await this.loginButton.click();
  42 |     }
  43 | 
  44 |     async navigateSignUp() {
  45 |         await this.avatarButton.waitFor({ state: 'attached' });
  46 |         // Open menu then singUp
  47 |         await this.avatarButton.click();
  48 |         await this.signUpButton.click();
  49 |     }
  50 |     async signUp(data: {
  51 |         name: string;
  52 |         email: string;
  53 |         password: string;
  54 |         phone: string;
  55 |         birthday: string;
  56 |         gender: string;
  57 |     }) {
  58 |         await this.navigateSignUp();
  59 |         const dialog = this.page.getByRole('dialog');
  60 | 
  61 |         // Định vị trực tiếp bằng ID bên trong dialog
  62 |         await dialog.locator('#name').fill(data.name);
  63 |         await dialog.locator('#email').fill(data.email);
  64 |         await dialog.locator('#password').fill(data.password);
  65 |         await dialog.locator('#phone').fill(data.phone);
  66 | 
  67 |         // Birthday — Ant Design DatePicker: type trực tiếp vào input
  68 |         const birthdayInput = dialog.getByPlaceholder('Chọn ngày sinh');
  69 |         await birthdayInput.click();
  70 |         await birthdayInput.pressSequentially(data.birthday);
  71 |         await birthdayInput.press('Enter');
  72 | 
  73 |         // Gender — Ant Design Select
  74 |         await dialog.locator('.ant-select').click();
  75 |         const genderDropdown = this.page.locator('.ant-select-dropdown:visible');
  76 |         await genderDropdown.waitFor({ state: 'visible' });
  77 |         await genderDropdown.getByText(data.gender, { exact: true }).click();
  78 | 
  79 |         await dialog.getByRole('button', { name: 'Đăng ký' }).click();
  80 |     }
  81 | 
  82 |     async login(email: string, password: string) {
  83 |         await this.navigateToLogin();
  84 |         await this.emailInput.fill(email);
  85 |         await this.passwordInput.fill(password);
  86 |         await this.page.getByRole('button', { name: 'Đăng nhập' }).click();
  87 |     }
  88 | 
  89 |     async selectLocation(city: 'hcm' | 'hanoi') {
  90 |         if (city === 'hcm') {
  91 |             await this.hcmCard.first().click();
  92 |         } else {
  93 |             await this.hanoiCard.first().click();
  94 |         }
  95 |     }
  96 | }
  97 | 
```