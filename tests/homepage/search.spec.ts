// import { HOMEPAGE } from '@constants/homePage.config';
// import { ROOMPAGE } from '@constants/roomPage.config';
// import { test, expect } from '@fixtures/test_hook';

// test('Search Flow: Select Location and Search', async ({ page, api }) => {
//     await page.goto('/');
//     const locations = await api.location.getPopularLocations();
//     const targetCity = locations[0];

//     // 1. Mở Popup Location
//     await page.getByText(HOMEPAGE.LOCATION_PICKER.PLACEHOLDER).click();

//     // 2. Định vị Popup
//     const popup = page.locator('div.absolute').filter({
//         has: page.getByRole('heading', { name: HOMEPAGE.LOCATION_PICKER.TITLE }),
//     });

//     // 3. Click vào địa điểm cụ thể
//     const cityCard = popup.locator('div.cursor-pointer').filter({
//         hasText: new RegExp(`^${targetCity.city}$`, 'i'),
//     });
//     await cityCard.click();

//     // 4. Click nút Search
//     const searchBtn = page
//         .locator('div.bg-main')
//         .filter({ has: page.locator('span[aria-label="search"]') });
//     await searchBtn.click();

//     // 5. Kiểm tra kết quả
//     // Thường URL sẽ chuyển sang dạng /rooms?locationId=... hoặc /search
//     const expectedUrl = `**/rooms/${targetCity.slug}`;
//     await page.waitForURL(expectedUrl);
//     // 6. Kiểm tra xem trên trang mới có hiển thị đúng tên thành phố không
//     const bannerText = page.locator('div.banner-responsive p');
//     await expect(bannerText).toHaveText(targetCity.city);
// });

// test('Search Flow: Select Date and Search', async ({ page, api }) => {
//     await page.goto('/');
//     const searchBtn = page
//         .locator('div.bg-main')
//         .filter({ has: page.locator('span[aria-label="search"]') });
//     await searchBtn.click();

//     // 5. Kiểm tra kết quả
//     const expectedUrl = `**/rooms`;
//     await page.waitForURL(expectedUrl);
//     // 6. Kiểm tra xem trên trang mới có hiển thị đúng tên thành phố không
//     const bannerText = page.locator('div.banner-responsive p');
//     await expect(bannerText).toHaveText(ROOMPAGE.ROOMPAGE_TITLE);
// });
