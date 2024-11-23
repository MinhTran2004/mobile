import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

interface Props {
    label: string,
    buttonStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    status: 'row' | 'col' | 'single',
    onPress: () => void
}

const ButtonModel: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.buttonStyle, props.status === "row" ? { width: '50%' } : { width: '100%' }]} onPress={props.onPress}>
            <Text style={[styles.label, props.textStyle]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonModel;

const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        paddingVertical: 12,
        paddingHorizontal: 24,
        gap: 10,
    },
    label: {
        fontFamily: 'SFProDisplayBold',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center'
    }
})