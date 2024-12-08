import InputEditText from "@/components/InputEditText";
import { Pressable, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { ViewModelRegister } from "@/viewmodel/auth/Register";
import AppHeader from "@/components/AppHeader";
import ButtonModel from "@/components/ButtonModel";

const Register = ({ navigation }: any) => {
    const viewmodel = ViewModelRegister(navigation);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={{ flex: 1 }}> */}

                <AppHeader iconLeft="left" title="Đăng ký" iconRight="none" onPressIconLeft={() => navigation.goBack()} />

                <View style={styles.container}>

                    <View style={{ alignItems: 'center', marginTop: 20}}>
                        {/* <LogoApp style={{ width: 100, height: 100 }} /> */}
                        <View style={{alignItems: 'center', gap: 15}}>
                            <Image source={require('../../assets/images/logo-app.png')} style={{ width: 100, maxHeight: 125, top: 0 }} />
                            <Text style={{fontWeight: 900, color: '#000', fontSize: 20}}>Welcome to OderFood !!</Text>
                            <Text style={{fontWeight: 'bold', color: '#909090', fontSize: 16}}>Đăng nhập để tiếp tục</Text>
                        </View>
                    </View>

                    <View style={{gap: 20}}>
                        <InputEditText placeholder={"Nhập tên dùng"} value={viewmodel.username} onChangeText={(text) => viewmodel.setUsername(text)} textError={viewmodel.errorUsername} />
                        <InputEditText placeholder={"Nhập tài khoản"} value={viewmodel.account} onChangeText={(text) => viewmodel.setAccount(text)} textError={viewmodel.errorAccount} />
                        <InputEditText placeholder={"Nhập mật khẩu"} value={viewmodel.password} onChangeText={(text) => viewmodel.setPassword(text)} textError={viewmodel.errorPassword} />
                    </View>

                    <ButtonModel
                        label="Đăng ký"
                        onPress={() => viewmodel.createAccount()}
                        buttonStyle={{ backgroundColor: '#4C1B1B' }}
                        textStyle={{ color: 'white', fontWeight: 'bold', padding: 2 }}
                        status="single" />
                </View>
            {/* </View> */}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // borderTopLeftRadius: 24,
        // borderTopRightRadius: 24,
        paddingHorizontal: 20,
        // paddingVertical: 50,
        gap: 30,
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