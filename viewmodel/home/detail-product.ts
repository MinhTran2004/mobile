import CartModel from "@/model/ModelCart";
import { CartService } from "@/service/CartService";

export const ViewModelDetailProduct = (navigation: any) => {
    
    const addProductToCart = async (idproduct: string) => {
        const cart = new CartModel("123", idproduct, 1, "Đang sử dụng");
        const reponse = await CartService.addProductToCart(cart);
        if (reponse) {
            navigation.navigator('Cart');
        } else {
            console.log('Thêm sản phẩm ko thành công');
        }
    }

    return {
        addProductToCart
    }
}