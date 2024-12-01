import { FlatList, StyleSheet, Text, View } from "react-native";
import ButtonModel from "../ButtonModel";
import ItemOrderProduct from "@/components/order/ItemOrderProduct";
import { Product } from "@/model/product.model";

interface Props {
    data: Product[],
    status?: string,
    price?: string,
    statusLayout?: 'row' | 'single',
    primaryButton?: {
        label: string,
        onPress: () => void,
    },
    secondaryButton?: {
        label: string,
        onPress: () => void,
    },
}

export const ItemOrderLayout: React.FC<Props> = (props) => {
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
                <Text style={styles.status}>{props.status}</Text>
                <Text style={styles.date}>12:09 - 20/09/2004</Text>
            </View>

            <FlatList
                data={props.data}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ItemOrderProduct key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} />} />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.total}>Tổng tiền: </Text>
                <Text style={styles.price}>{props.price}</Text>
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