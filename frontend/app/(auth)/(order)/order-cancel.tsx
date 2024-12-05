import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import StatusModal from "@/components/StatusModal";
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel";
import { useState } from "react";
import { ScrollView, View } from "react-native"

const OrderCancel = () => {
    const viewmodel = ViewModelHome();
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
                        label: 'Đặt lại đơn', onPress() {
                            // console.log('hihi');
                            setDialog(true)
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
                            // console.log('hihi');
                            setDialog(true)
                        }
                    }}
                />

                <StatusModal
                    isActive={dialog}
                    title="Thông báo"
                    label="Bạn có muốn đặt lại đơn hàng?"
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

export default OrderCancel;