import CartModel, { Cart } from "@/model/cart.model";
import axios from "axios";
import ProductService from "./product.service";

export class CartService {
    static url = "http://192.168.12.243:5000/Cart";

    static addProductToCart = async (data: CartModel) => {
        try {
            const reponse = (await axios.post(`${this.url}/addProductToCart`, data)).data;
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static getAllProductInCart = async (idAccount: string) => {
        try {
            const reponse = (await axios.get(`${this.url}/getAllProductInCart?limit=${10}`, {
                params: {
                    idAccount: idAccount,
                }
            })).data;
            if (reponse) {
                const promises = await reponse.map(async (item: Cart) => {
                    const product = await ProductService.getProductById(item.idProduct);
                    return { cart: item, product };
                });
                const promise = await Promise.all(promises);
                return promise;
            } else {
                return [];
            }
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    static updateQuantityById = async (id: string, idAccount:string, quantity: number) => {
        try {
            const reponse = (await axios.patch(`${this.url}/updateQuantityById`, {
                id: id,
                quantity: quantity,
            }));

            if (reponse) {
                return await this.getAllProductInCart(idAccount);
            } else {
                console.log('Lỗi thay đổi số lượng');
                return [];
            }
        } catch (err) {
            console.log(err);
        }
    }

    static deleteCartById = async (idCart: string) => {
        try {
            const reponse = (await axios.delete(`${this.url}/deleteCartById/${idCart}`)).data;
            return reponse.status;
        } catch (err) {
            console.log(err);
        }
    }

}