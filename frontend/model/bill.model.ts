export interface Bill {
    _id: string;
    idUser: string;
    idCart: string[];
    idDelivery: string;
    idAdress: string;
    idCoupon: string
    paymentMethod: string;
    totalCost: number;
}

export default class BillModel {

    idUser?: string; // co
    idCart?: string[]; // co
    paymentMethod?: string;//co
    idDelivery?: string;//co
    idAddress?: string;// co 
    idCoupon?: string;// co 
    totalCost?: number; // co
    status?: string; // co
    constructor(idUser: string,
        totalCost: number,
        idCart: string[],
        status: string,
        idDelivery: string,
        idAddress: string,
        paymentMethod: string,
        idCoupon?: string) {
        this.idUser = idUser;
        this.idCart = idCart;
        this.idDelivery = idDelivery;
        this.idAddress = idAddress;
        this.paymentMethod = paymentMethod;
        this.idCoupon  = idCoupon;
        this.totalCost = totalCost
        this.status = status;
    }
}