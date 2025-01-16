import React, { useState } from "react";
import { Image, StyleProp, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import IconSearch from "@/assets/images/home/sreach-icon.svg";
import { IconChevronLeft } from "tabler-icons-react-native";
import { useNavigation } from "@react-navigation/native";

interface Props {
    editable?: boolean,
    iconLeft?: 'none' | 'search',
    placeholder?: string,
    iconRight?: boolean,
    keyboardType?: string,
    value?: string,
    textError?: string,
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
}

const InputEditText: React.FC<Props> = (props) => {
    const [statusPassword, setStatusPassword] = useState(true);


    const naviagtion = useNavigation();
    const SelectIconLeft = () => {
        switch (props.iconLeft) {
            case 'search': return <IconSearch />
            case 'none': return <View />
        }
    }

    return (
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', }}>
            {props.iconLeft === 'search' ?
                <TouchableOpacity onPress={() => naviagtion.goBack()} style={{ paddingHorizontal: 5 }}>
                    <IconChevronLeft size={26} />
                </TouchableOpacity>
                :
                <View />}
            <View style={{ width: '100%' }}>
                <View style={[styles.container, props.style, { borderColor: props.textError ? "red" : "#ccc" }]}>
                    <TouchableOpacity onPress={() => naviagtion.goBack()}>
                        <SelectIconLeft />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInput
                            editable={props.editable}
                            placeholder={props.placeholder}
                            value={props.value}
                            secureTextEntry={props.iconRight && !statusPassword}
                            keyboardType={props.keyboardType ? "phone-pad" : "default"}
                            onChangeText={(text) => props.onChangeText(text)}
                            style={{ flex: 1,fontSize: 16 }}
                        />
                        {props.iconRight ?
                            statusPassword ?
                                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => setStatusPassword(false)}>
                                    <Image source={require('@/assets/images/eye.png')} style={{ width: 23, height: 23 }} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => { setStatusPassword(true) }}>
                                    <Image source={require('@/assets/images/hidden.png')} style={{ width: 23, height: 23 }} />
                                </TouchableOpacity>
                            :
                            <View />
                        }
                    </View>
                </View>
                {props.textError ? <Text style={styles.textError}>{props.textError}</Text> : <View />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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