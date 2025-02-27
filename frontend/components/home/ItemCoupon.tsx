import { ConvertMoney } from "@/constants/convert-monney";
import { Coupon } from "@/model/coupon.model";
import { setDataCart } from "@/redux/action/dataCart";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";

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
    hidenUse?:boolean,
}

const ItemCoupon: React.FC<Props> = (props) => {
    const navigation: any = useNavigation();
    const select = useSelector((state: any) => state.dataCart.dataCart);
    const dispatch = useDispatch();

    const SelectImageCoupon = () => {
        switch (props.discountType) {
            case 'FreeShip': return <Image source={require('@/assets/images/home/coupon-sale.png')} style={{ width: 90, height: 110 }} />
            case 'Mã giảm giá': return <Image source={require('@/assets/images/home/coupon-sale.png')} style={{ width: 90, height: 110 }} />
        }
    }

    return (
        <TouchableOpacity
            disabled={true}
            style={{
                flexDirection: 'row',
                marginBottom: 15,
                gap: 8,
                backgroundColor: '#F9F9F9',
                bottom: 0,
                shadowColor: '#000',
                elevation: 3,
                borderRadius: 5
            }}
            onPress={() => navigation.navigate('detail-coupon', props)}
        >
            <SelectImageCoupon />
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                paddingRight: 10,
                paddingVertical: 5,
            }}>

                <View>
                    <View style={{ flexDirection: 'row', alignContent: 'space-between', alignItems: 'center' }}>
                        <Text style={style.name} numberOfLines={1}>{props.name}</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('payment'),
                                dispatch(setDataCart({
                                    dataCart: select.dataCart,
                                    total: select.total,
                                    coupon: {
                                        _id: props._id,
                                        discountValue: props.discountValue,
                                    },
                                }))
                        }}>
                            {props.hidenUse ? <Text style={style.use}>Sử dụng</Text> : ''}
                        </TouchableOpacity>
                    </View>
                    <Text>Đơn tối thiểu {ConvertMoney(props.condition?.toString() || "")}</Text>
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
        fontSize: 15,
        textAlign: 'left',
    },
    use: {
        color: 'red',
        fontWeight: 600
    }
})

export default ItemCoupon;