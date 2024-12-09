interface dataCoupon {
    _id: string,
    disscount: string,
}

interface dataAddress {
    name: string,
    phone: string,
    detailAddress: string,
};

export interface Bill {
    _id: string;
    account: string;
    dataProduct: string[];
    paymentMethod: string;
    transport: string;
    address: dataAddress;
    coupon: dataCoupon;
    totalCost: string;
    createAt:string;
    status: string;
}

export default class BillModel {
    account: string;
    dataProduct: string[];
    paymentMethod: string;
    transport: string;
    address: dataAddress;
    coupon: dataCoupon;
    totalCost: string;
    createAt:string;
    status: string;

    constructor(account: string, dataProduct: string[], paymentMethod: string, transport: string, address: dataAddress, coupon: dataCoupon, totalCost: string, createAt: string,status: string) {
        this.account = account;
        this.dataProduct = dataProduct;
        this.paymentMethod = paymentMethod;
        this.transport = transport;
        this.address = address;
        this.coupon = coupon;
        this.totalCost = totalCost;
        this.createAt = createAt;
        this.status = status;
    }
}
