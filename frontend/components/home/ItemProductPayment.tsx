import { ConvertMoney } from "@/constants/convert-monney";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ItemProductPayment = (props:any) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image src={props.image} style={styles.image} />
            <View style={{ flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                    <Text style={{ color: '#909090' }}>{props.idCategory}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>{ConvertMoney(props.price)}</Text>
                    <Text>x{props.quantityCart}</Text>
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
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderColor: '#D7D4D4',
        gap: 5,
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