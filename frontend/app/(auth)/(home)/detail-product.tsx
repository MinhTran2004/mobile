import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ViewModelDetailProduct } from "@/viewmodel/home/detail-product.viewmodel";
import { IconChevronLeft,  IconMessage, IconShoppingCart } from "tabler-icons-react-native";
import StatusModal from "@/components/StatusModal";
import { ConvertMoney } from "@/constants/convert-monney";
import { useDispatch } from "react-redux";
import { setDataCart } from "@/redux/action/dataCart";

interface Product {
    _id: string,
    image: string,
    name: string,
    idCategory: string,
    price: string,
}

interface Props {
    route: {
        params: Product
    }
}

const DetailProduct = (route: Props) => {
    const navigation: any = useNavigation();
    const viewModel = ViewModelDetailProduct();
    const product = route.route.params;

    const dispatch = useDispatch();

    const dataCart = { ...product, quantityCart: 1 }
    const total = Number(product.price) * 1;

    return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity style={styles.icon_return} onPress={() => navigation.goBack()}>
                <IconChevronLeft />
            </TouchableOpacity>

            <Image src={product.image} style={styles.image_product} />
            <View style={styles.container_infor}>

                <View style={{ gap: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{product.name}</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#D17842' }}>{ConvertMoney(product.price)} VNĐ</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: '#D9D9D9' }}></View>

                <View style={{ gap: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Giới thiệu sản phẩm</Text>
                    <Text style={{ fontSize: 16 }}>Hamburger bò là một món ăn nhanh phổ biến, bao gồm một miếng thịt bò xay nướng chín được đặt giữa hai lát bánh mì tròn. Miếng thịt bò thườngđược ướp gia vị và nướng trên vỉ để tạo ra lớp vỏ bên ngoài thơm ngon, giòn rụm. Phần bên trong thịt vẫn giữ được độ mềm vàmọng nước. Kèm theo đó, món hamburger thường có thêm các thành phần như phô mai tan chảy, xà lách tươi, cà chua, dưa leo, hành tây và sốt đặc trưng như ketchup hoặc mù tạt. Tất cả những yếu tố này kết hợp tạo nên một hương vị hài hòa và hấp dẫn...</Text>
                </View>

            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                    <IconMessage />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 2, alignItems: 'center' }} onPress={() => {
                    viewModel.addProductToCart(product._id);
                    viewModel.setDialog2(true)
                }}>
                    <IconShoppingCart />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 5, padding: 14, backgroundColor: '#4C1B1B', borderRadius: 90 }}
                    onPress={() => viewModel.setDialog(true)}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Mua ngay</Text>
                </TouchableOpacity>
            </View>

            {/* Dialog mua hàng */}
            <StatusModal
                isActive={viewModel.dialog}
                title="Thông báo"
                label="Bạn có muốn mua ngay?"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{
                    label: 'Có', onPress() {
                        viewModel.setDialog(false);
                        dispatch(setDataCart({dataCart: [dataCart], total: total}))
                        navigation.navigate('payment', {screen: 'detail-product'});
                    },
                }}
                primaryButton={{
                    label: 'Không', onPress() {
                        viewModel.setDialog(false)
                    },
                }}
                onClose={() => viewModel.setDialog(false)}
            />

            {/* Dialog thêm sản phẩm vào giỏ hàng */}
            <StatusModal
                isActive={viewModel.dialog2}
                title="Thông báo"
                label="Đã thêm sản phẩm vào giỏ hàng !!!"
                icon="none"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'Đóng',
                    onPress: () => {
                        viewModel.setDialog2(false)
                    },
                }}
                onClose={() => viewModel.setDialog2(false)}
            />

            <StatusModal
                isActive={viewModel.dialogError}
                title="Thông báo"
                label="Thêm sản phẩm lỗi"
                icon="none"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'Đóng',
                    onPress: () => {
                        viewModel.setDialogError(false)
                    },
                }}
                onClose={() => viewModel.setDialogError(false)}
            />
        </View >
    )
}

export default DetailProduct;

const styles = StyleSheet.create({
    icon_return: {
        position: 'absolute',
        top: 10,
        left: 5,
        zIndex: 100,
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999
    },
    image_product: {
        maxWidth: '100%',
        height: 350,
        objectFit: 'fill'
    },
    container_infor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderTopStartRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: -330,
        paddingTop: 10,
        gap: 10
    },
    containerButton: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        elevation: 3,
    }

})