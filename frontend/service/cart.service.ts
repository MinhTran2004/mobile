import CartModel, { Cart } from "@/model/cart.model";
import axios from "axios";
import ProductService from "./product.service";

export class CartService {
    static url = "http://192.168.0.104:5000/Cart";

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
            const response = await axios.get(`${this.url}/getAllProductInCart`, {
                params: {
                    idAccount: idAccount,
                }
            });
            // Chắc chắn rằng response.data là mảng
            const reponse = response.data;
    
            if (reponse) {
                // Xử lý tất cả các sản phẩm trong giỏ hàng
                const promises = reponse.map(async (item: Cart) => {
                    const product = await ProductService.getProductById(item.idProduct);
                    return { cart: item, product };
                });
    
                // Đợi tất cả các Promise hoàn thành và trả về mảng đã được xử lý
                const result = await Promise.all(promises);
                return result;  // Trả về mảng kết quả đã có đầy đủ thông tin giỏ hàng và sản phẩm
            } else {
                return [];  // Trả về mảng rỗng nếu không có sản phẩm
            }
        } catch (err) {
            console.log(err);
            return [];  // Trả về mảng rỗng nếu có lỗi
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