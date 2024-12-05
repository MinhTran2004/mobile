import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView, View } from "react-native"
import StatusModal
    from "@/components/StatusModal";
const OrderWaiting = () => {
    const viewmodel = ViewModelHome();
    const navigation = useNavigation();
    const [dialog, setDialog] = useState(false);

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
                            // navigation.navigate('detail-order')
                            setDialog(true)
                        }
                    }} />

                <ItemOrderLayout
                    data={viewmodel.dataProductVertical}
                    status="Chờ xác nhận"
                    price="250.000"
                    statusLayout="single"
                    primaryButton={{
                        label: 'Hủy đơn', onPress() {
                            // console.log('hihi');
                            setDialog(true)
                        }
                    }} />


                <StatusModal
                    isActive={dialog}
                    title="Thông báo"
                    label="Xác nhận hủy đơn"
                    icon="none"
                    statusLayoutButton="row"
                    secondaryButton={{
                        label: 'Có', onPress() {
                            setDialog(false)
                        }, }}
                    primaryButton={{
                        label: 'Không', onPress() {
                            setDialog(false)
                        }, }}
                    onClose={() => setDialog(false)}
                />
            </View>
        </ScrollView>
    )
}

export default OrderWaiting;