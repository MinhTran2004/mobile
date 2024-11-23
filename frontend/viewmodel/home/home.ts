
import { Product } from "@/model/ModelProduct";
import { useEffect, useState } from "react"
import ProductService from "@/service/ProductSevice";

export const ViewModelHome = () => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');
    const [dataProductHorizontal, setPassetDataProductHorizontal] = useState<Product[]>([]);
    const [dataProductVertical, setDataProductVertical] = useState<Product[]>([]);
    
    const getAllProductByLimit = async () => {
        const reponse = await ProductService.getAllProductByLimit();
        setDataProductVertical(reponse);
        setPassetDataProductHorizontal(reponse);
    }

    useEffect(() => {
        getAllProductByLimit();
    }, [])

    return {
        modal, search, dataProductHorizontal, dataProductVertical,
        setSearch, setModal,
    }
}