import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
    iconLeft: React.ReactElement,
    title: string,
    iconRight: React.ReactElement,
    onPress?: () => void,
}

const ItemProfile: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {props.onPress()}}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {props.iconLeft}
                <Text style={styles.title}>{props.title}</Text>
            </View>
            {props.iconRight}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 20
    }
})

export default ItemProfile;