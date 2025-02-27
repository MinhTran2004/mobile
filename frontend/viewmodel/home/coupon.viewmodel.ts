import { Coupon } from "@/model/coupon.model"
import CouponService from "@/service/coupon.service";
import { useEffect, useState } from "react"

const ViewModelCoupon = (total:string) => {
    const [dataCoupon, setDataCoupon] = useState<Coupon[]>([]);

    const getAllCouponByPrice = async (total:string) => {
        const reponse = await CouponService.getAllCouponByPrice(total);
        
        if(reponse.lenght != 0) {
            setDataCoupon(reponse)
        }else{
            return [];
        }
    }

    useEffect(() => {   
        getAllCouponByPrice(total);
    }, [])

    return {
        dataCoupon,
    }
}

export default ViewModelCoupon;