import { useState } from "react"
import ModelAccount from "@/model/ModelAccount";
import SeviceAccount from "@/service/AccountService";

export const ViewModelLogin = (navigation: any) => {
    const [account, setAccount] = useState('a@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    //Lay thong tin tai khoan theo account va password
    const checkLogin = async () => {
        const validateInputs = ModelAccount.validateInputs("login", "demodemo", account.trim(), password.trim(), undefined, setErrorAccount, setErrorPassword);
        
        if (validateInputs) {
            const reponse = await SeviceAccount.getAccountByAccountAndPassword(account, password);
            if (reponse) {
                navigation.navigate('layoutHome');
            } else {
                setErrorPassword("Mật khẩu hoặc tài khoản không chính xác");
            }
        }
    }

    return {
        account, password, errorAccount, errorPassword,
        setAccount, setPassword,
        checkLogin,
    }
}