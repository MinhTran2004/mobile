import axios from "axios";

export default class CouponService {
    static url = "http://192.168.5.26:5000/coupon";

    static getAllCoupon = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllCoupon`)).data;
            return reponse;            
        }catch(err){
            console.log(err);
        }
    }
}