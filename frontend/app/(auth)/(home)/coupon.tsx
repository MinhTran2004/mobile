import AppHeader from "@/components/AppHeader";
import { StyleSheet, View } from "react-native"

const Coupon = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Mã giảm giá" iconRight="none" />
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({

})

export default Coupon;