import { APIRequestContext } from '@playwright/test';
import * as ENDPOINTS from '@constants/api_endpoints';
import { Room } from '@models/room.model';

export class RoomService {
    constructor(private request: APIRequestContext) {}

    async getRoomsByLocationIndex(locationIndex = 1) {
        const response = await this.request.get(ENDPOINTS.LOCATIONS_INDEX.URL, {
            params: {
                maViTri: locationIndex,
            },
        });
        const body = await response.json();

        if (body.statusCode !== 200) {
            throw new Error(`API Error: ${body.statusCode}`);
        }
        const roomRaw = body.content.data;
        return roomRaw.map((item: any) => Room.fromJson(item)).toList();
    }
}
