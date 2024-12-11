import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import StatusModal from "@/components/StatusModal";
import ViewModelOrderCompleted from "@/viewmodel/order/order-completed.viewmodel";
import { useState } from "react";
import { FlatList, View } from "react-native"

const OrderCompleted = () => {
    const viewmodel = ViewModelOrderCompleted();
    const [dialog, setDialog] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            {viewmodel.dataOrder ?
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={viewmodel.dataOrder}
                    renderItem={({ item }) => <ItemOrderLayout
                        data={item}
                        statusLayout="row"
                        primaryButton={{
                            label: 'Đặt lại đơn',
                            onPress: () => { },
                        }}
                        secondaryButton={{
                            label: 'Xem chi tiết',
                            onPress: () => { },
                        }}
                    />}
                />
                :
                <View />
            }

            <StatusModal
                isActive={dialog}
                title="Thông báo"
                label="Bạn có muốn đặt lại đơn hàng?"
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

export default OrderCompleted;