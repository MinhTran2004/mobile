import ProductVerticalItem from '@/components/home/ProductVerticalItem';
import InputEditText from '@/components/InputEditText';
import { ViewModelSearch } from '@/viewmodel/home/sreach.viewmodel';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Search = ({ navigation }: any) => {
    const viewmodel = ViewModelSearch();

    return (
        <View style={{ flex: 1, gap: 10, backgroundColor: 'white', paddingTop: 10, paddingBottom: 20 }}>
            <View>
                <InputEditText
                    iconLeft='search'
                    placeholder='Bạn muốn ăn gì ?'
                    value={viewmodel.name}
                    onChangeText={(text) => viewmodel.setName(text)}
                    style={{ flexDirection: 'row', alignItems: 'center' }} />
            </View>

            <View style={styles.container}>
                {viewmodel.dataProduct.length != 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={viewmodel.dataProduct}
                        renderItem={({ item }) => <ProductVerticalItem key={item._id} {...item} iconLeft={true} />} />
                    :
                    <Text style={{paddingLeft: 15}}>Không có sản phẩm</Text>
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
