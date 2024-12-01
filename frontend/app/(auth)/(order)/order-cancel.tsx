import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel";
import { ScrollView, View } from "react-native"

const OrderCancel = () => {
    const viewmodel = ViewModelHome();

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
                <ItemOrderLayout
                    data={viewmodel.dataProductVertical}
                    status="Chờ xác nhận"
                    price="250.000"
                    statusLayout="single"
                    primaryButton={{
                        label: 'Đặt lại đơn', onPress() {
                            console.log('hihi');
                        }
                    }}
                />

                <ItemOrderLayout
                    data={viewmodel.dataProductVertical}
                    status="Chờ xác nhận"
                    price="250.000"
                    statusLayout="single"
                    primaryButton={{
                        label: 'Đặt lại đơn', onPress() {
                            console.log('hihi');
                        }
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default OrderCancel;