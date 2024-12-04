import { Address } from "@/model/address.model";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ItemAddress: React.FC<Address> = (props) => {
    const navigation = useNavigation();
    const address = props.province + ", " + props.district + ", " + props.commune + ", " + props.detailAddress
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.name}>{props.name}</Text>
                {props.status ? (
                    <Text style={styles.default}>Mặc định</Text>
                ) : (
                    <View style={{ width: 20, height: 2 }} />
                )}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginTop: 5 }}>
                    <Text style={styles.phone}>{props.phone}</Text>
                    <Text style={styles.describe}>{address}</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 10 }}>
                <Text style={{ color: 'red' }}>Xóa</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('edit-address', props) }}>
                    <Text>Sửa</Text>
                </TouchableOpacity>
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
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius: 5,
        color: 'red',
    },
});

export default ItemAddress;