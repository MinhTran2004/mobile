import { Product } from "@/model/product.model";
import ProductService from "@/service/product.service";
import { useEffect, useState } from "react"

export const ViewModelSearch = () => {
    const [name, setName] = useState("");
    const [dataProduct, setDataProduct] = useState<Product[]>([]);

    const getAllProduct = async () => {
        const reponse = await ProductService.getAllProduct();
        setDataProduct(reponse);
    }

    const getProductByName = async () => {
        const reponse = await ProductService.getProductByName(name);
        setDataProduct(reponse);
    }

    useEffect(() => {
        getProductByName();
    }, [name])

    useEffect(() => {
        getAllProduct();
    }, [])

    return {
        name, dataProduct,
        setName, getProductByName,
    }
}