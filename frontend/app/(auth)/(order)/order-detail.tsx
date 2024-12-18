import AppHeader from "@/components/AppHeader";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import ItemOrderProduct from "@/components/order/ItemOrderProduct";
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from "react-native"
import StatusModal from "@/components/StatusModal";
import { Bill } from "@/model/bill.model";
import ViewModelOrderDetail from "@/viewmodel/home/order-detail.viewmodel";
import { ConvertMoney } from "@/constants/convert-monney";


const OrderDetail = ({ route }: any) => {
    const navigation = useNavigation();
    const viewmodel = ViewModelOrderDetail();

    const item: Bill = route.params;

    const total = viewmodel.calculate(item.dataProduct);

    const totalAmount = Number(total) + 30000 - (item.coupon.disscount ? Number(item.coupon.disscount) : 0);

    const SelectButton = () => {
        switch(item.status){
            case "Chờ xác nhận": return (
                <PrimaryButton
                styleButton={{ position: 'fixed' }}
                label={"Hủy đơn"}
                onPress={() => { viewmodel.setDialogDelete(true) }} />
            );
            case "Hoàn thành": return (
                <PrimaryButton
                styleButton={{ position: 'fixed' }}
                label={"Đặt lại đơn"}
                onPress={() => { 
                    viewmodel.setItemData(item);
                    viewmodel.setDialogRelay(true);
                 }} />
            )
            default: return ;
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <AppHeader
                onPressIconLeft={() => navigation.goBack()}
                iconLeft="left"
                title="Chi tiết đơn hàng"
                iconRight="none"
            />

            <ScrollView>
                <View style={{ gap: 10, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F9F9F9', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ color: '#DB920B', fontSize: 18, fontWeight: 'bold' }}>{item.status}</Text>
                        <Text style={{ color: '#909090', fontSize: 16, fontWeight: 500 }}>{item.createAt}</Text>
                    </View>

                    <View style={{ backgroundColor: '#f9f9f9', paddingHorizontal: 20, paddingVertical: 10, gap: 5 }}>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <Image source={require('@/assets/images/profile/ic_location.png')} style={{ width: 16, height: 16 }} />
                            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>{item.address.name}</Text>
                            <Text style={{ color: '#909090', fontSize: 16, fontWeight: 500 }}>{item.address.phone}</Text>
                        </View>
                        <Text style={{ color: '#909090', fontSize: 14 }} numberOfLines={2}>{item.address.detailAddress}</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9', paddingVertical: 10 }}>
                        <FlatList
                            data={item.dataProduct}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => <ItemOrderProduct key={index} {...item} />} />
                    </View>

                    <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9', paddingVertical: 10, gap: 5 }}>
                        <Text style={styles.title}>Tổng quan đơn hàng</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Tổng phụ</Text>
                            <Text style={styles.txt_content}>{ConvertMoney(total)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Vận chuyển</Text>
                            <Text style={styles.txt_content}>{ConvertMoney(item.transport)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Phiếu giảm giá</Text>
                            <Text style={styles.txt_content}>{item.coupon.disscount ? ConvertMoney(item.coupon.disscount) : 0}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tổng</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{ConvertMoney(totalAmount.toString())}</Text>
                        </View>
                    </View>


                    <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9', paddingVertical: 10, gap: 5 }}>
                        <Text style={styles.title}>Chi tiết đơn hàng</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Seri đơn hàng</Text>
                            <Text style={styles.txt_content}>{item._id}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Ngày đặt hàng</Text>
                            <Text style={styles.txt_content}>{item.createAt}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Phương thức thanh toán</Text>
                            <Text style={styles.txt_content}>{item.paymentMethod}</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>

            <SelectButton />

            <StatusModal
                isActive={viewmodel.dialogRelay}
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
                        viewmodel.setDialogRelay(false);
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        viewmodel.setDialogRelay(false)
                    },
                }}
                onClose={() => viewmodel.setDialogRelay(false)}
            />

            <StatusModal
                isActive={viewmodel.dialogDelete}
                title="Thông báo"
                label="Xác nhận hủy đơn"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        viewmodel.deleteBillById(item._id);
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
                statusLayoutButton="row"
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

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    txt_content: {
        fontSize: 16,
        color: '#000'

    }

})

export default OrderDetail;