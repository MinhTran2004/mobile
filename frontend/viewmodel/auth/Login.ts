import { useState } from "react"
import ModelAccount from "@/model/account.model";
import SeviceAccount from "@/service/account.service";
import { useDispatch } from "react-redux";
import { Login } from "@/redux/action/login";
import { router } from "expo-router";

export const ViewModelLogin = (navigation: any) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [statusPassword, setStatusPassword] = useState(true);

    const dispatch = useDispatch();

    //Lay thong tin tai khoan theo account va password
    const checkLogin = async () => {
        const validateInputs = ModelAccount.validateInputs("login", "demodemo", account.trim(), password.trim(), undefined, setErrorAccount, setErrorPassword);

        if (validateInputs) {
            const reponse = await SeviceAccount.getAccountByAccountAndPassword(account, password);

            if (reponse) {
                dispatch(Login(reponse))
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'layoutHome' }]
                });
            } else {
                setErrorPassword("Mật khẩu hoặc tài khoản không chính xác");
            }
        }
    }

    return {
        account, password, errorAccount, errorPassword, statusPassword,
        setAccount, setPassword, setStatusPassword,
        checkLogin,
    }
}