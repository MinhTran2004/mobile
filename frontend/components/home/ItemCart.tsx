import { Cart } from "@/model/ModelCart";
import { Product } from "@/model/ModelProduct";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    cart: Cart,
    product: Product,
    event?: (id: string, quantity: number, status: boolean) => void;
}
const ItemCart: React.FC<Props> = React.memo((props) => {
    return (
        <View style={styles.container}>
            <Image src={props.product.image} style={styles.image} />
            <View style={{ justifyContent: 'space-between' ,flex: 1 }}>
                <View>
                    <Text style={styles.name}>{props.product.name}</Text>
                    <Text>{props.product.idCategory}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>${props.product.price}</Text>
                    <View style={styles.containerOperation}>
                        <MaterialIcons name="remove" style={styles.btnOperation} />
                        <Text style={styles.quantity}>{props.cart.quantity}</Text>
                        <MaterialIcons name="add" style={styles.btnOperation} />
                    </View>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
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
        width: 80,
        height: 80,
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price: {
        width: 150,
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
    containerOperation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnOperation: {
        fontSize: 15,
        textAlign: 'center',
        padding: 5
    },
    quantity: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 5,
    }
})

export default ItemCart;