import SeviceAccount from "@service/Account_Service";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addAccount } from "../../redux/actions/account";

export const ViewModelLogin = (navigation: any) => {
    const [account, setAccount] = useState('a@gmail.com');
    const [password, setPassword] = useState('12345678');

    const [isChecked, setIsChecked] = useState(true);
    const dispatch = useDispatch();
    // const selector = useSelector((state:any) => state.account.data);

    //Lay thong tin tai khoan theo account va password
    const getAccountByAccountAndPassword = async () => {
        const reponse = await SeviceAccount.getAccountByAccountAndPassword(account, password);
        if (reponse) {
            dispatch(addAccount(reponse));
            navigation.navigate('LayoutBottomTabs');
        }else{
            console.log("Sai tai khoan, mat khau");
        }
    }

    return {
        account, password, isChecked,
        setAccount, setPassword, setIsChecked,
        getAccountByAccountAndPassword,
    }
}