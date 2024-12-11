import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import IconCart from "@/assets/images/home/cart-icon.svg";
import ItemProductCategory from "@/components/home/ItemProductCategory";
import PagerView from "react-native-pager-view";
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel";
import ProductHozirontalItem from "@/components/home/ProductHozirontalItem";
import ProductVerticalItem from "@/components/home/ProductVerticalItem";
import IconSearch from "@/assets/images/home/sreach-icon.svg";

const Home = ({ navigation }: any) => {
    const viewmodel = ViewModelHome();

    const handleNavigateToCategory = (idCategory: string) => {
        navigation.navigate('category', { idCategory });
    };

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View style={styles.containerHeader}>
                <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Hi, Trần Công Minh</Text>
                        <Text style={{ fontSize: 16 }}>Hôm nay bạn sẽ mua gì?</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Pressable
                        style={{ borderWidth: 1, borderColor: '#E2E4E8', borderRadius: 999, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.navigate('search')}>
                        <IconSearch width={20} height={20} />
                    </Pressable>
                    <Pressable
                        style={{ borderWidth: 1, borderColor: '#E2E4E8', borderRadius: 999, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.navigate('cart')}>
                        <IconCart width={30} height={30} />
                    </Pressable>
                </View>
            </View>

            {/* body  */}
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={styles.container}>

                    <View style={styles.containerBody}>
                        <View style={{ gap: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                <Text style={styles.title}>Ưu đãi đặc biệt</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#909090', fontSize: 16 }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>

                            <PagerView style={{ height: 180, width: '100%' }} initialPage={0}>
                                <View key={'1'} style={{ borderRadius: 10, overflow: 'hidden', width: '100%' }}>
                                    <Image source={require('@/assets/images/home/banner-1.png')} style={{ height: 180, width: '100%', objectFit: 'contain' }} />
                                </View>
                                <View key={'2'} style={{ borderRadius: 10, overflow: 'hidden', width: '100%' }}>
                                    <Image source={require('@/assets/images/home/banner-2.png')} style={{ height: 180, width: '100%', objectFit: 'contain' }} />
                                </View>
                                <View key={'3'} style={{ borderRadius: 10, overflow: 'hidden', width: '100%' }}>
                                    <Image source={require('@/assets/images/home/banner-3.png')} style={{ height: 180, width: '100%', objectFit: 'contain' }} />
                                </View>
                            </PagerView>

                            <View style={{ flexDirection: 'row' }}>
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_pizza.png')} style={styles.ic_category} />}
                                    name="Pizaa"
                                    onPress={() => handleNavigateToCategory('Gà Rán')}
                                />
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_hamburger.png')} style={styles.ic_category} />}
                                    name="Hamburger"
                                    onPress={() => handleNavigateToCategory('Burger')}
                                />
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_drink.png')} style={styles.ic_category} />}
                                    name="Drink"
                                    onPress={() => handleNavigateToCategory('Mì')}
                                />
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_chicken.png')} style={styles.ic_category} />}
                                    name="Chicken"
                                    onPress={() => handleNavigateToCategory('Cơm')}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_noodles.png')} style={styles.ic_category} />}
                                    name="Noodles"
                                    onPress={() => handleNavigateToCategory('Gà Rán')}
                                />
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_rice.png')} style={styles.ic_category} />}
                                    name="Rice"
                                    onPress={() => handleNavigateToCategory('Burger')}
                                />
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_cream.png')} style={styles.ic_category} />}
                                    name="Ice cream"
                                    onPress={() => handleNavigateToCategory('Mì')}
                                />
                                <ItemProductCategory
                                    icon={<Image source={require('@/assets/images/home/ic_more.png')} style={styles.ic_category} />}
                                    name="More"
                                    onPress={() => handleNavigateToCategory('Cơm')}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={styles.title}>Đồ giảm giá</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#909090', fontSize: 16 }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>

                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={viewmodel.dataProductHorizontal}
                                renderItem={({ item }) => <ProductHozirontalItem key={item._id} {...item} />} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={styles.title}>Dành cho bạn</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#909090', fontSize: 16 }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>

                            <FlatList
                                scrollEnabled={false}
                                showsHorizontalScrollIndicator={false}
                                data={viewmodel.dataProductVertical}
                                renderItem={({ item }) => <ProductVerticalItem key={item._id} {...item} />}
                                keyExtractor={item => item._id.toString()} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    containerHeader: {
        paddingHorizontal: 10,
        paddingTop: 16,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    containerBody: {
        width: '100%',
        gap: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ic_category: {
        width: 40,
        height: 40
    }
})

export default Home;
