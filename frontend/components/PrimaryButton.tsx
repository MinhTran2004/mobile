import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface Props {
    disabled?: boolean,
    label: string,
    onPress?: () => void,
    styleButton?: StyleProp<ViewStyle>,
}

const PrimaryButton: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            style={[styles.container, props.styleButton, { backgroundColor: props.disabled ? '#D9D9D9' : '#4C1B1B' }]}
            onPress={props.onPress}>
            <Text style={[styles.text_payment, { color: props.disabled ? 'black' : 'white' }]}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        marginVertical: 10,
        padding: 10,
    },
    text_payment: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 500,
    }
})

export default PrimaryButton;