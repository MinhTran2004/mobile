import React from "react";
import { StyleProp, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import IconSearch from "@/assets/images/home/sreach-icon.svg";
import { IconChevronLeft } from "tabler-icons-react-native";
import { navigate } from "expo-router/build/global-state/routing";
import { useNavigation } from "@react-navigation/native";

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
    const naviagtion = useNavigation();
    const SelectIconLeft = () => {
        switch (props.iconLeft) {
            case 'search': return <IconSearch />
            case 'none': return <View />
        }
    }

    return (
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
            {props.iconLeft === 'search' ?
                <TouchableOpacity onPress={() => naviagtion.goBack()} style={{ paddingHorizontal: 5 }}>
                    <IconChevronLeft size={30} />
                </TouchableOpacity>
                :
                <View />}
            <View style={{width: '100%'}}>
                <View style={[styles.container, props.style, { borderColor: props.textError ? "red" : "#ccc" }]}>
                    <TouchableOpacity onPress={() => naviagtion.goBack()}>
                        <SelectIconLeft />
                    </TouchableOpacity>
                    <TextInput
                        editable={props.editable}
                        placeholder={props.placeholder}
                        value={props.value}
                        keyboardType={props.keyboardType ? "phone-pad" : "default"}
                        onChangeText={(text) => props.onChangeText(text)}
                        style={{ width: '100%', fontSize: 16}} />
                </View>
                {props.textError ? <Text style={styles.textError}>{props.textError}</Text> : <View style={{ marginVertical: 5 }} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: "#ccc",
        borderRadius: 90,
        backgroundColor: '#F9F9F9',
        paddingLeft: 15,
        paddingVertical: 5,
    },
    textError: {
        color: 'red',
        textAlign: 'right',
        fontSize: 13,
    }
})


export default InputEditText;