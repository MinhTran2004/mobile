import InputEditText from "@/components/InputEditText";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { ViewModelRegister } from "@/viewmodel/auth/Register";
import AppHeader from "@/components/AppHeader";
import ButtonModel from "@/components/ButtonModel";
import StatusModal from "@/components/StatusModal";

const Register = ({ navigation }: any) => {
    const viewmodel = ViewModelRegister(navigation);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader
                iconLeft="left"
                title="Đăng ký"
                iconRight="none"
                onPressIconLeft={() => navigation.goBack()} />

            <View style={styles.container}>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ alignItems: 'center', gap: 15 }}>
                        <Image source={require('../../assets/images/logo-app.png')} style={{ width: 100, maxHeight: 125, top: 0 }} />
                        <Text style={{ fontWeight: 900, color: '#000', fontSize: 20 }}>Welcome to OderFood !!</Text>
                        <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 16 }}>Đăng nhập để tiếp tục</Text>
                    </View>
                </View>

                <View style={{ gap: 20 }}>
                    <InputEditText
                        placeholder={"Nhập tài khoản"}
                        value={viewmodel.account}
                        onChangeText={(text) => viewmodel.setAccount(text)}
                        textError={viewmodel.errorAccount}
                    />
                    <InputEditText
                        placeholder={"Nhập mật khẩu"}
                        value={viewmodel.password}
                        onChangeText={(text) => viewmodel.setPassword(text)}
                        iconRight={true}
                        textError={viewmodel.errorPassword}
                    />
                </View>

                <ButtonModel
                    label="Đăng ký"
                    onPress={() => viewmodel.createAccount()}
                    buttonStyle={{ backgroundColor: '#4C1B1B' }}
                    textStyle={{ color: 'white', fontWeight: 'bold', padding: 2 }}
                    status="single" />

                <StatusModal
                    isActive={viewmodel.dialog}
                    onClose={() => viewmodel.setDialog(false)}
                    statusLayoutButton="single"
                    title="Thông báo"
                    label="Đăng ký tài khoản thành công"
                    primaryButton={{
                        label: "OK",
                        onPress: () => {
                            navigation.navigate('login');
                            viewmodel.setDialog(false);
                        }
                    }}
                />

                <StatusModal
                    isActive={viewmodel.dialogError}
                    onClose={() => viewmodel.setDialogError(false)}
                    statusLayoutButton="single"
                    title="Thông báo"
                    label="Đăng ký tài khoản thất bại"
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

export default Register;