
import { Product } from "@model/Model_Product";
import ProductService from "@service/Product_Sevice";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export const ViewModelHome = (navigation: any) => {
    const [search, setSearch] = useState('');
    const [dataProductHorizontal, setPassetDataProductHorizontal] = useState<Product[]>([]);
    const [dataProductVertical, setDataProductVertical] = useState<Product[]>([]);
    
    //Chua id nguoi dung
    const selector = useSelector((state:any) => state.account.data[0]);

    const getAllProductByLimit = async () => {
        const reponse = await ProductService.getAllProductByLimit();
        setDataProductVertical(reponse);
        setPassetDataProductHorizontal(reponse);
    }

    useEffect(() => {
        getAllProductByLimit();
    }, [])

    return {
        search, dataProductHorizontal, dataProductVertical,
        setSearch,
    }
}