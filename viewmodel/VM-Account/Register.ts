
import Model_Account from "@model/Model_Account";
import SeviceAccount from "@service/Account_Service";
// import { useDispatch } from "react-redux";
import { useState } from "react"
// import { addAccount } from "../redux/actions/user";

export const ViewModelRegister = (navigation: any) => {
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState('a@gmai.com');
    const [password, setPassword] = useState('12345678');

    //Tao tai khoan
    const createAccount = async () => {
        const checkData = Model_Account.validateInputs(username, account, password);
        if (checkData) {
            const data = new Model_Account(username, account, password, 'Khách hàng', 'Đang sử dụng')
            const reponse = await SeviceAccount.createAccount(data);
            if(reponse){
                navigation.navigate('Login');
            }else{
                console.log('Lỗi tạo tài khoản');
            }
        } else {
            return;
        }
    }

    return {
        username, account, password,
        setUsername, setAccount, setPassword,
        createAccount,
    }
}