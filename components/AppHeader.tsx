import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconChevronLeft, IconUser, IconX } from "tabler-icons-react-native";

interface Props {
    iconLeft?: 'left' | 'none',
    title?: string,
    iconRight?: 'close' | 'none',
}


const AppHeader: React.FC<Props> = (props) => {
    const SelectIconLeft = () => {
        switch (props.iconLeft) {
            case 'left': return <IconChevronLeft />
            case 'none': return <View style={{width: 44, height: 44, backgroundColor: '#fff'}}/>
        }
    }

    const SelectIconRight = () => {
        switch (props.iconRight) {
            case 'close': return <IconX />
            case 'none': return <View style={{width: 44, height: 44, backgroundColor: '#fff'}} />
        }
    }

    return (
        <View style={styles.container}>
            <SelectIconLeft />
            <Text>{props.title}</Text>
            <SelectIconRight />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        marginBottom: 8,

    }
})

export default AppHeader;

