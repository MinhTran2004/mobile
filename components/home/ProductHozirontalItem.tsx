import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconHeart } from "tabler-icons-react-native";

interface Props {
    _id: string,
    image: string,
    name: string,
    idCategory: string,
    price: string,
}

const ProductHozirontalItem: React.FC<Props> = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('detail-product', props)}>
            <Image src={props.image} style={styles.image} />
            <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
            <Text>{props.idCategory}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.price}>${props.price}</Text>
                <IconHeart />
            </View>
        </TouchableOpacity>
    )
}

export default ProductHozirontalItem;

const styles = StyleSheet.create({
    container: {
        width: 160,
        borderWidth: 1,
        borderColor: '#EBEBEE',
        borderRadius: 10,
        marginRight: 5,
        padding: 10,
    },
    image: {
        width: 140,
        height: 140,
        alignItems: 'center',
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
})