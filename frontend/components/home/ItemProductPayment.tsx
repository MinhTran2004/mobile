import { Cart } from "@/model/cart.model";
import { Product } from "@/model/product.model";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
    cart: Cart,
    product: Product,
}

const ItemProductPayment: React.FC<Props> = (props) => {
    const navigation = useNavigation()
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('detail-product', props)}>
            <Image src={props.product.image} style={styles.image} />
            <View style={{ flex: 1, justifyContent: 'space-between', height: 90}}>
                <View>
                    <Text style={styles.name} numberOfLines={1}>{props.product.name}</Text>
                    <Text style={{ color: '#909090' }}>{props.product.idCategory}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>{props.product.price}</Text>
                    <Text>x{props.cart.quantity}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 13,
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderColor: '#D7D4D4',
        gap: 10,
    },
    image: {
        width: 100,
        height: 90,
        borderRadius: 10,
        objectFit: 'contain',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
        overflow: 'hidden',
    },
    price: {
        fontSize: 16,
        color: '#DB920B',
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

export default ItemProductPayment;