import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import ButtonModel from "@/components/ButtonModel";

const Welcome = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {/* <LogoApp /> */}
                    <Image source={require('../../assets/images/logo-app.png')} style={{width: 200, maxHeight: 245, top: 150}}/>
                </View>
                <View style={{ gap: 20, bottom: 50 }}>
                    <ButtonModel
                        label="Đăng nhập"
                        onPress={() => navigation.navigate('login')}
                        buttonStyle={{ backgroundColor: '#4C1B1B', borderWidth: 1, borderColor: '#4C1B1B'}}
                        textStyle={{ color: 'white', fontWeight: 'bold', padding: 2}}
                        status="single" />
                    <ButtonModel
                        label="Đăng ký"
                        onPress={() => navigation.navigate('register')}
                        buttonStyle={{ backgroundColor: '#fff', borderWidth: 0.5, borderColor: '#000' }}
                        textStyle={{ color: '#000', fontWeight: 'bold', padding: 2}}
                        status="single" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        // borderTopLeftRadius: 24,
        // borderTopRightRadius: 24,
        paddingHorizontal: 20,
        // paddingTop: 100,
        // paddingBottom: 20,
        gap: 50
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
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

export default Welcome;









