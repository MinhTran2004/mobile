import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconX } from "tabler-icons-react-native";
import AppHeader from "@/components/AppHeader";

const EditAddress = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [addressDetails, setAddressDetails] = useState("");
    const [additionalDetails, setAdditionalDetails] = useState("");

    const districts = [
        "Hoài Đức",
        "Nam Từ Liêm",
        "Hoàng Mai",
        "Cầu Giấy",
        "Hai Bà Trưng",
        "Thanh Xuân",
    ];

    const handleSave = () => {
        // Logic to save information
        console.log({
            fullName,
            phone,
            selectedDistrict,
            addressDetails,
            additionalDetails,
        });
        navigation.goBack(); // Go back to the previous screen
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <AppHeader iconLeft="left" title="Thêm địa chỉ" iconRight="none" onPressIconLeft={()=> navigation.goBack()}/>
            <View style={styles.container}>
            {/* Input fields */}
            <Text style={styles.label}>Thông tin liên hệ</Text>
            <TextInput
                style={styles.input}
                placeholder="Họ và tên"
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <Text style={styles.label}>Thông tin địa chỉ</Text>

            {/* Dropdown for Districts */}

            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setModalVisible(true)}
            >


                <Text style={styles.dropdownText}>
                    {selectedDistrict || "Chọn Thành Phố "}
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setModalVisible(true)}
            >


                <Text style={styles.dropdownText}>
                    {selectedDistrict || "Chọn Quận / Huyện"}
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setModalVisible(true)}
            >


                <Text style={styles.dropdownText}>
                    {selectedDistrict || "Chọn Xã"}
                </Text>

            </TouchableOpacity>
            {/* Address details */}
            <TextInput
                style={styles.input}
                placeholder="Địa chỉ cụ thể"
                value={addressDetails}
                onChangeText={setAddressDetails}
            />
            <TextInput
                style={styles.input}
                placeholder="Nhập các chi tiết khác (không bắt buộc)"
                value={additionalDetails}
                onChangeText={setAdditionalDetails}
            />

            {/* Modal for District Selection */}
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Quận / Huyện</Text>
                        <FlatList
                            data={districts}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => {
                                        setSelectedDistrict(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.modalItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <IconX name="close" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Lưu</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    backButton: {
        position: "absolute",
        left: 0,
    },
    headerTitle: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    label: {
        fontSize: 14,
        color: "#888",
        marginTop: 15,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: "#f9f9f9",
    },
    dropdownText: {
        color: "#555",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: "60%",
    },
    modalHeader: {
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
});

export default EditAddress;
