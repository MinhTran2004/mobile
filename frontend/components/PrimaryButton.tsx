import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

interface Props {
    disabled?: boolean,
    label: string,
    onPress?: () => void,
    styleButton?: StyleProp<ViewStyle>,
}

const PrimaryButton: React.FC<Props> = (props) => {
    return (
        <View style={[styles.saveButton, props.styleButton]}>
            <TouchableOpacity
                disabled={props.disabled}
                style={{ width: '100%', backgroundColor: 'white', bottom: -5 }}
                onPress={props.onPress}>
                <Text style={[styles.saveButtonText, { backgroundColor: props.disabled ? '#D9D9D9' : '#4C1B1B' }]}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    saveButton: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        elevation: 2,
        backgroundColor: 'white',
    },
    saveButtonText: {
        color: "#fff",
        width: '100%',
        fontSize: 16,
        padding: 15,
        textAlign: 'center',
        fontWeight: "bold",
        backgroundColor: "#4C1B1B",
        borderRadius: 30,
    },
})

export default PrimaryButton;