
import { Product } from "@/model/product.model";
import ProductService from "@/service/product.service";
import { useEffect, useRef, useState } from "react"
import PagerView from "react-native-pager-view";

export const ViewModelHome = () => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');
    const [dataProductHorizontal, setPassetDataProductHorizontal] = useState<Product[]>([]);
    const [dataProductVertical, setDataProductVertical] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const getAllProductByLimit = async (page: any) => {
        setLoading(true);
        setPage(page + 1);
        try {
            const reponse = await ProductService.getAllProductByLimit(page);
            if (reponse.length > 0) {
                setDataProductVertical((data) => [...data, ...reponse]);
                // setPassetDataProductHorizontal(reponse);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const handleEndReached = () => {
        if (!loading) {  
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        getAllProductByLimit(page);
    }, [page]);

    // useEffect(() => {
    //     getAllProductByLimit(page);
    // }, [])

    // chuyen anh slide
    const pageView = useRef<PagerView>(null);
    const [initialPage, setInitialPage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (initialPage === 2) {
                setInitialPage(0)
                pageView.current?.setPage(initialPage)
            } else {
                setInitialPage(initialPage + 1)
                pageView.current?.setPage(initialPage)
            }
        }, 3000)
    }, [initialPage])

    return {
        modal, search, dataProductHorizontal, dataProductVertical, pageView, initialPage, loading,
        setSearch, setModal, setLoading, handleEndReached,
    }
}