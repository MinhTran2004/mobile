import AppHeader from "@/components/AppHeader";
import PrimaryButton from "@/components/PrimaryButton";
import { Coupon } from "@/model/coupon.model"
import { deleteCoupon } from "@/redux/action/payment";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux";

interface Props {
    route: {
        params: Coupon;
    }
}

const DetailCoupon: React.FC<Props> = (props) => {
    const navigation = useNavigation();
    const coupon = props.route.params;
    console.log(coupon);
    
    return (
        <View style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Chi tiết mã giảm giá" iconRight="none" onPressIconLeft={() => { navigation.goBack() }} />

            <View style={{ flex: 1 }}>
                <Image source={require('@/assets/images/home/banner-1.png')} style={{ width: '100%', height: 170, objectFit: 'contain' }} />

                {/* banner 1 */}
                <View style={styles.container}>
                    <View style={styles.banner1}>
                        <Text style={styles.name}>{coupon.name}</Text>
                        <Text style={{ textAlign: 'center' }}>Đơn tối thiểu {coupon.condition}K</Text>
                        <Text style={{ textAlign: 'center', color: 'red' }}>Hết hạn sau 15 giờ</Text>
                        <View style={{ borderTopWidth: 0.5, borderColor: '#A6A1A1', marginTop: 5 }}>
                            <Text style={{ color: '#A6A1A1', textAlign: 'center', paddingTop: 5 }}>Áp dụng cho tất cả sản phẩm</Text>
                        </View>
                    </View>

                    <View style={[styles.banner1, { gap: 10 }]}>
                        <View>
                            <Text style={styles.title}>Hạn mã sử dụng</Text>
                            <Text>{coupon.startDate} 00:00 - {coupon.endDate} 00:00</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Ưu đãi </Text>
                            <Text>{coupon.describe}</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Áp dụng cho sản phẩm</Text>
                            <Text>Chỉ áp dụng trên app và sản phẩm hoặc một số ngừuoi dùng tham giá chương trình khuyến mãi</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Thanh toán</Text>
                            <Text>Tất cả phương thức thanh toán</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>Lưu ý</Text>
                            <Text>Voucher sẽ không được hoàn lại sau khi đã hết hiệu lực</Text>
                        </View>
                    </View>
                </View>

                <View style={{ position: 'absolute', width: '100%', bottom: 0, backgroundColor: 'white', padding: 10, borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                    <PrimaryButton
                        label="Sử dụng"
                        onPress={() => { navigation.navigate('payment') }}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        top: 140,
        paddingHorizontal: 10,
        gap: 10,
    },
    banner1: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 7,
    },
    name: {
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 18,
    },
    title: {
        fontWeight: 500,
        fontSize: 16,
    }
})

export default DetailCoupon;