import AppHeader from "@/components/AppHeader";
import ItemAddress from "@/components/home/ItemAdress";
import PrimaryButton from "@/components/PrimaryButton";
import ViewModelAddress from "@/viewmodel/home/address.viewmodel";
import { useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";

const Address = ({ navigation }: any) => {
    const viewModel = ViewModelAddress();

    const route: any = useRoute();
    const screen = route.params?.screen;

    return (
        <View style={{ flex: 1 }}>
            <AppHeader
                iconLeft="left"
                title="Địa chỉ"
                iconRight="none"
                onPressIconLeft={() => {
                    if (route.params?.screen === "profile") {
                        navigation.navigate('index');
                    } else {
                        navigation.navigate('payment');
                    }
                }}
            />
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingBottom: 90 }}>

                <FlatList
                    data={viewModel.dataAddress}
                    renderItem={({ item }) => <ItemAddress address={item} viewmodel={viewModel} navigation={navigation} screen={screen} />} />

            </View>
            <PrimaryButton
                label="Thêm địa chỉ mới"
                onPress={() => navigation.navigate('create-address', { screen: screen })}
            />
        </View>
    );
}

export default Address;