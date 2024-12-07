import AppHeader from "@/components/AppHeader";
import ItemCart from "@/components/home/ItemCart";
import PrimaryButton from "@/components/PrimaryButton";
import { ConvertMoney } from "@/constants/convert-monney";
import { ViewModelCart } from "@/viewmodel/home/cart.viewmodel";
import { FlatList, Image, StyleSheet, View } from "react-native"

const Cart = ({ navigation }: any) => {
    const viewmodel = ViewModelCart();

    // const data = viewmodel.data.map((item) => {
    //     return { quantityCart: item.cart.quantity , ...item.product };
    // })
    
    return (
        <View style={{ flex: 1 }}>
            <AppHeader
                onPressIconLeft={() => navigation.goBack()}
                iconLeft="left"
                title="Giỏ hàng"
                iconRight="none" />

            <View style={[styles.main, { alignItems: viewmodel.data.length != 0 ? 'stretch' : 'center' }]}>
                {viewmodel.data.length != 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                        data={viewmodel.data}
                        style={{ flex: 1 }}
                        renderItem={({ item }) => <ItemCart key={item.cart._id} cart={item.cart} product={item.product} eventUpdateQuantity={viewmodel.updateQuantityById} eventDelete={viewmodel.deleteCartById} />} />
                    :
                    <Image source={require('@/assets/images/home/cart-empty.png')} />
                }

            </View>
            {/* footer */}
            <PrimaryButton
                    label={"Thanh toán | " + ConvertMoney(viewmodel.total) + " VND"}
                    onPress={() => navigation.navigate('payment', {
                        dataCart: viewmodel.data,
                        total: viewmodel.total,
                    })}
                    disabled={viewmodel.data.length != 0 ? false : true} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 100,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 10,
    },
    text_total: {
        fontWeight: '500',
        fontSize: 18
    },
})

export default Cart;

