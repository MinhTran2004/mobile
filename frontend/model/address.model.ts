export interface Address {
    _id: string,
    idAccount: string;
    name: string;
    phone: string;
    province: string;
    district: string;
    commune: string;
    detailAddress: string;
    status: boolean;
}

export class AddressModel {
    idAccount: string;
    name: string;
    phone: string;
    province: string;
    district: string;
    commune: string;
    detailAddress: string;
    status: boolean;

    constructor(idAccount: string, name: string, phone: string, province: string, district: string, commune: string, detailAddress: string, status: boolean) {
        this.idAccount = idAccount;
        this.name = name;
        this.phone = phone;
        this.province = province;
        this.district = district;
        this.commune = commune;
        this.detailAddress = detailAddress;
        this.status = status;
    }

    static checkNullData(name: string, phone: string, province: string, district: string, commune: string, detailAddress: string, errorName: (text: string) => void, errorPhone: (text: string) => void, errorProvince: (text: string) => void, errorDistrict: (text: string) => void, errorCommune: (text: string) => void, errDetalAddress: (text: string) => void) {
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
        const nameRegex = /^[A-Za-zÀ-ÿ0-9\s,-]+$/;

        if (name) {
            if (!nameRegex.test(name)) {
                errorName("Name không được chứa kí tự đặc biệt");
                return false
            } else if (name.length > 12 && name.length < 8) {
                errorName("Độ dài kí tự từ 8 - 12");
                return false
            } else {
                errorName("");
            }
        } else {
            errorName("Không được để trống ô nhập");
            return false
        }

        if (phone.length != 0) {
            if (!phoneRegex.test(phone)) {
                errorPhone("Không đúng định dạng hoặc độ dài kí tự");
                return false;
            } else {
                errorPhone("")
            }
        } else {
            errorPhone("Không để trống ô nhập")
            return false;
        }

        if (province.length == 0) {
            errorProvince("Chọn Thành Phó / Tỉnh");
            return false;
        } else {
            errorProvince("");
        }

        if (district.length == 0) {
            errorDistrict("Chọn Quận / Huyện");
            return false;
        } else {
            errorDistrict("");
        }

        if (commune.length == 0) {
            errorCommune("Chọn Phường / Xã");
            return false;
        } else {
            errorCommune("")
        }

        if (detailAddress) {
            errDetalAddress("");
        } else {
            errDetalAddress("Không được để trống ô nhập");
            return false
        }

        return true;
    }

}

