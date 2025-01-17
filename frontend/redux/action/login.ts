import { Account } from "@/model/account.model"

export const Login = (account:Account) => {
    return{
        type: 'LOGIN',
        payload: account,
    }
}

export const Logout = (data:any) => {
    return {
      type: 'LOGOUT',
      payload: data
    };
  };