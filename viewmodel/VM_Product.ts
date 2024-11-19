import ProductService from "@service/Product_Sevice"
import { useEffect, useState } from "react";

export const ViewModelProduct = (navigation: any) => {
    const [data, setData] = useState([]);

    const getAllProductByLimit = async () => {
        const reponse = await ProductService.getAllProductByLimit();
        setData(reponse.product);
    }

    useEffect(() => {
        getAllProductByLimit();
    }, [])

    return {
        data
    }
}

export default ViewModelProduct;