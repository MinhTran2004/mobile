
import Model_Account from "@/model/ModelAccount";
import SeviceAccount from "@/service/AccountService";
import { useState } from "react"

export const ViewModelRegister = (navigation: any) => {
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState('a@gmai.com');
    const [password, setPassword] = useState('12345678');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');


    //Tao tai khoan
    const createAccount = async () => {
        const validateInputs = Model_Account.validateInputs("register", username.trim(), account.trim(), password.trim(), setErrorUsername, setErrorAccount, setErrorPassword);
        
        if (validateInputs) {
            const data = new Model_Account(username, account, password, 'Khách hàng', 'Đang sử dụng')
            const reponse = await SeviceAccount.createAccount(data);
            console.log(reponse);
            
            if(reponse){
                navigation.navigate('login');
            }
        }
    }

    return {
        username, account, password, errorUsername, errorAccount, errorPassword,
        setUsername, setAccount, setPassword,
        createAccount,
    }
}