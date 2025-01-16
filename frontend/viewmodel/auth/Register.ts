
import { addDoc, auth, collection, db } from "@/config/firebaseConfig";
import Model_Account from "@/model/account.model";
import { GetDay } from "@/utils/GetDay";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import { useState } from "react"

export const ViewModelRegister = (navigation: any) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [dialog, setDialog] = useState(false);
    const [dialogError, setDialogError] = useState(false);

    //Tao tai khoan
    const createAccount = async () => {
        const validateInputs = Model_Account.validateInputs(account.trim(), password.trim(), setErrorAccount, setErrorPassword);

        if (validateInputs) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, account, password);
                if (userCredential) {
                    setDialog(true);
                }
            } catch (e: any) {
                if (e.code === 'auth/email-already-in-use') {
                    setDialogError(true);
                } else {
                    console.log(e);
                };
            }
        }
    }

    return {
        account, password, errorAccount, errorPassword, dialog, dialogError,
        setAccount, setPassword, setDialog, setDialogError,
        createAccount,
    }
}