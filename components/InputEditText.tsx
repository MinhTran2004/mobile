import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import IconSearch from "@/assets/images/home/sreach-icon.svg";

interface Props {
    iconLeft?: 'none' | 'search',
    hint?: string,
    iconRight?: string,
    textError?: string,
    input?: string,
    event: (text: string) => void;
}

const InputEditText: React.FC<Props> = (props) => {

    const SelectIconLeft = () => {
        switch (props.iconLeft) {
            case 'search': return <IconSearch />
            case 'none': return <View />
        }
    }

    return (
        <View style={{width: '100%'}}>
            <View style={styles.container}>
                <SelectIconLeft />
                <TextInput
                    placeholder={props.hint}
                    value={props.input}
                    onChangeText={(text) => props.event(text)}
                    style={{ width: '100%' }} />
            </View>
            {props.textError ? <Text style={styles.textError}>{props.textError}</Text> : <View />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        gap: 10
    },
    textError: {
        color: 'red',
        textAlign: 'right',
        paddingRight: 10,
    }
})


export default InputEditText;