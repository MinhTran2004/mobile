export interface Coupon {
    _id?: string;
    name?: string;
    image?: string;
    discountType?: string;
    discountValue?: string;
    maxDisCount?: number;
    quantity?: number;
    condition?: number;
    startDate?: string;
    endDate?: string;
    describe?: string;
    status?: string;
}

export default class ModelCoupon {
    name: string;
    image: string;
    discountType: string;
    discountValue: string;
    maxDisCount: number;
    quantity: number;
    condition: number;
    startDate: string;
    endDate: string;
    describe: string;
    status: string;

    constructor(name: string, image: string, discountType: string, discountValue: string, maxDisCount: number, quantity: number, condition: number, startDate: string, endDate: string, describe: string, status: string) {
        this.name = name;
        this.image = image;
        this.discountType = discountType;
        this.discountValue = discountValue;
        this.maxDisCount = maxDisCount;
        this.quantity = quantity;
        this.condition = condition;
        this.startDate = startDate;
        this.endDate = endDate;
        this.describe = describe;
        this.status = status;
    }
}