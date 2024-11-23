import { Account } from "@/model/ModelAccount"

export const Login = (account:Account) => {
    return{
        type: 'LOGIN',
        payload: account,
    }
}

export const Logout = () => {
    return {
      type: 'LOGOUT',
    };
  };