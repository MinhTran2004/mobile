import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconHeart } from "tabler-icons-react-native";

interface Props {
    _id: string,
    image: string,
    name: string,
    idCategory: string,
    price: string,
    iconLeft?: boolean;
}

const ProductVerticalItem: React.FC<Props> = (props) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('detail-product', props)}>
            <Image src={props.image} style={styles.image} />
            <View style={{ flex: 1, justifyContent: 'space-between', height: 90 }}>
                <View style={{ gap: 2 }}>
                    <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                    <Text style={{ fontWeight: 500, color: '#909090', fontSize: 16 }}>{props.idCategory}</Text>
                    {/* <Text style={{fontSize: 16}} numberOfLines={1}>Gà rán là món ăn được làm từ thịt gà, thường là phần cánh, đùi, hoặc ức, được ướp gia vị, phủ bột và chiên trong dầu nóng.</Text> */}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.price}>{props.price}</Text>
                    <IconHeart size={20} />
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
        marginBottom: 15,
        paddingHorizontal: 13,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#EBEBEE',
        backgroundColor: '#F9F9F9',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2,
        gap: 10,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 10,
        objectFit: 'contain',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        overflow: 'hidden',
    },
    price: {
        fontSize: 16,
        color: '#DB920B',
        fontWeight: 'bold',
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

export default ProductVerticalItem;