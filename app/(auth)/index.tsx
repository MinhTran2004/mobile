import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoApp from "@/assets/images/logo-app.svg";
import Login from "./login";

const Start = ({navigation}:any) => {

    // setTimeout(() => {
    //     navigation.navigate('welcome')
    // }, 500)
        
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
          <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
               <LogoApp />
          </TouchableOpacity>
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









