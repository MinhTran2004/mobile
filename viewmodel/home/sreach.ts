import { Product } from "@/model/ModelProduct";
import ProductService from "@/service/ProductSevice";
import { useEffect, useState } from "react"

export const ViewModelSearch = () => {
    const [name, setName] = useState("");
    const [dataProduct, setDataProduct] = useState<Product[]>([]);

    const getProductByName = async () => {
        const reponse = await ProductService.getProductByName(name);
        setDataProduct(reponse);
        console.log(reponse);
    }

    useEffect(() => {
        getProductByName();
    },[name])

    return {
        name, dataProduct,
        setName, getProductByName,
    }
}