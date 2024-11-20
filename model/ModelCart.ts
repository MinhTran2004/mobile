export interface Cart {
    _id: string;
    idAccount: string;
    idProduct: string;
    quantity: number;
    status: string;
    createAt: string;
}

export default class CartModel {
    idAccount: string;
    idProduct: string;
    quantity: number;
    status: string;

    constructor(idAccount: string, idProduct: string, quantity: number, status: string) {
        this.idAccount = idAccount;
            this.idProduct = idProduct;
            this.quantity = quantity;
            this.status = status;
    }
}