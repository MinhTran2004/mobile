
import Model_Account from "@/model/account.model";
import SeviceAccount from "@/service/account.service";
import { useState } from "react"

export const ViewModelRegister = (navigation: any) => {
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState('admin@gmai.com');
    const [password, setPassword] = useState('123456');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    //Tao tai khoan
    const createAccount = async () => {
        const validateInputs = Model_Account.validateInputs("register", username.trim(), account.trim(), password.trim(), setErrorUsername, setErrorAccount, setErrorPassword);

        if (validateInputs) {
            const data = new Model_Account(username.trim(), account.trim(), password.trim(), 'Khách hàng', 'Đang sử dụng')
            const reponse = await SeviceAccount.createAccount(data);
            if (reponse.status) {
                navigation.navigate('login');
            } else {
                setErrorAccount('Tài khoản đã tồn tại');
            }
        }
    }

    return {
        username, account, password, errorUsername, errorAccount, errorPassword,
        setUsername, setAccount, setPassword,
        createAccount,
    }
}