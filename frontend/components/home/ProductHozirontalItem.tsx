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
                <Text style={styles.price}>{props.price}</Text>
                <IconHeart />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 160,
        borderColor: '#EBEBEE',
        borderRadius: 10,
        margin: 5,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#F9F9F9',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
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

export default ProductHozirontalItem;
