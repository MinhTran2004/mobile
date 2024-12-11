import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import StatusModal from "@/components/StatusModal";
import ViewModelOrderCancel from "@/viewmodel/order/order-cancel.viewmodel";
import { FlatList, View } from "react-native"

const OrderCancel = ({navigation}:any) => {
    const viewmodel = ViewModelOrderCancel();
    
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
                            onPress: () => {
                                viewmodel.setItemData(item);
                                viewmodel.setDialog(true)
                            },
                        }}
                        secondaryButton={{
                            label: 'Xem chi tiết',
                            onPress: () => {
                                navigation.navigate('detail-order', item)
                            },
                        }}
                    />}
                />
                :
                <View />
            }

            <StatusModal
                isActive={viewmodel.dialog}
                title="Thông báo"
                label="Bạn có muốn đặt lại đơn hàng?"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        navigation.navigate('payment', {
                            dataCart: viewmodel.dataOrder[0].dataProduct,
                            total: viewmodel.dataOrder[0].totalCost,
                        });
                        viewmodel.setDialog(false);
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        viewmodel.setDialog(false)
                    },
                }}
                onClose={() => viewmodel.setDialog(false)}
            />

        </View>
    )
}

export default OrderCancel;