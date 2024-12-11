import { Image, StyleSheet, Text, View } from "react-native";

const ProductVerticalItem = (props:any) => {
    return (
        <View style={styles.container}>
            <Image src={props.image} style={styles.image} />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                    <Text style={styles.catgory}>{props.category}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>{props.price}</Text>
                    <Text style={styles.quantity}>x{props.quantityCart}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        gap: 10,
        borderBottomWidth: 1,
        borderColor: '#D7D4D4',
    },
    image: {
        width: 100,
        height: 90
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        color: '#2C2C2C'
    },
    catgory: {
        fontSize: 14,
        color: '#9FA1A4'
    },
    price: {
        fontSize: 14,
        fontWeight: 500,
        color: '#DB920B',
    },
    quantity: {
        fontWeight: 500,
        fontSize: 14,
        textAlign: 'right'
    }
})

export default ProductVerticalItem;