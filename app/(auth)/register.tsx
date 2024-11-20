import InputEditText from "@/components/InputEditText";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";

const Register = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                    <LogoApp style={{ width: 165, height: 170 }} />
                </View>

                <View style={{ gap: 10 }}>
                    <InputEditText hint={"Nhập tên dùng"} />
                    <InputEditText hint={"Nhập tài khoản"} />
                    <InputEditText hint={"Nhập mật khẩu"} />
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.text}>Đăng ký</Text>
                </Pressable>

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