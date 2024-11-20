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

const ProductHozirontalItem:React.FC<Props> = (props) => {
    const [favourite, setFavourite] = useState(false);
    // onPress={() => props.navigation.navigate("DetailProduct", props)}
    return (
        <TouchableOpacity style={styles.container_product_hozizontal} >
            <Image src={props.image} style={styles.image_product_hozizontal} />
            <Text numberOfLines={1} style={styles.name_product_hozizontal}>{props.name}</Text>
            <Text>{props.idCategory}</Text>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.price_product_hozizontal}>${props.price}</Text>
                <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                    {/* {favourite ?
                        (<Image source={require('@images//icon_showFavourite.png')} style={{ width: 20, height: 20 }} />)
                        :
                        (<Image source={require('@images//icon_unFavourite.png')} style={{ width: 20, height: 20 }} />)
                    } */}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductHozirontalItem;

const styles = StyleSheet.create({
    // ProductHozirontal
    container_product_hozizontal: {
        width: 160,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        padding: 10
    },
    image_product_hozizontal: {
        width: 140,
        height: 140,
        alignItems: 'center',
        borderRadius: 10
    },
    name_product_hozizontal: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    price_product_hozizontal: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
})