// reducers/authReducer.js
const initialState = {
  account: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        account: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        account: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
