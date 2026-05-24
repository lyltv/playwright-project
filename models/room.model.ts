export class Room {
    id: number;
    roomName: string;
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    description: string;
    price: number;
    image: string;
    locationId: number;
    // Nhóm các tiện ích (Amenities)
    amenities: {
        washer: boolean;
        iron: boolean;
        tivi: boolean;
        airCon: boolean;
        wifi: boolean;
        kitchen: boolean;
        parking: boolean;
        pool: boolean;
    };

    constructor(data: Partial<Room>) {
        Object.assign(this, data);
    }

    static fromJson(json: any): Room {
        return new Room({
            id: json.id,
            roomName: json.tenPhong,
            guests: json.khach,
            bedrooms: json.phongNgu,
            beds: json.giuong,
            bathrooms: json.phongTam,
            description: json.moTa,
            price: json.giaTien,
            image: json.hinhAnh,
            locationId: json.maViTri,
            amenities: {
                washer: json.mayGiat,
                iron: json.banLa || json.banUi, // Cả 2 field này đều có trong JSON
                tivi: json.tivi,
                airCon: json.dieuHoa,
                wifi: json.wifi,
                kitchen: json.bep,
                parking: json.doXe,
                pool: json.hoBoi,
            },
        });
    }

    /**
     * Getter để hiển thị giá tiền đẹp đẽ (ví dụ: $28)
     */
    get formattedPrice(): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(this.price);
    }

    /**
     * Tạo slug từ tên phòng (nếu cần dùng cho URL chi tiết phòng)
     */
    get slug(): string {
        return this.roomName
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/([^0-9a-z-\s])/g, '')
            .replace(/(\s+)/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
}
