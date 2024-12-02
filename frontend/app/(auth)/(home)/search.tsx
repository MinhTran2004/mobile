import ProductVerticalItem from '@/components/home/ProductVerticalItem';
import InputEditText from '@/components/InputEditText';
import { ViewModelSearch } from '@/viewmodel/home/sreach.viewmodel';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { IconChevronLeft } from 'tabler-icons-react-native';

//Dữ liệu test
const products = [
    { id: '1', name: 'Pizza thập cẩm', price: '$55.000', image: require('@/assets/images/react-logo.png') },
    { id: '2', name: 'Pizza bò', price: '$50.000', image: require('@/assets/images/react-logo.png') },
    { id: '3', name: 'Vegetarian Noodles', price: '$23.000', image: require('@/assets/images/react-logo.png') },
    { id: '4', name: 'Mixed Salad BonBum', price: '$32.000', image: require('@/assets/images/react-logo.png') },
];

const Search = ({ navigation }: any) => {
    const viewmodel = ViewModelSearch();

    return (
        <View style={{ flex: 1, gap: 10, backgroundColor: 'white', paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingLeft: 10, paddingRight: 20, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconChevronLeft size={25} />
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <InputEditText iconLeft='search' placeholder='Bạn muốn ăn gì ?' value={viewmodel.name} onChangeText={(text) => viewmodel.setName(text)} />
                </View>
            </View>

            <View style={styles.container}>
                {products.length != 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={viewmodel.dataProduct}
                        renderItem={({ item }) => <ProductVerticalItem key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} />} />
                    :
                    <Text style={{ backgroundColor: 'red', width: 100, height: 300 }}>Không có sản phẩm</Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    searchHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icback: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    noProductText: {
        textAlign: 'center',
        color: '#a0a0a0',
        fontSize: 16,
    },
    productItem: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 15,
    },
    productImage: {
        width: 90,
        height: 90,
        borderRadius: 10
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'
    },
    productPrice: {
        fontSize: 18,
        color: '#42bb6a',
        fontWeight: 'bold',
        marginTop: 5
    },
});

export default Search;
