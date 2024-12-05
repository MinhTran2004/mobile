import { Coupon } from "@/model/coupon.model";

export const addCoupon = (coupon:Coupon) => {
    return{
        type: 'ADD',
        payload: coupon,
    }
}

export const deleteCoupon = () => {
    return {
      type: 'DELETE',
      payload: null,
    };
  };