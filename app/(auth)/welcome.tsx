import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { router } from "expo-router";

const Welcome = ({navigation}:any) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <LogoApp />
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Pressable style={styles.button} onPress={() =>navigation.navigate('register')}>
                        <Text style={styles.text}>Đăng ký</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() =>navigation.navigate('login')}>
                        <Text style={styles.text}>Đăng nhập</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        flex: 1,
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

export default Welcome;









