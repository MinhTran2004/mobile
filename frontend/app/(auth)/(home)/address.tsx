import AppHeader from "@/components/AppHeader";
import ItemAddress from "@/components/home/ItemAdress";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";

const Address = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={{flex: 1}}>
                <AppHeader iconLeft="left" title="Địa chỉ" iconRight="none" onPressIconLeft={() => navigation.goBack()}/>
                <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
                    <ItemAddress navigation={navigation} status={true} />
                    <ItemAddress navigation={navigation} />
                    <ItemAddress navigation={navigation} />
                    <ItemAddress navigation={navigation} />
                </View>
            </View>
        </ScrollView>
    );
}

export default Address;