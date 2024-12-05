import React from "react"
import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"

interface Props{
    icon: React.ReactElement,
    name: string,
}

const ItemProductCategory:React.FC<Props> = (props) => {
    return(
        <TouchableOpacity style={{  alignItems: 'center', gap: 5,  width: '25%' }}>
            {props.icon}
            <Text style={styles.name}>{props.name}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    Image: {
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        color: '#000',
        textAlign: 'center',
    }
})

export default ItemProductCategory;