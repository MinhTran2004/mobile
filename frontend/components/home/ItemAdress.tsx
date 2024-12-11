import { Address } from "@/model/address.model";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StatusModal from "../StatusModal";

interface Props{
    address: Address,
    viewmodel: any,
    navigation:any,
}

const ItemAddress: React.FC<Props> = (props) => {
    const address = props.address.province + ", " + props.address.district + ", " + props.address.commune + ", " + props.address.detailAddress;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.name}>{props.address.name}</Text>
                {props.address.status ? (
                    <Text style={styles.default}>Mặc định</Text>
                ) : (
                    <View style={{ width: 20, height: 2 }} />
                )}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.phone}>{props.address.phone}</Text>
                    <Text style={styles.describe}>{address}</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 10 }}>
                <TouchableOpacity onPress={() => props.viewmodel.setDialogDelete(true)}>
                    <Text style={{ color: 'red' }}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {props.navigation.navigate('edit-address', props)}}>
                    <Text>Sửa</Text>
                </TouchableOpacity>

                {/* dialog xoa */}
                <StatusModal
                    isActive={props.viewmodel.dialogDelete}
                    title="Thông báo"
                    label="Xác nhận xóa địa chỉ"
                    icon="none"
                    statusLayoutButton="row"
                    secondaryButton={{
                        label: 'Có', onPress() {
                            props.viewmodel.deleteAddressById(props.address._id);
                        }, }}
                    primaryButton={{
                        label: 'Không', onPress() {
                            props.viewmodel.setDialogDelete(false)
                        }, }}
                    onClose={() => props.viewmodel.setDialogDelete(false)}
                />

                {/* dialog that bai */}
                <StatusModal
                    isActive={props.viewmodel.dialogError}
                    title="Thông báo"
                    label="Xóa địa chỉ thất bại"
                    icon="none"
                    statusLayoutButton="single"
                    primaryButton={{
                        label: 'Không', onPress() {
                            props.viewmodel.setDialogError(false)
                        }, }}
                    onClose={() => props.viewmodel.setDialogError(false)}
                />

                {/* dialog thanh cong */}
                <StatusModal
                    isActive={props.viewmodel.dialogsuccess}
                    title="Thông báo"
                    label="Xóa địa chỉ thành công"
                    icon="none"
                    statusLayoutButton="single"
                    primaryButton={{
                        label: 'OK', onPress() {
                            props.viewmodel.setDialogSuccess(false)
                        }, }}
                    onClose={() => props.viewmodel.setDialogSuccess(false)}
                />


            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#E1E1E1',
    },
    name: {
        color: 'black',
        fontSize: 16,
    },
    phone: {
        fontSize: 13,
        color: '#A6A1A1',
    },
    describe: {
        marginTop: 2,
        color: '#A6A1A1',
    },
    default: {
        textAlign: 'left',
        marginTop: 5,
        fontSize: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        // borderWidth: 0.5,
        // borderColor: 'red',
        backgroundColor: '#bbb',
        borderRadius: 5,
        color: '#fff',
    },
});

export default ItemAddress;