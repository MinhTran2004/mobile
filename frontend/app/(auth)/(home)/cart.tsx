import AppHeader from "@/components/AppHeader";
import ItemCart from "@/components/home/ItemCart";
import PrimaryButton from "@/components/PrimaryButton";
import { ViewModelCart } from "@/viewmodel/home/cart.viewmodel";
import { FlatList, Image, StyleSheet, Text, View } from "react-native"

const Cart = ({ navigation }: any) => {
    const viewmodel = ViewModelCart();
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

                {/* footer */}
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                        <Text style={styles.text_total}>Tổng tiền:</Text>
                        <Text style={[styles.text_total, { color: '#D17842' }]}> {viewmodel.total}</Text>
                    </View>
                    <PrimaryButton
                        label="Thanh toán"
                        onPress={() => navigation.navigate('payment')}
                        disabled={viewmodel.data.length != 0 ? false : true} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 10,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    text_total: {
        fontWeight: '500',
        fontSize: 18
    },
})

export default Cart;

