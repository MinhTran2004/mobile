import axios from "axios";


export default class CouponService {
    static url = "http://192.168.5.25:5000/coupon";

    static getAllCouponByPrice = async (total:string) => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllCouponByPrice`, {
                params:{
                    total:total,
                }
            })).data;
            return reponse;            
        }catch(err){
            console.log(err);
        }
    }

    static getAllCoupon = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllCoupon`)).data;
            return reponse || [];            
        }catch(err){
            console.log(err);
        }
    }
}