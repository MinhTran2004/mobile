import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native"

const OrderWaiting = () => {
    const viewmodel = ViewModelHome();
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
                <ItemOrderLayout
                    data={viewmodel.dataProductVertical}
                    status="Chờ xác nhận"
                    price="250.000"
                    statusLayout="single"
                    primaryButton={{
                        label: 'Hủy đơn', onPress() {
                            navigation.navigate('detail-order')
                        }
                    }} />

                <ItemOrderLayout
                    data={viewmodel.dataProductVertical}
                    status="Chờ xác nhận"
                    price="250.000"
                    statusLayout="single"
                    primaryButton={{
                        label: 'Hủy đơn', onPress() {
                            console.log('hihi');
                        }
                    }} />
            </View>
        </ScrollView>
    )
}

export default OrderWaiting;