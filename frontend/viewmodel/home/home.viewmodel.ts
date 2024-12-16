
import { Product } from "@/model/product.model";
import FavoriteService from "@/service/favorite.service";
import ProductService from "@/service/product.service";
import { useEffect, useRef, useState } from "react"
import PagerView from "react-native-pager-view";
import { useSelector } from "react-redux";

export const ViewModelHome = () => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState('');
    const [dataProductHorizontal, setPassetDataProductHorizontal] = useState<Product[]>([]);
    const [dataProductVertical, setDataProductVertical] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const getAllProductByLimit = async () => {
        const reponse = await ProductService.getAllProductByLimit();
        setDataProductVertical(reponse);
        setPassetDataProductHorizontal(reponse);
    }
    // const getFavorite = async () => {
    //     const selector = useSelector((state: any) => state.auth.account._id);
    //     const reponse = await FavoriteService.getFavorite(selector);
    //    console.log("this is favorite data ",reponse);
    // }
    

    useEffect(() => {
        getAllProductByLimit();
        // getFavorite();
    }, [])

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
        setSearch, setModal, setLoading,
    }
}