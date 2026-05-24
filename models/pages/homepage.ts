import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;
    readonly loginButton: Locator;
    readonly singUpButton: Locator;
    readonly hcmCard: Locator;
    readonly hanoiCard: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        // 1. Tìm cái nút chứa ảnh avatar (nút này dùng để mở dropdown)
        this.avatarButton = page.locator('button.bg-main');

        // 2. Tìm nút Đăng nhập bên trong menu (dùng filter để chính xác)
        this.loginButton = page.locator('#user-dropdown').getByText('Đăng nhập');
        this.singUpButton = page.locator('#user-dropdown').getByText('Đăng ký');

        // 3. Thẻ địa danh
        this.hcmCard = page.locator('a[href*="ho-chi-minh"]');
        this.hanoiCard = page.locator('a[href*="ha-noi"]');

        // 4. Login form
        this.emailInput = page.getByPlaceholder('Vui lòng nhập tài khoản');
        this.passwordInput = page.getByPlaceholder('Vui lòng nhập mật khẩu');
    }

    async goto() {
        await this.page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 45000,
        });
    }
    async navigateToAvatar() {
        await this.avatarButton.waitFor({ state: 'attached' });
        await this.avatarButton.click();
    }
    async navigateToLogin() {
        await this.avatarButton.waitFor({ state: 'attached' });
        // Open menu then login
        await this.avatarButton.click();
        await this.loginButton.click();
    }

    async navigateSignUp() {
        await this.avatarButton.waitFor({ state: 'attached' });
        // Open menu then singUp
        await this.avatarButton.click();
        await this.singUpButton.click();
    }
    async signUp(data: {
        name: string;
        email: string;
        password: string;
        phone: string;
        birthday: string;
        gender: string;
    }) {
        await this.navigateSignUp();
        const dialog = this.page.getByRole('dialog');

        await dialog.getByPlaceholder('Điền tên vào đây...').first().fill(data.name);
        await dialog.getByPlaceholder('Điền tên vào đây...').last().fill(data.email);
        await dialog.getByPlaceholder('Điền mật khẩu....').fill(data.password);
        await dialog.getByPlaceholder('Điền số điện thoại....').fill(data.phone);

        // Birthday — Ant Design DatePicker: type trực tiếp vào input
        const birthdayInput = dialog.getByPlaceholder('Chọn ngày sinh');
        await birthdayInput.click();
        await birthdayInput.pressSequentially(data.birthday);
        await birthdayInput.press('Enter');

        // Gender — Ant Design Select
        await dialog.locator('.ant-select').click();
        const genderDropdown = this.page.locator('.ant-select-dropdown:visible');
        await genderDropdown.waitFor({ state: 'visible' });
        await genderDropdown.getByText(data.gender, { exact: true }).click();

        await dialog.getByRole('button', { name: 'Đăng ký' }).click();
    }

    async login(email: string, password: string) {
        await this.navigateToLogin();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.page.getByRole('button', { name: 'Đăng nhập' }).click();
    }

    async selectLocation(city: 'hcm' | 'hanoi') {
        if (city === 'hcm') {
            await this.hcmCard.first().click();
        } else {
            await this.hanoiCard.first().click();
        }
    }
}
