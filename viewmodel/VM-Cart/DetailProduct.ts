import CartModel from "@model/Model_Cart";
import { CartService } from "@service/Cart_Service";
import { useSelector } from "react-redux";

export const ViewModelDetailProduct = (navigation: any) => {

    const selector = useSelector((state: any) => state.account.data[0]);

    const addProductToCart = async (idproduct:string) => {
        const cart = new CartModel(selector._id, idproduct, 1, "Đang sử dụng");
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