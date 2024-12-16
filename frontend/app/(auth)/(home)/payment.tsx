import AppHeader from "@/components/AppHeader"
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IconAddressBook, IconChevronRight, IconDiscount, IconPlus, IconWallet } from "tabler-icons-react-native"
import { Checkbox, List } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native"
import ViewModelPayment from "@/viewmodel/home/payment.viewmodel"
import ItemProductPayment from "@/components/home/ItemProductPayment";
import PrimaryButton from "@/components/PrimaryButton";
import StatusModal from "@/components/StatusModal"

const Payment = ({ route }: any) => {
    const viewmodel = ViewModelPayment();
    const navigation = useNavigation();

    const { dataCart, total, coupon } = route.params;

    const totalCost = Number(total) + 20000 - (coupon ? Number(coupon.discountValue) : 0);
    
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ flex: 1 }}>
                <AppHeader
                    iconLeft="left"
                    title="Thanh toán"
                    iconRight="none"
                    onPressIconLeft={() => navigation.goBack()}
                />

                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10, paddingBottom: 120, paddingHorizontal: 10, gap: 10 }}>
                    {/* banner1 */}
                    <View style={styles.conatiner}>
                        <Text style={styles.title}>Địa chỉ nhận hàng</Text>
                        {viewmodel.detailAddress ?
                            // option 1 
                            < TouchableOpacity style={styles.banner1} onPress={() => { navigation.navigate('address') }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text>{viewmodel.address[0].name}</Text>
                                        <Text numberOfLines={2}>{viewmodel.detailAddress}</Text>
                                    </View>
                                </View>
                                <IconChevronRight style={{ flex: 1 }} />
                            </TouchableOpacity>
                            :
                            // option 2 
                            <TouchableOpacity
                                style={{ paddingVertical: 5, alignItems: 'center', flexDirection: 'row' }}
                                onPress={() => {
                                    navigation.replace('address')
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, flex: 1 }}>
                                    <IconPlus size={22} />
                                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Thêm địa chỉ</Text>
                                </View>
                                <IconChevronRight />
                            </TouchableOpacity>
                        }
                    </View>

                    {/* banner2 */}
                    <View style={styles.conatiner}>
                        <Text style={styles.title}>Sản phẩm</Text>
                        <FlatList
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            data={dataCart}
                            renderItem={({ item }) => <ItemProductPayment key={item._id} {...item} />} />
                    </View>

                    {/* banner3 */}
                    <View style={styles.conatiner}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('coupon', {
                                dataCart: dataCart,
                                total: total,
                            })}
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingRight: 23 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <IconDiscount />
                                <Text style={{ fontSize: 16 }}>Mã giảm giá</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                {coupon ?
                                    <Text style={{ fontSize: 16 }}>{coupon.discountValue}</Text>
                                    :
                                    <View />}
                                <IconChevronRight size={23} />
                            </View>
                        </TouchableOpacity>

                        <List.Accordion
                            style={{ backgroundColor: '#F9F9F9' }}
                            title="Phương thức thánh toán"
                            left={props => <IconWallet />}>
                            <List.Section>
                                <List.Item
                                    left={props => <IconAddressBook />}
                                    title="Thanh toán trực tiếp"
                                    right={props => <TouchableOpacity onPress={() => {
                                        viewmodel.setPayment('Thanh toán trực tiếp'),
                                            viewmodel.setCheckBox(!viewmodel.checkBox)
                                    }}>
                                        <Checkbox status={viewmodel.checkBox ? 'checked' : 'unchecked'} />
                                    </TouchableOpacity>} />
                                <List.Item
                                    left={props => <IconAddressBook />}
                                    title="Thanh toán bằng VNPAY"
                                    right={props => <TouchableOpacity onPress={() => {
                                        viewmodel.setPayment('Thanh toàn VNPAY'),
                                            viewmodel.setCheckBox(!viewmodel.checkBox)
                                    }}>
                                        <Checkbox status={viewmodel.checkBox ? 'unchecked' : 'checked'} />
                                    </TouchableOpacity>} />
                            </List.Section>
                        </List.Accordion>
                    </View>

                    {/* banner 4 */}
                    <View style={styles.conatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.txtPrice}>Tạm tính</Text>
                            <Text style={styles.txtPrice}>{total}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.txtPrice}>Chi phí vận chuyển</Text>
                            <Text style={styles.txtPrice}>20.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.txtPrice}>Giảm giá</Text>
                            <Text style={styles.txtPrice}>{coupon ? coupon.discountValue : 0}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, paddingTop: 10, marginTop: 10, borderColor: '#bbb' }}>
                            <Text style={styles.txtPrice}>Tổng tiền</Text>
                            <Text style={styles.txtPrice}>{totalCost}</Text>
                        </View>
                    </View>

                    <StatusModal
                        isActive={viewmodel.dialog}
                        title="Thông báo"
                        label="Xác nhận thanh toán"
                        icon="none"
                        statusLayoutButton="row"
                        secondaryButton={{
                            label: 'Có', onPress() {
                                viewmodel.setDialog(false)
                            },
                        }}
                        primaryButton={{
                            label: 'Không', onPress() {
                                viewmodel.setDialog(false)
                            },
                        }}
                        onClose={() => viewmodel.setDialog(false)}
                    />
                </View>
            </ScrollView>
            <PrimaryButton
                styleButton={{ position: 'fixed' }}
                label="Thanh toán"
                onPress={() => { viewmodel.createPaymentURL(dataCart, totalCost.toString(), coupon) }} />
            {/* setDialog(true) */}
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 500,
        fontSize: 18,
        paddingBottom: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#D7D4D4',
    },
    conatiner: {
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        padding: 10,
        gap: 5
    },
    banner1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButton: {
        backgroundColor: '#4c1b1b',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 12,
        borderRadius: 999,
        color: 'white'
    },
    txtPrice: {
        fontSize: 16
    }


})

export default Payment;