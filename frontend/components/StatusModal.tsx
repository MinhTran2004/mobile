import React from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
import IconError from '@/assets/images/modal/icon-error.svg';
import ButtonModel from "./ButtonModel";

interface Props {
    isActive?: boolean,
    onClose(): void,
    icon?: 'success' | 'error' | 'none',
    title?: string,
    label?: string,
    statusLayoutButton?: 'row' | 'col' | 'single',
    primaryButton?: {
        label: string,
        onPress: () => void,
    },
    secondaryButton?: {
        label: string,
        onPress: () => void
    }
}

const StatusModal: React.FC<Props> = (props) => {
    const SelectIcon = () => {
        switch (props.icon) {
            case 'success': return <Image source={require('@/assets/images/modal/icon-success.gif')} />
            case 'error': return <View style={[styles.layoutIcon, { backgroundColor: 'rgba(251, 55, 72, 0.16)' }]}>
                <IconError height={40} width={40} />
            </View>
            case 'none': return <View />
        }
    }

    const SelectLayoutButton = () => {
        switch (props.statusLayoutButton) {
            case 'row': return <View style={{ flexDirection: 'row', gap: 10 }}>
                {props.primaryButton ?
                    <ButtonModel
                        buttonStyle={{ backgroundColor: '#fff', borderWidth: 0.5, borderColor: '#4C1B1B' }}
                        textStyle={{ color: 'black', fontWeight: 600 }}
                        label={props.primaryButton.label}
                        status={props.statusLayoutButton}
                        onPress={props.primaryButton.onPress} /> : <View />}
                {props.secondaryButton ?
                    <ButtonModel
                        buttonStyle={{ backgroundColor: '#4C1B1B' }}
                        textStyle={{ color: 'white', fontWeight: 600 }}
                        label={props.secondaryButton.label}
                        status={props.statusLayoutButton}
                        onPress={props.secondaryButton.onPress} /> : <View />}
            </View>

            case 'single': return props.primaryButton ?
                <ButtonModel
                    buttonStyle={{ backgroundColor: '#4C1B1B' }}
                    textStyle={{ color: 'white', fontWeight: 600 }}
                    label={props.primaryButton.label}
                    status={props.statusLayoutButton}
                    onPress={props.primaryButton.onPress} />
                : <View />
        }
    }

    return (
        <Modal
            visible={props.isActive}
            transparent={true}
            onRequestClose={() => props.onClose()}
            animationType="fade"
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <SelectIcon />
                    <View style={{ gap: 5 }}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.content}>{props.label}</Text>
                    </View>
                    <SelectLayoutButton />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    // Căn modal ra giữa màn hình với nền mờ
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        maxWidth: '90%',
        minWidth: '60%',
        alignItems: 'center',
        gap: 10,
    },

    title: {
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: -1,
        textAlign: 'center'
    },

    content: {
        fontSize: 15,
        textAlign: 'center',
    },

    layoutIcon: {
        width: 70,
        height: 70,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default StatusModal;