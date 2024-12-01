import { Coupon } from "@/model/coupon.model"
import CouponService from "@/service/coupon.service";
import { useEffect, useState } from "react"

const ViewModelCoupon = () => {
    const [dataCoupon, setDataCoupon] = useState<Coupon[]>([]);

    const getAllCoupon = async () => {
        const reponse = await CouponService.getAllCoupon();
        
        if(reponse.lenght != 0) {
            setDataCoupon(reponse)
        }else{
            return [];
        }
    }

    useEffect(() => {   
        getAllCoupon();
    }, [])

    return {
        dataCoupon,
    }
}

export default ViewModelCoupon;