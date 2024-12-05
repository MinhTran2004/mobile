import { Coupon } from "@/model/coupon.model";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
    _id?: string,
    name?: string,
    image?: string,
    discountType?: string,
    discountValue?: string,
    maxDisCount?: number,
    quantity?: number,
    condition?: number,
    startDate?: string,
    endDate?: string,
    describe?: string,
    status?: string,
    dataCart: any,
    total: any,
}

const ItemCoupon: React.FC<Props> = (props) => {
    const navigation = useNavigation();

    const SelectImageCoupon = () => {
        switch (props.discountType) {
            case 'FreeShip': return <Image source={require('@/assets/images/home/coupon-delivery.png')} style={{ width: 90, height: 100 }} />
            case 'Mã giảm giá': return <Image source={require('@/assets/images/home/coupon-sale.png')} style={{ width: 90, height: 100 }} />
        }
    }

    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', marginBottom: 10, padding: 10, gap: 8, backgroundColor: '#F9F9F9' }}
            onPress={() => navigation.navigate('detail-coupon', props)}
        >
            <SelectImageCoupon />
            <View style={{ flex: 1, justifyContent: 'space-between', paddingRight: 10 }}>
                <View>
                    <View style={{ flexDirection: 'row', alignContent: 'space-between', alignItems: 'center' }}>
                        <Text style={style.name} numberOfLines={1}>{props.name}</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('payment', {
                                dataCart: props.dataCart,
                                total: props.total,
                                coupon: {
                                    _id: props._id,
                                    name: props.name,
                                    image: props.image,
                                    discountType: props.discountType,
                                    discountValue: props.discountValue,
                                    maxDisCount: props.maxDisCount,
                                    quantity: props.quantity,
                                    condition: props.condition,
                                    startDate: props.startDate,
                                    endDate: props.endDate,
                                    describe: props.describe,
                                    status: props.status,
                                }
                            })
                        }}>
                            <Text style={style.use}>Sử dụng</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Đơn tối thiểu {props.condition}</Text>
                </View>
                <Text style={{ color: 'red' }}>Hết hạn sau {props.endDate}</Text>
                <View style={{ borderTopWidth: 0.5, borderColor: '#A6A1A1' }}>
                    <Text style={{ color: '#A6A1A1', }}>Áp dụng cho tất cả sản phẩm</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    name: {
        flex: 1,
        fontWeight: 500,
        fontSize: 16,
        textAlign: 'left',
    },
    use: {
        color: 'red',
        fontWeight: 600
    }
})

export default ItemCoupon;