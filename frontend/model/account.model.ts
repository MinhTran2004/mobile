export interface Account {
    _id: string;
    account: string;
    password: string;
    role: string;
    createdAt: String;
    status: string;
}

export default class ModelAccount {
    account: string;
    password: string;
    role: string;
    status: string;

    constructor( account: string = "", password: string = "", role: string = "", status: string = "") {
        this.account = account;
        this.password = password;
        this.role = role;
        this.status = status;
    }

    toJSON() {
        const account = {
            account: this.account,
            password: this.password,
            role: this.role,
            status: this.status
        }
        return account
    }

    // check data
    static validateInputs = (
        account?: string,
        password?: string,
        setErrorAccount?: (error: string) => void,
        setErrorPassword?: (error: string) => void
    ) => {
        const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //mail
        const regexSpecialOrSpace = /[!@#$%^&*(),.?":{}|<>]|\s/g;

        // accout
        if (account) {
            if (!regexMail.test(account)) {
                setErrorAccount && setErrorAccount("không đúng định dạng Mail");
                return false
            } else {
                setErrorAccount && setErrorAccount("");
            }
        } else {
            setErrorAccount && setErrorAccount("không được để trông ô nhập");
            return false
        }

        // password
        if (password) {

            if (password.length < 5 || password.length > 16) {
                setErrorPassword && setErrorPassword("Độ dài kí tự trong khoảng 6 - 15");
                return false
            } else {
                setErrorPassword && setErrorPassword("");
            }
        } else {
            setErrorPassword && setErrorPassword("không được để trông ô nhập");
            return false
        }

        return true;
    };
}