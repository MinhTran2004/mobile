import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ViewModelDetailProduct } from "@/viewmodel/home/detail-product.viewmodel";
import { IconChevronLeft, IconHeart, IconMessage, IconShoppingCart } from "tabler-icons-react-native";
import StatusModal from "@/components/StatusModal";

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
    const navigation = useNavigation();
    const viewModel = ViewModelDetailProduct();
    const product = route.route.params;

    const [dialog, setDialog] = useState(false);
    const [dialog2, setDialog2] = useState(false);
    

    return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity style={styles.icon_return} onPress={() => navigation.goBack()}>
                <IconChevronLeft />
            </TouchableOpacity>

            <Image src={product.image} style={styles.image_product} />
            <View style={styles.container_infor}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.name_product}>{product.name}</Text>
                        <Text style={styles.price_product}>{product.price}</Text>
                    </View>
                    <IconHeart style={{ width: 25, height: 25 }} />
                </View>
                <Text style={styles.des_product}>Giới thiệu sản phẩm</Text>
                <Text style={{ fontSize: 17 }}>Pizza là một món ăn truyền thống nổi tiếng của Ý, thường được làm từ bột mì, nước, muối, và men, rồi được nướng với các loại topping đa dạng như sốt cà chua, phô mai, thịt, rau củ và gia vị. Với hương vị đậm đà và sự kết hợp phong phú</Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={{ flex: 2, alignItems: 'center' }}>
                    <IconMessage />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 2, alignItems: 'center' }} onPress={() => { viewModel.addProductToCart(product._id), setDialog2(true)}}>
                    <IconShoppingCart />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 6, padding: 15, backgroundColor: '#4C1B1B', borderRadius: 20 }} onPress={() => setDialog(true)}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Mua ngay</Text>
                </TouchableOpacity>
            </View>

            {/* Dialog mua hàng */}
            <StatusModal
                isActive = {dialog}
                title="Thông báo"
                label="Bạn có muốn tiếp tục mua hàng?"
                icon="none"
                statusLayoutButton="row"
                secondaryButton={{label: 'Có' , onPress() {
                    setDialog(false)                    
                },}}
                primaryButton={{label: 'Không' , onPress() {
                    setDialog(false)
                },}}
                onClose={() => setDialog(false)}
            />

            {/* Dialog thêm sản phẩm vào giỏ hàng */}
            <StatusModal
                isActive={dialog2}
                title="Thông báo"
                label="Đã thêm sản phẩm vào giỏ hàng !!!"
                icon="none"
                statusLayoutButton="single"
                primaryButton={{
                    label: 'Đóng', onPress() {
                        setDialog2(false)
                    },}}
                onClose={() => setDialog2(false)}
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
        backgroundColor: '#F9FAFB',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999
    },
    image_product: {
        width: '100%',
        height: 350,
        objectFit: 'fill'
    },
    container_infor: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 15,
        borderTopStartRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: -330,
    },
    name_product: {
        fontWeight: 'bold',
        fontSize: 23
    },
    price_product: {
        fontSize: 19,
        marginTop: 5
    },
    des_product: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
    },
    containerButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    }

})