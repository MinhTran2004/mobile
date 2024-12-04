import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "@/components/AppHeader";
import ItemModalAddress from "@/components/home/ItemModelAdress";
import InputEditText from "@/components/InputEditText";
import ViewModelEditAddress from "@/viewmodel/home/edit-address.viewmodel";
import PrimaryButton from "@/components/PrimaryButton";
import { Address } from "@/model/address.model";

const EditAddress = ({ route }: any) => {
    const navigation = useNavigation();
    const props: Address = route.params;
    const viewmodel = ViewModelEditAddress(props);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Thay đổi địa chỉ" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
            <View style={styles.container}>
                {/* Input fields */}
                <Text style={styles.label}>Thông tin liên hệ</Text>
                <InputEditText
                    placeholder="Họ và tên"
                    value={viewmodel.name}
                    textError={viewmodel.errorName}
                    onChangeText={viewmodel.setName}
                />
                <InputEditText
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                    value={viewmodel.phone}
                    textError={viewmodel.errorPhone}
                    onChangeText={viewmodel.setPhone}
                />

                <Text style={styles.label}>Thông tin địa chỉ</Text>

                <TouchableOpacity
                    onPress={() => viewmodel.setModalProvince(true)}
                    style={{ backgroundColor: '#F9F9F9' }}
                >
                    <InputEditText
                        editable={false}
                        placeholder={viewmodel.province === "" ? 'Chọn Thành Phố / Tỉnh' : ""}
                        textError={viewmodel.errorProvince}
                        value={viewmodel.province}
                        onChangeText={() => { viewmodel.setProvince }}
                        style={{ backgroundColor: '#F9F9F9' }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={viewmodel.province ? false : true}
                    onPress={() => viewmodel.setModalDistrict(true)}
                >
                    <InputEditText
                        editable={false}
                        placeholder={viewmodel.district === "" ? 'Chọn Quận / Huyện' : ""}
                        textError={viewmodel.errorDistrict}
                        value={viewmodel.district}
                        onChangeText={() => { viewmodel.setDistrict }}
                        style={{ backgroundColor: '#F9F9F9' }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={viewmodel.district ? false : true}
                    onPress={() => viewmodel.setModalCommune(true)}
                >
                    <InputEditText
                        editable={false}
                        placeholder={viewmodel.commune === "" ? "Chọn Phường / Xã" : ""}
                        textError={viewmodel.errorCommune}
                        value={viewmodel.commune}
                        onChangeText={() => { viewmodel.setCommune }}
                        style={{ backgroundColor: '#F9F9F9' }}
                    />
                </TouchableOpacity>

                <InputEditText
                    placeholder="Địa chỉ cụ thể"
                    textError={viewmodel.errorDetailAddress}
                    value={viewmodel.detailAddress}
                    onChangeText={viewmodel.setDetailAddress}
                />

                {/* modal */}
                <ItemModalAddress
                    title={'Thành Phố / Tỉnh'}
                    dataAddress={viewmodel.dataProvince}
                    setAddress={viewmodel.setProvince}
                    statusDialog={viewmodel.modalProvince}
                    setDialog={viewmodel.setModalProvince} />

                <ItemModalAddress
                    title={'Quận / Huyện'}
                    dataAddress={viewmodel.dataDistrict}
                    setAddress={viewmodel.setDistrict}
                    statusDialog={viewmodel.modalDistrict}
                    setDialog={viewmodel.setModalDistrict} />

                <ItemModalAddress
                    title={'Phường / Xã'}
                    dataAddress={viewmodel.dataCommune}
                    setAddress={viewmodel.setCommune}
                    statusDialog={viewmodel.modalCommune}
                    setDialog={viewmodel.setModalCommune} />

                <Text style={styles.label}>Thông tin liên hệ</Text>
                <View style={styles.containerToogle}>
                    <Text style={{ color: '#888' }}>Mặc định</Text>
                    <Switch
                        onValueChange={() => viewmodel.setToogle(!viewmodel.toogle)}
                        value={viewmodel.toogle} />
                </View>

                <PrimaryButton
                    label="Thay đổi"
                    onPress={() => viewmodel.updateAddressById()} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    containerToogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingHorizontal: 5,
        borderColor: "#ccc",
        borderRadius: 8,
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
        marginBottom: 5,
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
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        padding: 20,
        elevation: 2,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
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
});

export default EditAddress;
