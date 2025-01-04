import AppHeader from "@/components/AppHeader";
import ButtonModel from "@/components/ButtonModel";
import InputEditText from "@/components/InputEditText";
import StatusModal from "@/components/StatusModal";
import { ViewModelForgotPassword } from "@/viewmodel/auth/forgot-password";
import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = ({ navigation }: any) => {
    const viewmodel = ViewModelForgotPassword(navigation);

    return (
        <View style={{ flex: 1 }}>
            <AppHeader
                iconLeft="left"
                title="Lấy lại mật khẩu"
                iconRight="none"
                onPressIconLeft={() => navigation.goBack()}
            />

            <View style={styles.container}>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={{ alignItems: 'center', gap: 15 }}>
                        <Image source={require('../../assets/images/logo-app.png')} style={{ width: 100, maxHeight: 125, top: 0 }} />
                        <Text style={{ fontWeight: 900, color: '#000', fontSize: 20 }}>Welcome to OderFood !!</Text>
                        <Text style={{ fontWeight: 'bold', color: '#909090', fontSize: 16 }}>Nhập Email để tiếp tục</Text>
                    </View>
                </View>

                <InputEditText
                    placeholder={"Nhập tài khoản"}
                    value={viewmodel.account}
                    onChangeText={(text) => viewmodel.setAccount(text)}
                    textError={viewmodel.errorAccount} />

                <ButtonModel
                    label="Gửi email"
                    onPress={() => viewmodel.resetPassword()}
                    buttonStyle={{ backgroundColor: '#4C1B1B' }}
                    textStyle={{ color: 'white', fontWeight: 'bold', padding: 2 }}
                    status="single" />
            </View>

            <StatusModal
                onClose={() => viewmodel.setDialog(false)}
                isActive={viewmodel.dialog}
                title="Thông báo"
                label="Vui lòng kiểm tra email"
                statusLayoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => {
                        viewmodel.setDialog(false);
                        navigation.goBack();
                    },
                }}
            />

            <StatusModal
                onClose={() => viewmodel.setDialogError(false)}
                isActive={viewmodel.dialogError}
                title="Thông báo"
                label="Lấy lại mật khẩu thất bại"
                statusLayoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => viewmodel.setDialogError(false),
                }}
            />
        </View>
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

export default ForgotPassword;