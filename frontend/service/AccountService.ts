import axios from "axios";
import Model_Account from "../model/ModelAccount";

class SeviceAccount {
    static url = "http://192.168.1.10:5000/account";
    static createAccount = async (data:Model_Account) => {
        try{
            const reponse = (await axios.post(`${this.url}/createAccount`, data)).data;
            console.log(reponse);
            
            if(reponse.status === "success"){
                return true;
            }else{
                return false;
            }

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