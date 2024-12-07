import AppHeader from "@/components/AppHeader";
import PrimaryButton from "@/components/PrimaryButton";
import { Product } from "@/model/product.model";
import { useNavigation } from "@react-navigation/native";
import ItemOrderProduct from "@/components/order/ItemOrderProduct";
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from "react-native"
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel";
import StatusModal from "@/components/StatusModal";
import { useState } from "react";




const OrderDetail = () => {
    const viewmodel = ViewModelHome();
    const navigation = useNavigation();
    const [dialog, setDialog] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <AppHeader onPressIconLeft={() => navigation.goBack()} iconLeft="left" title="Chi tiết đơn hàng" iconRight="none" />

            <ScrollView>
                <View style={{ gap: 10, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F9F9F9', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ color: '#DB920B', fontSize: 18, fontWeight: 'bold' }}>Chờ xác nhận</Text>
                        <Text style={{ color: '#909090', fontSize: 16, fontWeight: 500 }}>12:04 - 15/10/2024</Text>
                    </View>

                    <View style={{ backgroundColor: '#f9f9f9', paddingHorizontal: 20, paddingVertical: 10, gap: 5 }}>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <Image source={require('@/assets/images/profile/ic_location.png')} style={{ width: 16, height: 16 }} />
                            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>Nguyễn Công Thưởng</Text>
                            <Text style={{ color: '#909090', fontSize: 16, fontWeight: 500 }}>0867189410</Text>
                        </View>
                        <Text style={{ color: '#909090', fontSize: 14 }}>Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội 100000, Việt Nam</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9', paddingVertical: 10 }}>
                        <FlatList
                            data={viewmodel.dataProductVertical}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <ItemOrderProduct key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} />} />
                    </View>

                    <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9', paddingVertical: 10, gap: 5 }}>
                        <Text style={styles.title}>Tổng quan đơn hàng</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Tổng phụ</Text>
                            <Text style={styles.txt_content}>310.000đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Vận chuyển</Text>
                            <Text style={styles.txt_content}>20.000đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Phiếu giảm giá</Text>
                            <Text style={styles.txt_content}>-50.000đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tổng</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>280.000đ</Text>
                        </View>
                    </View>


                    <View style={{ paddingHorizontal: 20, backgroundColor: '#f9f9f9', paddingVertical: 10, gap: 5 }}>
                        <Text style={styles.title}>Chi tiết đơn hàng</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Seri đơn hàng</Text>
                            <Text style={styles.txt_content}>43838347374</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Ngày đặt hàng</Text>
                            <Text style={styles.txt_content}>12/10/2024 - 07:41 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.txt_content}>Phương thức thanh toán</Text>
                            <Text style={styles.txt_content}>Thanh toán onilne</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <PrimaryButton styleButton={{ position: 'fixed' }} label={"Hủy đơn"} onPress={() => { setDialog(true) }} />


            <StatusModal
                isActive={dialog}
                title="Thông báo"
                label="Xác nhận hủy đơn"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        console.log('helooooo');
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