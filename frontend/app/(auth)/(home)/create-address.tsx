import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "@/components/AppHeader";
import ItemModalAddress from "@/components/home/ItemModelAdress";
import InputEditText from "@/components/InputEditText";
import PrimaryButton from "@/components/PrimaryButton";
import ViewModelCreateAddress from "@/viewmodel/home/create-address";
import StatusModal from "@/components/StatusModal";
import { useState } from "react";

const CreateAddress = () => {
    const navigation = useNavigation();
    const viewmodel = ViewModelCreateAddress();
    const [dialog, setDialog] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Thêm địa chỉ" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
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
                        placeholder={viewmodel.commune === "" ? 'Chọn Phường / Xã' : ""}
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
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold'}}>Mặc định</Text>
                    <Switch
                        onValueChange={() => viewmodel.setToogle(!viewmodel.toogle)}
                        value={viewmodel.toogle} />
                </View>


            </View>

            <PrimaryButton
                label="Thêm địa chỉ"
                onPress={() => setDialog(true)} />

            <StatusModal
                isActive={dialog}
                title="Thông báo"
                label="Xác nhận sửa địa chỉ"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        viewmodel.createAddress()
                        setDialog(false)
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        setDialog(false)
                    },
                }}
                onClose={() => setDialog(false)}
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
    label: {
        fontSize: 18,
        color: "#000",
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
    }
});

export default CreateAddress;
