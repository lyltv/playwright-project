import { APIRequestContext } from '@playwright/test';
import * as ENDPOINTS from '@constants/api_endpoints';
import { Location } from '@models/location.model';

export class LocationService {
    constructor(private request: APIRequestContext) {}

    async getPopularLocations(
        // Nếu không truyền vào thì sẽ lấy giá trị mặc định từ constants
        pageIndex = ENDPOINTS.LOCATIONS.DEFAULT_PAGE_INDEX,
        pageSize = ENDPOINTS.LOCATIONS.DEFAULT_PAGE_SIZE
    ) {
        const response = await this.request.get(ENDPOINTS.LOCATIONS.URL, {
            params: {
                pageIndex,
                pageSize,
            },
        });
        const body = await response.json();
        // 2. Kiểm tra xem status code của CyberSoft có phải 200 không
        if (body.statusCode !== 200) {
            throw new Error(`API Error: ${body.statusCode}`);
        }
        // 3. Truy cập đúng mảng dữ liệu (body -> content -> data)
        const locationsRaw = body.content.data;
        // 4. Map sang Model Location của bạn
        return locationsRaw.map((item: any) => Location.fromJson(item));
    }
    async getLocationIndex() {
        const response = await this.request.get(ENDPOINTS.LOCATIONS_INDEX.URL, {});
        const body = await response.json();
        if (body.statusCode !== 200) {
            throw new Error(`API Error: ${body.statusCode}`);
        }
        const locationsRaw = body.content;
        return locationsRaw.map((item: any) => Location.fromJson(item));
    }
}
