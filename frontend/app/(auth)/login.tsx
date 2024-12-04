import InputEditText from "@/components/InputEditText";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { ViewModelLogin } from "@/viewmodel/auth/Login";
import AppHeader from "@/components/AppHeader";
import ButtonModel from "@/components/ButtonModel";

const Login = ({ navigation }: any) => {
    const viewmodel = ViewModelLogin(navigation);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <AppHeader iconLeft="left" title="Đăng Nhập" iconRight="none" onPressIconLeft={() => navigation.goBack()} />

                <View style={styles.container}>

                    <View style={{ alignItems: 'center' }}>
                        <LogoApp style={{ width: 165, height: 170 }} />
                    </View>

                    <View style={{ gap: 10 }}>
                        <InputEditText
                            placeholder={"Nhập tài khoản"}
                            value={viewmodel.account}
                            onChangeText={(text) => viewmodel.setAccount(text)}
                            textError={viewmodel.errorAccount} />
                        <InputEditText
                            placeholder={"Nhập mật khẩu"}
                            value={viewmodel.password}
                            onChangeText={(text) => viewmodel.setPassword(text)}
                            textError={viewmodel.errorPassword} />
                    </View>

                    <ButtonModel
                        label="Đăng nhập"
                        onPress={() => viewmodel.checkLogin()}
                        buttonStyle={{ backgroundColor: '#4C1B1B' }}
                        textStyle={{ color: 'white' }}
                        status="single" />
                </View>
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
        paddingTop: 20,
        paddingHorizontal: 20,
        gap: 50,
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