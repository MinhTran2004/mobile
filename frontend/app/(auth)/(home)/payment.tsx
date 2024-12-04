import AppHeader from "@/components/AppHeader"
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IconAddressBook, IconChevronRight, IconDiscount, IconWallet } from "tabler-icons-react-native"
import { Checkbox, List } from 'react-native-paper';
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import ViewModelPayment from "@/viewmodel/home/payment.viewmodel"
import ItemProductPayment from "@/components/home/ItemProductPayment";
import PrimaryButton from "@/components/PrimaryButton";

const Payment = (route: any) => {
    const viewmodel = ViewModelPayment();
    const navigation = useNavigation();
    const router = route.route.params;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <AppHeader iconLeft="left" title="Thanh toán" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10, paddingBottom: 120, paddingHorizontal: 10, gap: 10 }}>
                    {/* banner1 */}
                    <View style={styles.conatiner}>
                        <Text style={styles.title}>Địa chỉ nhận hàng</Text>
                        {viewmodel.detailAddress ?
                            // option 1 
                            < TouchableOpacity style={styles.banner1} onPress={() => { navigation.navigate('address') }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                    <IconAddressBook />
                                    <View style={{ flex: 1 }}>
                                        <Text>{viewmodel.address?.name}</Text>
                                        <Text numberOfLines={2}>{viewmodel.detailAddress}</Text>
                                    </View>
                                </View>
                                <IconChevronRight style={{ flex: 1 }} />
                            </TouchableOpacity>
                            :
                            // option 2 
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }} onPress={() => { navigation.navigate('address') }}>
                                <Text style={styles.textButton}>Thêm địa chỉ</Text>
                            </TouchableOpacity>
                        }
                    </View>

                    {/* banner2 */}
                    <View style={styles.conatiner}>
                        <Text style={styles.title}>Sản phẩm</Text>
                        <FlatList
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            data={router}
                            renderItem={({ item }) => <ItemProductPayment key={item._id} {...item} />} />
                    </View>

                    {/* banner3 */}
                    <View style={styles.conatiner}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('coupon')}
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingRight: 23 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <IconDiscount />
                                <Text style={{ fontSize: 16 }}>Mã giảm giá</Text>
                            </View>
                            <IconChevronRight size={23} />
                        </TouchableOpacity>

                        <List.Accordion
                            style={{ backgroundColor: '#F9F9F9' }}
                            title="Phương thức thánh toán"
                            left={props => <IconWallet />}>
                            <List.Section>
                                <List.Item
                                    left={props => <IconAddressBook />}
                                    title="Thanh toán trực tiếp"
                                    right={props => <TouchableOpacity onPress={() => viewmodel.setCheckBox(!viewmodel.checkBox)}>
                                        <Checkbox status={viewmodel.checkBox ? 'checked' : 'unchecked'} />
                                    </TouchableOpacity>} />
                                <List.Item
                                    left={props => <IconAddressBook />}
                                    title="Thanh toán bằng VNPAY"
                                    right={props => <TouchableOpacity onPress={() => viewmodel.setCheckBox(!viewmodel.checkBox)}>
                                        <Checkbox status={viewmodel.checkBox ? 'unchecked' : 'checked'} />
                                    </TouchableOpacity>} />
                            </List.Section>
                        </List.Accordion>
                    </View>

                    {/* banner 4 */}
                    <View style={styles.conatiner}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Tạm tính</Text>
                            <Text>20.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Chi phí vận chuyển</Text>
                            <Text>20.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text>Giảm giá</Text>
                            <Text>20.000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopWidth: 1, paddingTop: 10, marginTop: 10 }}>
                            <Text>Tổng tiền</Text>
                            <Text>20.000</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <PrimaryButton
                label={"Thanh toán"}
                onPress={() => { }} />
        </View >
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
    }


})

export default Payment;