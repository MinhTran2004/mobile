import { Button, FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import IconUser from "@/assets/images/home/user-icon.svg";
import IconCart from "@/assets/images/home/cart-icon.svg";
import InputEditText from "@/components/InputEditText";
import ItemProductCategory from "@/components/home/ItemProductCategory";
import IconProduct from "@/assets/images/home/product-icon.svg";
import PagerView from "react-native-pager-view";
import { ViewModelHome } from "@/viewmodel/VM-Product/Home";
import ProductHozirontalItem from "@/components/home/ProductHozirontalItem";
import ProductVerticalItem from "@/components/home/ProductVerticalItem";

const Home = ({navigation}:any) => {
    const viewmodel = ViewModelHome();
    return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    {/* header */}
                    <View style={styles.containerHeader}>
                        <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <IconUser width={40} height={40} />
                            <View>
                                <Text>Hi, Trần Công Minh</Text>
                                <Text>Hôm nay bạn sẽ mua gì</Text>
                            </View>
                        </View>
                        <Pressable 
                        style={{ borderWidth: 1, borderColor: '#E2E4E8', borderRadius: 999, width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}
                        onPress = {() => navigation.navigate('cart')}>
                            <IconCart width={30} height={30} />
                        </Pressable>
                    </View>

                    {/* body  */}
                    <View style={styles.containerBody}>
                        <InputEditText iconLeft={"search"} hint="Bạn muốn ăn gì ?" />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                            <Text style={styles.title}>Ưu đãi đặc biệt</Text>
                            <Text>Xem tất cả</Text>
                        </View>

                        <PagerView style={{ width: '100%', height: 100 }} initialPage={0}>
                            <View key={'1'}>
                                <View style={{ backgroundColor: 'blue', height: 100, width: '100%' }} />
                            </View>
                            <View key={'2'}>
                                <View style={{ backgroundColor: 'green', height: 100, width: '100%' }} />
                            </View>
                            <View key={'3'}>
                                <View style={{ backgroundColor: 'red', height: 100, width: '100%' }} />
                            </View>
                        </PagerView>

                        <View style={{ flexDirection: 'row' }}>
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                            <ItemProductCategory icon={<IconProduct />} name="Pizaa" />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                            <Text style={styles.title}>Đồ giảm giá</Text>
                            <Text>Xem tất cả</Text>
                        </View>

                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={viewmodel.dataProductHorizontal}
                            renderItem={({ item }) => <ProductHozirontalItem key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} />} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                            <Text style={styles.title}>Dành cho bạn</Text>
                            <Text>Xem tất cả</Text>
                        </View>

                        <FlatList
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            data={viewmodel.dataProductHorizontal}
                            renderItem={({ item }) => <ProductVerticalItem key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} />} />
                    </View>

                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    containerHeader: {
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerBody: {
        width: '100%',
        gap: 20
    },
    title: {
        fontSize: 15,
        fontWeight: 600,
        color: '#2C2C2C'
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Home;