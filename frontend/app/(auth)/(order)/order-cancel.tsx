import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import StatusModal from "@/components/StatusModal";
import ViewModelOrderCancel from "@/viewmodel/order/order-cancel.viewmodel";
import { useState } from "react";
import { FlatList, View } from "react-native"

const OrderCancel = () => {
    const viewmodel = ViewModelOrderCancel();
    const [dialog, setDialog] = useState(false);

    console.log(viewmodel.dataOrder);
    
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

export default OrderCancel;