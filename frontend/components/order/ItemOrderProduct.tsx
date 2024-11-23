import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconHeart } from "tabler-icons-react-native";

interface Props {
    _id: string,
    image: string,
    name: string,
    idCategory: string,
    price: string,
}

const ProductVerticalItem: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Image src={props.image} style={styles.image} />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                    <Text style={styles.catgory}>{props.idCategory}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>${props.price}</Text>
                    <Text style={styles.quantity}>${props.price}</Text>
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