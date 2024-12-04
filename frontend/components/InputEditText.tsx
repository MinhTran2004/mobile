import React from "react";
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import IconSearch from "@/assets/images/home/sreach-icon.svg";

interface Props {
    editable?: boolean,
    iconLeft?: 'none' | 'search',
    placeholder?: string,
    iconRight?: string,
    keyboardType?: string,
    value?: string,
    textError?: string,
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
}

const InputEditText: React.FC<Props> = (props) => {

    const SelectIconLeft = () => {
        switch (props.iconLeft) {
            case 'search': return <IconSearch />
            case 'none': return <View />
        }
    }

    return (
        <View style={{ width: '100%' }}>
            <View style={[styles.container, props.style, {borderColor: props.textError ? "red" : "#ccc"}]}>
                <SelectIconLeft />
                <TextInput
                    editable={props.editable}
                    placeholder={props.placeholder}
                    value={props.value}
                    keyboardType={props.keyboardType ? "phone-pad": "default"}
                    onChangeText={(text) => props.onChangeText(text)}
                    style={{ width: '100%' }} />
            </View>
            {props.textError ? <Text style={styles.textError}>{props.textError}</Text> : <View style={{marginVertical: 5}}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingLeft: 5,
    },
    textError: {
        color: 'red',
        textAlign: 'right',
        fontSize: 13,
    }
})


export default InputEditText;