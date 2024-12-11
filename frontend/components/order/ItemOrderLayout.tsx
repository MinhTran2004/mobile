import { FlatList, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import ButtonModel from "../ButtonModel";
import ItemOrderProduct from "@/components/order/ItemOrderProduct";
import { useNavigation } from "@react-navigation/native";
import { Bill } from "@/model/bill.model";
import { ConvertMoney } from "@/constants/convert-monney";

interface Props {
    data: Bill,
    statusLayout: 'row' | 'single',
    primaryButton: {
        label: string,
        onPress: () => void;
        buttonStyle?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>
    },
    secondaryButton?: {
        label: string,
        onPress: () => void;
        buttonStyle?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>
    },
}

const ItemOrderLayout: React.FC<Props> = (props) => {
    const navigation = useNavigation();

    const SelectLayoutButton = () => {
        switch (props.statusLayout) {
            case 'row': return <View style={{ flexDirection: 'row', gap: 10 }}>
                {props.primaryButton ?
                    <ButtonModel
                        buttonStyle={{ backgroundColor: '#4C1B1B' }}
                        textStyle={{ color: 'white', fontWeight: 600 }}
                        label={props.primaryButton.label}
                        status={props.statusLayout}
                        onPress={props.primaryButton.onPress} /> : <View />}
                {props.secondaryButton ?
                    <ButtonModel
                        buttonStyle={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                        textStyle={{ color: 'black', fontWeight: 600 }}
                        label={props.secondaryButton.label}
                        status={props.statusLayout}
                        onPress={props.secondaryButton.onPress} /> : <View style={{}} />}
            </View>

            case 'single': return props.primaryButton ?
                <ButtonModel
                    buttonStyle={{ backgroundColor: '#4C1B1B' }}
                    textStyle={{ color: 'white', fontWeight: 600 }}
                    label={props.primaryButton.label}
                    status={props.statusLayout}
                    onPress={props.primaryButton.onPress} /> : <View />
        }
    }

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.status}>{props.data.status}</Text>
                <Text style={styles.date}>{props.data.createAt}</Text>
            </View>

            <FlatList
                data={props.data.dataProduct}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <ItemOrderProduct key={index} {...item} />} />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.total}>Tổng tiền: </Text>
                <Text style={styles.price}>{ConvertMoney(props.data.totalCost)}</Text>
            </View>

            <SelectLayoutButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        gap: 10,
        marginBottom: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
    status: {
        color: '#DB920B',
        fontWeight: 500,
        fontSize: 15
    },
    date: {
        fontSize: 13,
        color: '#909090',
    },
    total: {
        fontWeight: 600,
        fontSize: 16,
    },
    price: {
        color: '#DB920B',
        fontWeight: 500,
        fontSize: 16,
    }

})

export default ItemOrderLayout;