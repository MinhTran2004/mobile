import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

interface Props{
    icon: React.ReactElement,
    name: string,
}

const ItemProductCategory:React.FC<Props> = (props) => {
    return(
        <View style={{width: '25%', alignItems: 'center'}}>
            {props.icon}
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Image: {

    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        color: '#2C2C2C',
        textAlign: 'center',
    }
})

export default ItemProductCategory;