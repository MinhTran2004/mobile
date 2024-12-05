const initialState = {
    coupon: null,
  };
  
  const couponReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          coupon: action.payload,
        };
      case 'DELETE':
        return {
          ...state,
          coupon: null,
        };
      default:
        return state;
    }
  };
  
  export default couponReducer;
  