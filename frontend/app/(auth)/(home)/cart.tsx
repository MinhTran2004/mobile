import AppHeader from "@/components/AppHeader";
import ItemCart from "@/components/home/ItemCart";
import { ViewModelCart } from "@/viewmodel/home/cart";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"

const Cart = ({ navigation }: any) => {
    const viewmodel = ViewModelCart();
    return (
        <View style={{ flex: 1 }}>
            <AppHeader 
            onPressIconLeft={() => navigation.goBack()}
            iconLeft="left" 
            title="Giỏ hàng" 
            iconRight="none" />

            <View style={styles.main}>
                <FlatList
                    scrollEnabled={false}
                    data={viewmodel.data}
                    renderItem={({ item }) => <ItemCart key={item.cart._id} cart={item.cart} product={item.product} event={viewmodel.updateQuantityById} />} />

                {/* footer */}
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text_total}>Tổng tiền</Text>
                        <Text style={styles.text_total}>$ {viewmodel.total}</Text>
                    </View>

                    <Pressable style={styles.btn_payment} onPress={() => navigation.navigate('edit-address')}>
                        <Text style={styles.text_payment}>Thanh toán</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 10,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    // header
    container_header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    text_title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },

    text_total: {
        color: 'black',
        fontWeight: '500',
        fontSize: 23
    },
    btn_payment: {
        backgroundColor: '#4C1B1B',
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },
    text_payment: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Cart;

