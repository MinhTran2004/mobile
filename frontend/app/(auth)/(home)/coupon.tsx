import AppHeader from "@/components/AppHeader";
import ItemCoupon from "@/components/home/ItemCoupon";
import ViewModelCoupon from "@/viewmodel/home/coupon.viewmodel";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native"
import { useSelector } from "react-redux";

const Coupon = () => {
    const select = useSelector((state: any) => state.dataCart.dataCart);

    const viewmodel = ViewModelCoupon(select.total.toString());
    const navigation = useNavigation();
    
    return (
        <View style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Mã giảm giá" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={viewmodel.dataCoupon}
                    renderItem={({ item }) => <ItemCoupon key={item._id} {...item}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Coupon;