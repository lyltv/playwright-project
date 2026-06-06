const API_ROOT = process.env.API_BASE_URL || 'https://airbnbnew.cybersoft.edu.vn/api';

export const LOCATIONS = {
    URL: `${API_ROOT}/vi-tri/phan-trang-tim-kiem/`,
    DEFAULT_PAGE_SIZE: 8,
    DEFAULT_PAGE_INDEX: 1,
    TIMEOUT: 5000,
};

export const LOCATIONS_INDEX = {
    URL: `${API_ROOT}/vi-tri`,
};
