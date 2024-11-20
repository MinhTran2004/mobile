import { Cart } from "@/model/ModelCart";
import { Product } from "@/model/ModelProduct";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    cart: Cart,
    product: Product,
    event?: (id:string, quantity:number, status:boolean) => void;
}

const ItemCart: React.FC<Props> = React.memo((props) => {
    
    return (
        <View style={styles.container_product_vertical}>
            <Image src={props.product.image} style={styles.image_product_vertical} />
            <View style={{ width: '77%', marginLeft: 10, justifyContent: 'space-between' }}>
                <View style={{ width: '80%' }}>
                    <Text style={styles.name_product_vertical}>{props.product.name}</Text>
                    <Text>{props.product.idCategory}</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <Text style={styles.price_product_vertical}>${props.product.price}</Text>

                    <View style={styles.container_operation}>
                        {/* <Pressable onPress={() => {props.event(props.cart._id, props.cart.quantity, false)}}> */}
                            <MaterialIcons name="remove" style={styles.btn_operation}/>
                        {/* </Pressable> */}
                        <Text style={styles.text_quantity}>{props.cart.quantity}</Text>
                        {/* <Pressable onPress={() => {props.event(props.cart._id, props.cart.quantity, true)}}> */}
                            <MaterialIcons name="add" style={styles.btn_operation}/>
                        {/* </Pressable> */}
                    </View>
                </View>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    // CartVertical
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 15,
    },
    image_product_vertical: {
        width: '23%',
        height: 90,
        borderRadius: 10
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price_product_vertical: {
        width: 150,
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
    container_operation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn_operation: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        padding: 5
    },
    text_quantity: {
        fontSize: 20,
        color: 'black',
        marginHorizontal: 8,
    }
})

export default ItemCart;