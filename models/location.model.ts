export class Location {
    id: number;
    name: string;
    city: string;
    country: string;
    image: string;

    constructor(id: number, name: string, city: string, country: string, image: string) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.image = image;
    }

    static fromJson(json: any): Location {
        return new Location(
            json.id,
            json.tenViTri, // Map: tenViTri -> name
            json.tinhThanh, // Map: tinhThanh -> city
            json.quocGia, // Map: quocGia -> country
            json.hinhAnh // Map: hinhAnh -> image
        );
    }

    get slug(): string {
        return this.city
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu tiếng Việt
            .replace(/[đĐ]/g, 'd')
            .replace(/([^0-9a-z-\s])/g, '') // Loại bỏ ký tự đặc biệt
            .replace(/(\s+)/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
            .replace(/-+/g, '-') // Loại bỏ gạch ngang thừa
            .replace(/^-+|-+$/g, ''); // Trim gạch ngang ở 2 đầu
    }
}
