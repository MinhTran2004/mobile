import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import { useState } from "react";
import { FlatList, View } from "react-native"
import StatusModal from "@/components/StatusModal";
import ViewModelOrderWaiting from "@/viewmodel/order/order-waiting.viewmodel";

const OrderWaiting = ({ navigation }: any) => {
    const viewmodel = ViewModelOrderWaiting();
    const [dialog, setDialog] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            {viewmodel.dataOrder ?
                (
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={viewmodel.dataOrder}
                        renderItem={({ item }) => <ItemOrderLayout
                            data={item}
                            statusLayout="row"
                            primaryButton={{
                                label: 'Hủy đơn hàng',
                                onPress: () => { },
                            }}
                            secondaryButton={{
                                label: 'Xem chi tiết',
                                onPress: () => { navigation.navigate('detail-order', item) },
                            }}
                        />}
                    />
                )
                :
                <View />
            }

            <StatusModal
                isActive={dialog}
                title="Thông báo"
                label="Xác nhận hủy đơn"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        setDialog(false)
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        setDialog(false)
                    },
                }}
                onClose={() => setDialog(false)}
            />
        </View>
    )
}

export default OrderWaiting;