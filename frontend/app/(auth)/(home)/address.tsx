import AppHeader from "@/components/AppHeader";
import ItemAddress from "@/components/home/ItemAdress";
import PrimaryButton from "@/components/PrimaryButton";
import ViewModelAddress from "@/viewmodel/home/address.viewmodel";
import { FlatList, View } from "react-native";

const Address = ({navigation}:any) => {
    const viewModel = ViewModelAddress();

    return (
        <View style={{ flex: 1 }}>
            <AppHeader
                iconLeft="left"
                title="Địa chỉ"
                iconRight="none"
                onPressIconLeft={() => navigation.goBack()}
            />
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10, paddingBottom: 90 }}>

                <FlatList
                    data={viewModel.dataAddress}
                    renderItem={({ item }) => <ItemAddress address={item} viewmodel={viewModel} navigation={navigation} />} />

            </View>
            <PrimaryButton
                label="Thêm địa chỉ mới"
                onPress={() => { navigation.replace('create-address') }}
            />
        </View>
    );
}

export default Address;