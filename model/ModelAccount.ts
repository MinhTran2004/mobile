import { Alert } from "react-native";

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

export default class Model_Account {
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
    static validateInputs = (username?: string, account?: string, password?: string) => {
        const specialCharPattern = /[^a-zA-Z0-9]/;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let check = true;
        if (!username) {
            Alert.alert("Lỗi", "Không để trống username");
            check = false;
        } else if (specialCharPattern.test(username)) {
            Alert.alert("Lỗi", "Không nhập kí tự đặc biệt");
            check = false;
        }
        if (check) {
            if (!account) {
                Alert.alert("Lỗi", "Tài khoản không được để trống.");
                check = false;
            } else if (!regex.test(account)) {
                Alert.alert("Lỗi", "Tài khoản chưa đúng định dạng mail");
                check = false;
            }
        }
        if (check) {
            if (!password) {
                Alert.alert("Lỗi", "Mật khẩu không được để trống.");
                check = false;
            } else if (password.length < 6 && password.length > 20) {
                Alert.alert("Lỗi", "Độ dài mật khẩu từ 6 - 20.");
                check = false;
            }
        }
        return check;
    };
}