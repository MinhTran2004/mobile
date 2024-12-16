import { Cart } from "@/model/cart.model";
import { Product } from "@/model/product.model";
import { CartService } from "@/service/cart.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface TypeCart {
    cart: Cart,
    product: Product,
}

export const ViewModelCart = () => {
    const selector = useSelector((state:any) => state?.auth?.account?._id);
    const [data, setData] = useState<TypeCart[]>([])
    const [total, setToTal] = useState('');

    const getAllProductInCart = async () => {
        const reponse = await CartService.getAllProductInCart(selector);
        calculate(reponse);
        setData(reponse);
    }

    const updateQuantityById = async (_idCart: string, quantity: number, status: boolean) => {
        if (status) {
            const reponse = await CartService.updateQuantityById(_idCart, selector, quantity + 1);
            if (reponse) {
                calculate(reponse);
            }
            setData(reponse || []);
        } else {
            if (quantity > 1) {
                const reponse = await CartService.updateQuantityById(_idCart, selector, quantity - 1);
                if (reponse) {
                    calculate(reponse);
                }
                setData(reponse || []);
            } else {
                console.log('Số lượng tối thiều là 1');
            }
        }
    }

    const calculate = (reponse: any) => {
        const sum = reponse.reduce((sum: any, item: any) => {
            return sum + (item.cart.quantity * item.product.price);
        }, 0)
        setToTal(sum);
    }

    const deleteCartById = async (idCart: string) => {
        const reponse = await CartService.deleteCartById(idCart);
        if (reponse) {
            await getAllProductInCart();
        } else {
            console.log('Xóa thất bại');
        }
        return;
    }


    useEffect(() => {
        getAllProductInCart()
    }, []);

    return {
        data, total,
        updateQuantityById, deleteCartById,
    }
}