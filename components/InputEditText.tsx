import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import IconSearch from "@/assets/images/home/sreach-icon.svg";

interface Props {
    iconLeft?: 'none' | 'search',
    hint?: string,
    iconRight?: string,
}

const InputEditText: React.FC<Props> = (props) => {
    const SelectIconLeft = () => {
        switch(props.iconLeft){
            case 'search' : return <IconSearch />
            case 'none' : return <View/>
            default : return 
        }
    }

    return (
        <View style={styles.container}>
            <SelectIconLeft />
            <TextInput placeholder={props.hint} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 16,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    }
})


export default InputEditText;