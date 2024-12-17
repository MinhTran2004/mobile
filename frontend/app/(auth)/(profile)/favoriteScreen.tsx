import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '@/components/AppHeader'
import { useNavigation } from 'expo-router';
import { ViewModelHome } from '@/viewmodel/home/home.viewmodel';
import ProductVerticalItem from '@/components/home/ProductVerticalItem';
import FavoriteService from '@/service/favorite.service';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
// import ProductVerticalItem from '@/components/home/ProductVerticalItem';


const favoriteScreen = () => {
    const navigation = useNavigation();
    const userId = useSelector((state: any) => state?.auth?.account?._id);
    const [dataFavorite, setdataFavorite] = useState()
    const isFocus = useIsFocused()
    // console.log("dataFavorite",dataFavorite);
    
    const getFavorite = async () => {
        try {
            const response = await FavoriteService.getFavorite(userId);
            const favorites = response.favorites;
            setdataFavorite(favorites);
            // console.log("favoritesfavoritesfavorites",favorites);

        } catch (error) {
            console.error("Lỗi khi lấy danh sách yêu thích: ", error);
        }
    };

    const handleDeletefavorite = async (_id:string) => {
        // console.log(props._id);
        // console.log("comefromFavorite",props.comefromFavorite);
        try {
                await FavoriteService.deleteFavorite(userId, _id);
                getFavorite()
        } catch (error) {
            console.error("Lỗi khi thêm/xóa sản phẩm yêu thích: ", error);
        }
        
    }
  
    useEffect(() => {
        if (isFocus) {
            getFavorite();
        }
    }, [isFocus])


    return (
        <View style={{ flex: 1 }}>
            <AppHeader
                onPressIconLeft={() => navigation.goBack()}
                iconLeft="left"
                title="Sản phẩm yêu thích"
                iconRight="none" />

            <FlatList
            style={{marginHorizontal:7,marginTop:10}}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                data={dataFavorite}
                renderItem={({ item }) =>
                    <ProductVerticalItem
                        key={item.productId._id}
                        _id={item.productId._id}
                        image={item.productId.image}
                        name={item.productId.name}
                        idCategory={item.productId.idCategory}
                        price={item.productId.price}
                        sold={item.productId.sold}
                        comefromFavorite={true}
                        handleDeletefavorite={() => handleDeletefavorite(item.productId._id)}
                        idFavorite={item._id}
                        // onUpdateFavorite={getFavorite}
                        />
                }
            />


        </View>
    )
}

export default favoriteScreen

const styles = StyleSheet.create({})