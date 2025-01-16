import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Switch } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppHeader from "@/components/AppHeader";
import ItemModalAddress from "@/components/home/ItemModelAdress";
import InputEditText from "@/components/InputEditText";
import ViewModelEditAddress from "@/viewmodel/home/edit-address.viewmodel";
import PrimaryButton from "@/components/PrimaryButton";
import StatusModal from "@/components/StatusModal";

const EditAddress = () => {
    const route:any = useRoute();
    const navigation:any = useNavigation();
    const props = route.params;
    const viewmodel = ViewModelEditAddress(props.address);
    
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

                <View style={styles.containerToogle}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>Mặc định</Text>
                    <Switch
                        onValueChange={() => viewmodel.setToogle(!viewmodel.toogle)}
                        value={viewmodel.toogle} />
                </View>

            </View>
            <PrimaryButton
                label="Cập nhật địa chỉ"
                onPress={() => viewmodel.setDialog(true)} />

            <StatusModal
                isActive={viewmodel.dialog}
                title="Thông báo"
                label="Xác nhận sửa địa chỉ"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        viewmodel.updateAddressById()
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        viewmodel.setDialog(false)
                    },
                }}
                onClose={() => viewmodel.setDialog(false)}
            />

            {/* thanh cong */}
            <StatusModal
                isActive={viewmodel.dialogSuccess}
                title="Thông báo"
                label="Thay đổi địa chỉ thành công"
                icon="none"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'OK', onPress() {
                        viewmodel.setDialogSuccess(false);
                        navigation.navigate('edit-address', {screen: route.screen});
                    },
                }}
                onClose={() => viewmodel.setDialogSuccess(false)}
            />

            {/* Thất bại */}
            <StatusModal
                isActive={viewmodel.dialogError}
                title="Thông báo"
                label="Thay đổi địa chỉ thất bại"
                icon="error"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'OK', onPress() {
                        viewmodel.setDialogError(false);
                    },
                }}
                onClose={() => viewmodel.setDialogError(false)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        gap: 20
    },
    containerToogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderColor: "#f9f9f9",
        borderRadius: 32,
        backgroundColor: '#f9f9f9'
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
        fontSize: 18,
        color: "#000",
    }
});

export default EditAddress;
