import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Start = ({ navigation }: any) => {

    const selector = useSelector((state: any) => state.auth.isAuthenticated);

    useEffect(() => {
        if (selector) {
            setTimeout(() => {
                navigation.navigate('layoutHome')
            }, 500)
        } else {
            setTimeout(() => {
                navigation.navigate('welcome')
            }, 500)
        }
    }, [selector])

    // setTimeout(() => {
    //     navigation.navigate('welcome')
    // }, 500)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <LogoApp />
                <Text style={styles.text}>From MD-28</Text>
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
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
})

export default Start;









