import { HOMEPAGE } from '@constants/homePage.config';
import { test, expect } from '@fixtures/test_hook';
import { getSearchDateRangeRegex } from 'utils/dateHelper';

test('Header - Location Picker', async ({ page, api }) => {
    const locations = await api.location.getPopularLocations();
    const locationIndexes = await api.location.getLocationIndex();
    await page.goto('/rooms');
    // await page.getByText(HOMEPAGE.LOCATION_PICKER.PLACEHOLDER).click();
    // const popup = page.locator('div.absolute').filter({
    //     has: page.getByRole('heading', { name: HOMEPAGE.LOCATION_PICKER.TITLE }),
    // });
    // const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    // const cityCard = popup.locator('div.cursor-pointer').filter({
    //     hasText: new RegExp(`^${randomLocation.city}$`, 'i'),
    // });
    // await cityCard.click();
    // await cityCard.click();

    // await expect(page).toHaveURL(new RegExp(`rooms/${randomLocation.slug}`));
    // const locationID = locationIndexes.find((item: { id: any }) => item.id === randomLocation.id);
    // const rooms = await api.room.getRoomsByLocationIndex(locationID);
    // console.log('xxxxxxxxx');
    // console.log(rooms);
});
