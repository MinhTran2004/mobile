import InputEditText from "@/components/InputEditText";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { ViewModelLogin } from "@/viewmodel/auth/Login";

const Login = ({ navigation }: any) => {
    const viewmodel = ViewModelLogin(navigation);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                    <LogoApp style={{ width: 165, height: 170 }} />
                </View>

                <View style={{gap: 10}}>
                    <InputEditText
                        hint={"Nhập tài khoản"}
                        input={viewmodel.account}
                        event={(text) => viewmodel.setAccount(text)}
                        textError={viewmodel.errorAccount} />
                    <InputEditText
                        hint={"Nhập mật khẩu"}
                        input={viewmodel.password}
                        event={(text) => viewmodel.setPassword(text)}
                        textError={viewmodel.errorPassword} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => viewmodel.checkLogin()}>
                    <Text style={styles.text}>Đăng nhập</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 100,
        gap: 50
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default Login;