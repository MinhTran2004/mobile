import { useState } from "react"
import ModelAccount from "@/model/account.model";
import SeviceAccount from "@/service/account.service";
import { useDispatch } from "react-redux";
import { Login } from "@/redux/action/login";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

export const ViewModelLogin = (navigation: any) => {
    const [account, setAccount] = useState('admin@gmail.com');
    const [password, setPassword] = useState('123456');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [statusPassword, setStatusPassword] = useState(true);

    const dispatch = useDispatch();

    //Lay thong tin tai khoan theo account va password
    const checkLogin = async () => {
        const validateInputs = ModelAccount.validateInputs(account.trim(), password.trim(), setErrorAccount, setErrorPassword);

        if (validateInputs) {
            const accountsCollection = collection(db, "accounts");

            const q = query(
                accountsCollection,
                where("account", "==", account),
                where("password", "==", password),
            )

            const querySnapshot = await getDocs(q);

            if(querySnapshot.empty){
                setErrorPassword("Mật khẩu hoặc tài khoản không chính xác");
            }else{
                const userData = querySnapshot.docs[0].data();

                const convertData = {
                    _id: querySnapshot.docs[0].id,
                    account: userData.account,
                    password: userData.password,
                    role: userData.role,
                    createdAt: userData.createdAt,
                    status: userData.status,
                }
                
                dispatch(Login(convertData))
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'layoutHome' }]
                });
            }
        }
    }

    return {
        account, password, errorAccount, errorPassword, statusPassword,
        setAccount, setPassword, setStatusPassword,
        checkLogin,
    }
}