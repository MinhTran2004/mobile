import ItemOrderLayout from "@/components/order/ItemOrderLayout";
import { FlatList, View } from "react-native"
import StatusModal from "@/components/StatusModal";
import ViewModelOrderWaiting from "@/viewmodel/order/order-waiting.viewmodel";

const OrderWaiting = ({ navigation }: any) => {
    const viewmodel = ViewModelOrderWaiting();
    
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
                                onPress: () => { 
                                    viewmodel.setItemData(item);
                                    viewmodel.setDialogDelete(true) },
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
                isActive={viewmodel.dialogDelete}
                title="Thông báo"
                label="Xác nhận hủy đơn"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        viewmodel.deleteBillById(viewmodel.itemData?._id || "");
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        viewmodel.setDialogDelete(false)
                    },
                }}
                onClose={() => viewmodel.setDialogDelete(false)}
            />

            <StatusModal
                isActive={viewmodel.dialogSuccess}
                title="Thông báo"
                label="Xóa đơn hàng thành công"
                icon="none"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'Ok', onPress() {
                        viewmodel.setDialogSuccess(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'index' }]
                        });
                    },
                }}
                onClose={() => viewmodel.setDialogSuccess(false)}
            />

            <StatusModal
                isActive={viewmodel.dialogError}
                title="Thông báo"
                label="Xóa đơn hàng thất bại, Vui lòng thử lại"
                icon="none"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'Ok', onPress() {
                        viewmodel.setDialogError(false)
                    },
                }}
                onClose={() => viewmodel.setDialogError(false)}
            />
        </View>
    )
}

export default OrderWaiting;