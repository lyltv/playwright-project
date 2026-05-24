import { APIRequestContext } from '@playwright/test';
import { LocationService } from './location_service';
import { RoomService } from './room_service';

export class ApiServiceManager {
    readonly location: LocationService;
    readonly room: RoomService;

    constructor(request: APIRequestContext) {
        this.location = new LocationService(request);
        this.room = new RoomService(request);
    }
}
