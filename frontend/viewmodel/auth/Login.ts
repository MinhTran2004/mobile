import { useState } from "react"
import ModelAccount from "@/model/account.model";
import { useDispatch } from "react-redux";
import { Login } from "@/redux/action/login";
import { auth } from "@/config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const ViewModelLogin = (navigation: any) => {
    const [account, setAccount] = useState('tranminh209204@gmail.com');
    const [password, setPassword] = useState('hihi2004');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [statusPassword, setStatusPassword] = useState(true);
    const [dialogError, setDialogError] = useState(false);

    const dispatch = useDispatch();

    //Lay thong tin tai khoan theo account va password
    const checkLogin = async () => {
        const validateInputs = ModelAccount.validateInputs(account.trim(), password.trim(), setErrorAccount, setErrorPassword);

        if (validateInputs) {
            try {
                const userCredential = (await signInWithEmailAndPassword(auth, account, password)).user;


                if (userCredential) {
                    const user = {
                        _id: userCredential.uid,
                        account: userCredential.email || "",
                    }
                    dispatch(Login(user));
                    navigation.navigate('layoutHome');
                }
            } catch (err: any) {
                if (err.code === "auth/invalid-credential") {
                    setErrorPassword('Mật khẩu không chính xác');
                } else if(err.code === "auth/user-disabled"){
                    setDialogError(true);
                } else {
                    console.log(err);
                }
            }
        }
    }

    return {
        account, password, errorAccount, errorPassword, statusPassword,
        setAccount, setPassword, setStatusPassword, dialogError, setDialogError,
        checkLogin,
    }
}