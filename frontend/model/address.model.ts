export interface Address {
    _id: string,
    idAccount: string;
    name:string;
    phone:string;
    detailAddress: string;
    status: string;
}

export class AddressModel {
    idAccount: string;
    name:string;
    phone:string;
    detailAddress: string;
    status: string;

    constructor(idAccount: string,name:string, phone:string, detailAddress: string, status: string) {
        this.idAccount = idAccount;
        this.name = name;
        this.phone = phone;
        this.detailAddress = detailAddress;
        this.status = status;
    }
}