import { test as base } from '@playwright/test';
import { HomePage } from '../models/homepage';

// Khai báo các Page Objects sẽ dùng như Fixture
type MyFixtures = {
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        // Khởi tạo homePage trước mỗi bài test
        const homePage = new HomePage(page);
        await homePage.goto();
        // Pass đối tượng này cho test case sử dụng
        await use(homePage);
    },
});

export { expect } from '@playwright/test';