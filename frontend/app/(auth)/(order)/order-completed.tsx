import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import StatusModal from "@/components/StatusModal";
import { setDataCart } from "@/redux/action/dataCart";
import ViewModelOrderCompleted from "@/viewmodel/order/order-completed.viewmodel";
import { FlatList, View } from "react-native"
import { useDispatch } from "react-redux";

const OrderCompleted = ({ navigation }: any) => {
    const viewmodel = ViewModelOrderCompleted();

    const dispatch = useDispatch();

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
                        dispatch(setDataCart({ dataCart: viewmodel.itemData?.dataProduct, total: viewmodel.itemData?.totalCost }))
                        navigation.navigate('payment', { screen: 'detail-product' });
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