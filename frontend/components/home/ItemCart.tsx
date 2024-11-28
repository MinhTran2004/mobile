import { Cart } from "@/model/ModelCart";
import { Product } from "@/model/ModelProduct";
import { ViewModelCart } from "@/viewmodel/home/cart";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IconMinus, IconPlus, IconX } from "tabler-icons-react-native";

interface Props {
    cart: Cart,
    product: Product,
    eventUpdateQuantity: (id: string, quantity: number, status: boolean) => {};
    eventDelete: (idCart:string) => void,
}
const ItemCart: React.FC<Props> = React.memo((props) => {
    const selector = useSelector((state) => state.auth.account._id);

    return (
        <View style={styles.container}>
            <Image src={props.product.image} style={styles.image} />
            <View style={{ justifyContent: 'space-between', flex: 1, height: 90 }}>
                <View>
                    <Text style={styles.name} numberOfLines={1}>{props.product.name}</Text>
                    <Text>{props.product.idCategory}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>{props.product.price}</Text>
                    <View style={styles.containerOperation}>
                        <TouchableOpacity onPress={() => { props.eventUpdateQuantity(props.cart._id, props.cart.quantity, false) }}>
                            <IconMinus size={20} />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{props.cart.quantity}</Text>
                        <TouchableOpacity onPress={() => { props.eventUpdateQuantity(props.cart._id, props.cart.quantity, true) }}>
                            <IconPlus size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.containerIconX} onPress={() => {props.eventDelete(props.cart._id)}}>
                <IconX size={15} />
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 13,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#d3cdcd',
        backgroundColor: '#F9F9F9',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        gap: 10,
    },
    image: {
        width: 100,
        height: 90,
        borderRadius: 10,
    },
    name: {
        paddingRight: 15,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    price: {
        width: 150,
        fontSize: 15,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
    containerOperation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 5,
    },
    containerIconX: {
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        position: 'absolute',
        right: 0,
        top: 0,
        borderBottomLeftRadius: 10,
    }
})

export default ItemCart;