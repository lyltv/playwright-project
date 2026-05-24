import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;
    readonly loginButton: Locator;
    readonly singUpButton: Locator;
    readonly hcmCard: Locator;
    readonly hanoiCard: Locator;

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
    async selectLocation(city: 'hcm' | 'hanoi') {
        if (city === 'hcm') {
            await this.hcmCard.first().click();
        } else {
            await this.hanoiCard.first().click();
        }
    }
}
