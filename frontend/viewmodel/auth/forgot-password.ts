import { useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/config/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export const ViewModelForgotPassword = (navigation: any) => {
    const [account, setAccount] = useState('tranminh209204@gmail.com');
    const [errorAccount, setErrorAccount] = useState('');

    //Lay thong tin tai khoan theo account va password
    const resetPassword = async () => {
        if (account.trim().length != 0) {
            const accountsCollection = collection(db, "accounts");

            const q = query(
                accountsCollection,
                where("account", "==", account),
            )

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setErrorAccount("Tài khoản không tồn tại");
            } else {
                const account = querySnapshot.docs[0].data().account;
                await sendPasswordResetEmail(auth, account);
            }
        }

    }

    return {
        account, errorAccount,
        setAccount, resetPassword,
    }
}