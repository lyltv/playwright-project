import { HOMEPAGE } from '@constants/homePage.config';
import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly avatarButton: Locator;
    readonly loginButton: Locator;
    readonly signUpButton: Locator;
    readonly hcmCard: Locator;
    readonly hanoiCard: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        // 1. Locate the button containing the avatar image (used to open the dropdown menu)
        this.avatarButton = page.locator('button.bg-main');

        // 2. Locate the Login/Register buttons inside the menu
        this.loginButton = page.locator('#user-dropdown').getByText(HOMEPAGE.LOGIN.BTN_LOGIN);
        this.signUpButton = page.locator('#user-dropdown').getByText(HOMEPAGE.LOGIN.BTN_REGISTER);

        // 3. Location cards
        this.hcmCard = page.locator('a[href*="ho-chi-minh"]');
        this.hanoiCard = page.locator('a[href*="ha-noi"]');

        // 4. Login form fields
        this.emailInput = page.getByPlaceholder(HOMEPAGE.LOGIN.EMAIL_PLACEHOLDER);
        this.passwordInput = page.getByPlaceholder(HOMEPAGE.LOGIN.PASSWORD_PLACEHOLDER);
    }

    async goto() {
        await this.page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 45000,
        });
    }
    async navigateToLogin() {
        await this.avatarButton.waitFor({ state: 'attached' });
        // Open menu then login
        await this.avatarButton.click();
        await this.loginButton.click();
    }

    async navigateSignUp() {
        await this.avatarButton.waitFor({ state: 'attached' });
        // Open menu then signUp
        await this.avatarButton.click();
        await this.signUpButton.click();
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

        // Direct positioning by ID inside the dialog
        await dialog.locator('#name').fill(data.name);
        await dialog.locator('#email').fill(data.email);
        await dialog.locator('#password').fill(data.password);
        await dialog.locator('#phone').fill(data.phone);

        // Birthday — Ant Design DatePicker: type directly into input
        const birthdayInput = dialog.getByPlaceholder(HOMEPAGE.REGISTER.PLACEHOLDER_BIRTHDAY);
        await birthdayInput.click();
        await birthdayInput.pressSequentially(data.birthday);
        await birthdayInput.press('Enter');

        // Gender — Ant Design Select
        await dialog.locator('.ant-select').click();
        const genderDropdown = this.page.locator('.ant-select-dropdown:visible');
        await genderDropdown.waitFor({ state: 'visible' });
        await genderDropdown.getByText(data.gender, { exact: true }).click();

        await dialog.getByRole('button', { name: HOMEPAGE.LOGIN.BTN_REGISTER }).click();
    }

    async login(email: string, password: string) {
        await this.navigateToLogin();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.page.getByRole('button', { name: HOMEPAGE.LOGIN.BTN_LOGIN }).click();
    }

    async selectLocation(city: 'hcm' | 'hanoi') {
        if (city === 'hcm') {
            await this.hcmCard.first().click();
        } else {
            await this.hanoiCard.first().click();
        }
    }
}
