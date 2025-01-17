import { useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/config/firebaseConfig";
import { fetchSignInMethodsForEmail, sendPasswordResetEmail } from "firebase/auth";

export const ViewModelForgotPassword = (navigation: any) => {
    const [account, setAccount] = useState('');
    const [errorAccount, setErrorAccount] = useState('');
    const [dialog, setDialog] = useState(false);
    const [dialogError, setDialogError] = useState(false);

    const resetPassword = async () => {
        if (account.trim().length != 0) {
            try {
                const reposne = await sendPasswordResetEmail(auth, account.trim());
                setDialog(true);                
            } catch (e) {
                console.log(e);
                setDialogError(true);
            }

        } else {
            setErrorAccount('')
        }

    }

    return {
        account, errorAccount, dialog, dialogError,
        setAccount, resetPassword, setDialog, setDialogError,
    }
}