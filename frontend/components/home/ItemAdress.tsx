import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconEdit } from "tabler-icons-react-native";

const ItemAddress = ({ status, navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Trần Công Minh</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginTop: 5, width: '93%' }}>
                    <Text style={styles.phone}>(+84)0976577025</Text>
                    <Text style={styles.describe}>Số nhà 20a, ngõ 34/23 Đường Phương Canh</Text>
                    <Text style={styles.describe}>Phương Canh, Nam Từ Liêm, Hà Nội, Việt Nam</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('edit-address')}>
                    <IconEdit style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'flex-start' }}>
                {status ? (
                    <Text style={styles.default}>Mặc định</Text>
                ) : (
                    <View />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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