export interface Account {
    _id: string;
    username: string;
    account: string;
    password: string;
    image: string;
    phone: string;
    role: string;
    createdAt: String;
    updatedAt: String;
    status: string;
}

export default class ModelAccount {
    username: string;
    account: string;
    password: string;
    role: string;
    status: string;

    constructor(username: string = "", account: string = "", password: string = "", role: string = "", status: string = "") {
        this.username = username;
        this.account = account;
        this.password = password;
        this.role = role;
        this.status = status;
    }

    // check data
    static validateInputs = (status: string, username?: string, account?: string, password?: string, setErrorUsername?: (error: string) => void, setErrorAccount?: (error: string) => void, setErrorPassword?: (error: string) => void) => {
        const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //mail
        const regexSpecialOrSpace = /[!@#$%^&*(),.?":{}|<>]|\s/g;

        // username
        if (status === "register") {
            if (username) {
                if (regexSpecialOrSpace.test(username)) {
                    setErrorUsername && setErrorUsername("Username không được chứa kí tự đặc biệt");
                    return false
                } else if (username.length > 12 && username.length < 8) {
                    setErrorUsername && setErrorUsername("Độ dài kí tự từ 8 - 12");
                    return false
                } else {
                    setErrorUsername && setErrorUsername("");
                }
            } else {
                setErrorUsername && setErrorUsername("không được để trống ô nhập");
                return false
            }
        }

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