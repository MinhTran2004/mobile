import { useState } from "react"
import ModelAccount from "@/model/account.model";
import SeviceAccount from "@/service/account.service";
import { useDispatch } from "react-redux";
import { Login } from "@/redux/action/login";

export const ViewModelLogin = (navigation: any) => {
    const [account, setAccount] = useState('admin@gmail.com');
    const [password, setPassword] = useState('123456');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const dispatch = useDispatch();

    //Lay thong tin tai khoan theo account va password
    const checkLogin = async () => {
        const validateInputs = ModelAccount.validateInputs("login", "demodemo", account.trim(), password.trim(), undefined, setErrorAccount, setErrorPassword);

        if (validateInputs) {
            const reponse = await SeviceAccount.getAccountByAccountAndPassword(account, password);

            if (reponse) {
                dispatch(Login(reponse))
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