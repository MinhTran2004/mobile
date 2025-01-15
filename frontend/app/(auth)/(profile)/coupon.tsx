import AppHeader from "@/components/AppHeader";
import ItemCoupon from "@/components/home/ItemCoupon";
import CouponService from "@/service/coupon.service";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native"

const Coupon = () => {
    const navigation = useNavigation();
    const [dataCoupon, setDataCoupon] = useState([]);

    const getAllCoupon = async () => {
        await CouponService.getAllCoupon()
        .then((reponse) => setDataCoupon(reponse || []));
    }

    useEffect(() => {
        getAllCoupon();
    }, [])
    
    return (
        <View style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Mã giảm giá" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataCoupon}
                    renderItem={({ item }:any) => <ItemCoupon key={item._id} {...item} hidenUse={false}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Coupon;