import InputEditText from "@/components/InputEditText";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ViewModelLogin } from "@/viewmodel/auth/Login";
import AppHeader from "@/components/AppHeader";
import ButtonModel from "@/components/ButtonModel";
import StatusModal from "@/components/StatusModal";

const Login = ({ navigation }: any) => {
    const viewmodel = ViewModelLogin(navigation);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <AppHeader
                    iconLeft="left"
                    title="Đăng Nhập"
                    iconRight="none"
                    onPressIconLeft={() => navigation.goBack()} />

                <View style={styles.container}>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ alignItems: 'center', gap: 15 }}>
                            <Image source={require('../../assets/images/logo-app.png')} style={{ width: 100, maxHeight: 125, top: 0 }} />
                            <Text style={{ fontWeight: 900, color: '#000', fontSize: 20 }}>Welcome to OderFood !!</Text>
                            <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 16 }}>Đăng ký để tiếp tục</Text>
                        </View>
                    </View>

                    <View style={{ gap: 20 }}>
                        <InputEditText
                            placeholder={"Nhập tài khoản"}
                            value={viewmodel.account}
                            onChangeText={(text) => viewmodel.setAccount(text)}
                            textError={viewmodel.errorAccount} />

                        <View style={{ alignItems: 'flex-end' }}>
                            <InputEditText
                                placeholder={"Nhập mật khẩu"}
                                value={viewmodel.password}
                                iconRight={true}
                                onChangeText={(text) => viewmodel.setPassword(text)}
                                textError={viewmodel.errorPassword} />
                            <TouchableOpacity style={{ width: '30%' }} onPress={() => navigation.navigate('forgot-password')}>
                                <Text>Quên mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ButtonModel
                        label="Đăng nhập"
                        onPress={() => viewmodel.checkLogin()}
                        buttonStyle={{ backgroundColor: '#4C1B1B' }}
                        textStyle={{ color: 'white', fontWeight: 'bold', padding: 2 }}
                        status="single" />
                </View>


                <StatusModal
                    isActive={viewmodel.dialogError}
                    onClose={() => viewmodel.setDialogError(false)}
                    statusLayoutButton="single"
                    title="Thông báo"
                    label="Tài khoản đang bị hạn chế"
                    primaryButton={{
                        label: "OK",
                        onPress: () => {
                            viewmodel.setDialogError(false);
                        }
                    }}
                />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
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

export default Login;