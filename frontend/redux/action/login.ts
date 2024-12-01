import { Account } from "@/model/account.model"

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