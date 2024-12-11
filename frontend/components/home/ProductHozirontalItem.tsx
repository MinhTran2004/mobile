import { ConvertMoney } from "@/constants/convert-monney";
import { Product } from "@/model/product.model";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductHozirontalItem: React.FC<Product> = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('detail-product', props)}>
            <Image src={props.image} style={styles.image} />
            <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
            <Text style={{fontWeight: 500, color: '#909090', fontSize: 16}}>{props.idCategory}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <Text style={styles.price}>{ConvertMoney(props.price)}</Text>
                <Text style={{fontSize: 12}}>Đã bán {props.rate}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 150,
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
        gap: 2
    },
    image: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 10
    },
    name: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    },
    price: {
        fontSize: 16,
        color: '#DB920B',
        fontWeight: 'bold',
        marginTop: 5
    },
})

export default ProductHozirontalItem;
