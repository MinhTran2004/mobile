import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IconX } from "tabler-icons-react-native";

interface Props {
    title: string,
    dataAddress: any,
    setAddress: (name:string) => void,
    setDialog: (status:boolean) => void,
    statusDialog: boolean,
}

const ItemModalAddress: React.FC<Props> = (props) => {
    return (
        <Modal visible={props.statusDialog} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>{props.title}</Text>
                    <FlatList
                        data={props.dataAddress}
                        renderItem={({item}:any) => (
                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => {
                                    props.setAddress(item.name);
                                    props.setDialog(false);
                                }}
                            >
                                <Text style={styles.modalItemText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => props.setDialog(false)}
                    >
                        <IconX name="close" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: "60%",
    },
    modalHeader: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    modalItemText: {
        fontSize: 14,
    },
    closeButton: {
        position: "absolute",
        top: 20,
        right: 20,
        padding: 5,
    },
    saveButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: "#4C1B1B", // Save button color
        paddingVertical: 15,
        borderRadius: 30, // Rounded corners
        alignItems: "center",
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default ItemModalAddress;