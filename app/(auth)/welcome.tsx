import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";

const Welcome = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <LogoApp />
                </View>
                <View style={{ gap: 10 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.text}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register')}>
                        <Text style={styles.text}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 16,
        paddingTop: 100,
        paddingBottom: 20,
        gap: 50
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
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









