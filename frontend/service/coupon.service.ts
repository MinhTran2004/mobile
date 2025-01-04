import axios from "axios";


export default class CouponService {
    static url = "http://192.168.1.146:5000/coupon";

    static getAllCoupon = async (total:string) => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllCoupon`, {
                params:{
                    total:total,
                }
            })).data;
            return reponse;            
        }catch(err){
            console.log(err);
        }
    }
}