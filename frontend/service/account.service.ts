import axios from "axios";
import Model_Account from "../model/account.model";

class SeviceAccount {
    static url = "http://172.20.10.3:5000/account";
    static createAccount = async (data:Model_Account) => {
        try{
            const reponse = (await axios.post(`${this.url}/createAccount`, data)).data;
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
    static getAccountByAccountAndPassword = async (account:string, password:string) => {
        try{
            const reponse = (await axios.get(`${this.url}/checkLogin?account=${account}&password=${password}`)).data
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
}
export default SeviceAccount;