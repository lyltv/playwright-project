import { APIRequestContext } from '@playwright/test';
import { LOCATION_ENDPOINTS } from '@constants/api_endpoints';
import { Location } from '@models/location.model';

export class LocationService {
    constructor(private request: APIRequestContext) { }

    async getPopularLocations(
        // Nếu không truyền vào thì sẽ lấy giá trị mặc định từ constants
        pageIndex = LOCATION_ENDPOINTS.DEFAULT_PAGE_INDEX,
        pageSize = LOCATION_ENDPOINTS.DEFAULT_PAGE_SIZE
    ) {
        const response = await this.request.get(LOCATION_ENDPOINTS.URL, {
            params: {
                pageIndex,
                pageSize,
            },
            //TODO: move header to config
            headers: {
                'TokenCybersoft': 'xxxx',
                'Origin': 'https://demo5.cybersoft.edu.vn',
                'Referer': 'https://demo5.cybersoft.edu.vn/',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
            }
        });
        const body = await response.json();

        // 2. Kiểm tra xem status code của CyberSoft có phải 200 không
        if (body.statusCode !== 200) {
            throw new Error(`API Error: ${body.statusCode}`);
        }
        console.log(body);
        console.log("===========");

        // 3. Truy cập đúng mảng dữ liệu (body -> content -> data)
        const locationsRaw = body.content.data;
        console.log(locationsRaw);
        // 4. Map sang Model Location của bạn
        return locationsRaw.map((item: any) => Location.fromJson(item));
    }
}