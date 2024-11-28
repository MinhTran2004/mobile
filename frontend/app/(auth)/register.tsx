import InputEditText from "@/components/InputEditText";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { ViewModelRegister } from "@/viewmodel/auth/Register";
import AppHeader from "@/components/AppHeader";

const Register = ({ navigation }: any) => {
    const viewmodel = ViewModelRegister(navigation);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <AppHeader iconLeft="left" title="Đăng ký" iconRight="none" onPressIconLeft={()=>navigation.goBack()}/>

                <View style={styles.container}>

                    <View style={{ alignItems: 'center' }}>
                        <LogoApp style={{ width: 165, height: 170 }} />
                    </View>

                    <View style={{ gap: 10 }}>
                        <InputEditText hint={"Nhập tên dùng"} input={viewmodel.username} event={(text) => viewmodel.setUsername(text)} textError={viewmodel.errorUsername} />
                        <InputEditText hint={"Nhập tài khoản"} input={viewmodel.account} event={(text) => viewmodel.setAccount(text)} textError={viewmodel.errorAccount} />
                        <InputEditText hint={"Nhập mật khẩu"} input={viewmodel.password} event={(text) => viewmodel.setPassword(text)} textError={viewmodel.errorPassword} />
                    </View>

                    <Pressable style={styles.button} onPress={() => viewmodel.createAccount()}>
                        <Text style={styles.text}>Đăng ký</Text>
                    </Pressable>

                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // borderTopLeftRadius: 24,
        // borderTopRightRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 50,
        gap: 40,
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

export default Register;