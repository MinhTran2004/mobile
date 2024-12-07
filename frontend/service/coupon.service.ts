import axios from "axios";
import serviceUrl from "@/service/serviceUrl"


export default class CouponService {
    static url = `http://${serviceUrl.ipv4}:5000/coupon`;

    static getAllCoupon = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllCoupon`)).data;
            return reponse;            
        }catch(err){
            console.log(err);
        }
    }
}