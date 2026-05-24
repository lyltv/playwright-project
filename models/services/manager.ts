import { APIRequestContext } from '@playwright/test';
import { LocationService } from './location_service';

export class ApiServiceManager {
    readonly location: LocationService;

    constructor(request: APIRequestContext) {
        this.location = new LocationService(request);
    }
}
