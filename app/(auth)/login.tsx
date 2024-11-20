import InputEditText from "@/components/InputEditText";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { router } from "expo-router";

const Login = ({navigation}:any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                    <LogoApp style={{ width: 165, height: 170 }} />
                </View>

                <View style={{ gap: 10 }}>
                    <InputEditText hint={"Nhập tài khoản"} />
                    <InputEditText hint={"Nhập mật khẩu"} />
                </View>

                <Pressable style={styles.button} onPress={() => navigation.navigate('layoutHome')}>
                    <Text style={styles.text}>Đăng nhập</Text>
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