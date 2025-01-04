
import { addDoc, collection, db } from "@/config/firebaseConfig";
import Model_Account from "@/model/account.model";
import { GetDay } from "@/utils/GetDay";
import { getDocs, query, where } from "firebase/firestore";
import { useState } from "react"

export const ViewModelRegister = (navigation: any) => {
    const [username, setUsername] = useState('');
    const [account, setAccount] = useState('hihi2004@gmail.com');
    const [password, setPassword] = useState('123456');
    const [errorAccount, setErrorAccount] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [dialog, setDialog] = useState(false);

    //Tao tai khoan
    const createAccount = async () => {
        const validateInputs = Model_Account.validateInputs( account.trim(), password.trim(), setErrorAccount, setErrorPassword);

        if (validateInputs) {
            const data = new Model_Account(account.trim(), password.trim(), 'Khách hàng', 'Đang sử dụng')

            try {
                const accountsCollection = collection(db, 'accounts');

                const q = query(
                    accountsCollection,
                    where("account", "==", account),
                );

                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    const docRef = await addDoc(accountsCollection, {
                        account: account.trim(),
                        password: password.trim(),
                        role: 'Khách hàng',
                        status: 'Đang sử dụng',
                        createAt: GetDay(),
                    });
                    if(docRef){
                        setDialog(true);
                    }else{
                        console.log('Thêm thất bại');
                    }
                } else {
                    setErrorAccount('Tài khoản đã tồn tại');
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    return {
        username, account, password, errorAccount, errorPassword, dialog,
        setUsername, setAccount, setPassword, setDialog,
        createAccount,
    }
}