import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import StatusModal from "@/components/StatusModal";
import ViewModelOrderCompleted from "@/viewmodel/order/order-completed.viewmodel";
import { FlatList, View } from "react-native"

const OrderCompleted = ({ navigation }: any) => {
    const viewmodel = ViewModelOrderCompleted();

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
                            dataCart: viewmodel.itemData?.dataProduct,
                            total: viewmodel.itemData?.totalCost,
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

export default OrderCompleted;