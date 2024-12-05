import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
    iconLeft: React.ReactElement,
    title: string,
    iconRight: React.ReactElement,
    onPress?: () => void,
}

const ItemProfile: React.FC<Props> = (props) => {
    return (
        <View style={{gap: 15, }}>
            <TouchableOpacity style={styles.container} onPress={() => { props.onPress() }}>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    {props.iconLeft}
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                {props.iconRight}
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#d9d9d9', paddingHorizontal: 20 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        textAlignVertical: 'center'
    }
})

export default ItemProfile;