import CartModel from "@/model/cart.model";
import { CartService } from "@/service/cart.service";
import { useSelector } from "react-redux";

export const ViewModelDetailProduct = () => {
    const selector = useSelector((state: any) => state.auth.account._id);
    
    const addProductToCart = async (idproduct: string) => {
        const cart = new CartModel(selector, idproduct, 1, "Đang sử dụng");
        const reponse = await CartService.addProductToCart(cart);
        if (reponse) {
            console.log('Thêm thành công');
        } else {
            console.log('Thêm sản phẩm ko thành công');
        }
    }

    return {
        addProductToCart
    }
}