import CartModel from "@/model/cart.model";
import { CartService } from "@/service/cart.service";
import { useState } from "react";
import { useSelector } from "react-redux";

export const ViewModelDetailProduct = () => {
    const selector = useSelector((state: any) => state?.auth?.account?._id);

    const [dialog, setDialog] = useState(false);
    const [dialogError, setDialogError] = useState(false);
    const [dialog2, setDialog2] = useState(false);

    const addProductToCart = async (idproduct: string) => {
        const cart = new CartModel(selector, idproduct, 1, "Đang sử dụng");
        const reponse = await CartService.addProductToCart(cart);
        if (reponse) {
            setDialog2(true);
        } else {
            setDialogError(true);
        }
    }

    return {
        addProductToCart,dialog, setDialog,dialog2, setDialog2,dialogError, setDialogError
    }
}