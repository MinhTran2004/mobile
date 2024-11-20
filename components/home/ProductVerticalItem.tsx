import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props{
    // navigation: NavigationProp<any>,
    _id:string,
    image: string,
    name:string,
    idCategory: string,
    price:string,
}

const ProductVerticalItem:React.FC<Props> = (props) => {
    const [favourite, setFavourite] = useState(false);
    // onPress={() => props.navigation.navigate("DetailProduct", props)}
    return (
        <TouchableOpacity style={styles.container_product_vertical}>
            <Image src={props.image} style={styles.image_product_vertical} />
            <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.name_product_vertical}>{props.name}</Text>
                    <Text>{props.idCategory}</Text>
                </View>
                <View style={{ width: '72%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price_product_vertical}>${props.price}</Text>
                    <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                        {/* {favourite ?
                            (<Image source={require('@images/icon_showFavourite.png')} style={{ width: 20, height: 20 }} />)
                            :
                            (<Image source={require('@images/icon_unFavourite.png')} style={{ width: 20, height: 20 }} />)
                        } */}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container_product_vertical: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 15,
    },
    image_product_vertical: {
        width: 90,
        height: 90,
        borderRadius: 10
    },
    name_product_vertical: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price_product_vertical: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    }
})

export default ProductVerticalItem;