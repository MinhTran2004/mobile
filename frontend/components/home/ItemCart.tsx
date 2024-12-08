import { Cart } from "@/model/cart.model";
import { Product } from "@/model/product.model";
import { ViewModelCart } from "@/viewmodel/home/cart.viewmodel";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IconMinus, IconPlus, IconX } from "tabler-icons-react-native";
import StatusModal from "../StatusModal";

interface Props {
    cart: Cart,
    product: Product,
    eventUpdateQuantity: (id: string, quantity: number, status: boolean) => {};
    eventDelete: (idCart:string) => void,
}
const ItemCart: React.FC<Props> = React.memo((props) => {
    const selector = useSelector((state) => state.auth.account._id);
    const [dialogDelete, setDialogDelete] = useState(false);

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
                        <TouchableOpacity style={styles.ic_quality} onPress={() => { props.eventUpdateQuantity(props.cart._id, props.cart.quantity, false) }}>
                            <IconMinus size={16} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{props.cart.quantity}</Text>
                        <TouchableOpacity style={styles.ic_quality} onPress={() => { props.eventUpdateQuantity(props.cart._id, props.cart.quantity, true) }}>
                            <IconPlus size={16} color="#fff"  />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.containerIconX} onPress={() => setDialogDelete(true)}>
                <IconX size={14} color="#fff" />
            </TouchableOpacity>
  

            {/* Dialog xóa sản phẩm */}
            <StatusModal
                isActive = {dialogDelete}
                title="Thông báo"
                label="Xóa sản phẩm khỏi giỏ hàng?"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{label: 'Có' , onPress() {
                    props.eventDelete(props.cart._id)
                    setDialogDelete(false)      
                },}}
                primaryButton={{label: 'Không' , onPress() {
                    setDialogDelete(false)
                },}}
                onClose={() => setDialogDelete(false)}
            />


        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
        paddingHorizontal: 13,
        paddingVertical: 15,
        borderWidth: 0.3,
        borderColor: '#d3cdcd',
        backgroundColor: '#F9F9F9',
        shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 },
        // shadowOpacity: 0.3,
        // shadowRadius: 8,
        elevation: 4,
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
        fontSize: 16,
        color: '#D17842',
        fontWeight: 'bold',
        marginTop: 5
    },
    containerOperation: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    quantity: {
        fontSize: 14,
        width: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        borderWidth: 1,
        borderColor: '#bbbbbb',
        paddingHorizontal: 10,
        borderRadius: 7
    },
    containerIconX: {
        backgroundColor: '#BBBBBB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2.5,
        position: 'absolute',
        right: 10,
        top: 10,
        borderRadius: 90,
    },
    ic_quality: {
        backgroundColor: '#BBBBBB',
        padding: 2.5,
        borderRadius: 7
    }
})

export default ItemCart;