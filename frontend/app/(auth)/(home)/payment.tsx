import AppHeader from "@/components/AppHeader"
import ItemProductPayment from "@/components/home/ItemProductPayment"
import { ViewModelHome } from "@/viewmodel/home/home.viewmodel"
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IconAddressBook, IconChevronRight, IconDiscount, IconWallet } from "tabler-icons-react-native"
import { Checkbox, List } from 'react-native-paper';
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import StatusModal from "@/components/StatusModal"

const Payment = () => {
    const viewmodel = ViewModelHome();
    const navigation = useNavigation();

    const [checkBox, setCheckBox] = useState(true);
    const [dialog, setDialog] = useState(false);

    return (
        <ScrollView style={{ flex: 1 }}>
            <AppHeader iconLeft="left" title="Thanh toán" iconRight="none" onPressIconLeft={() => navigation.goBack()} />
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10, paddingBottom: 30, paddingHorizontal: 10, gap: 10 }}>
                {/* banner1 */}
                <View style={styles.conatiner}>
                    <Text style={styles.title}>Địa chỉ nhận hàng</Text>
                    {/* option 1 */}
                    {/* <View style={styles.banner1}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <IconAddressBook />
                            <View>
                                <Text>Home</Text>
                                <Text>63 Lê Đúc Thọ, Nam Từ Liêm, Hà Nội</Text>
                            </View>
                        </View>
                        <IconChevronRight />
                    </View> */}

                    {/* option 2 */}
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }} onPress={() => { navigation.navigate('address') }}>
                        <Text style={styles.textButton}>Thêm địa chỉ</Text>
                    </TouchableOpacity>

                </View>

                {/* banner2 */}
                <View style={styles.conatiner}>
                    <Text style={styles.title}>Sản phẩm</Text>
                    <FlatList
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        data={viewmodel.dataProductHorizontal}
                        renderItem={({ item }) => <ItemProductPayment key={item._id} _id={item._id} image={item.image} name={item.name} idCategory={item.idCategory} price={item.price} />} />
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
                                right={props => <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
                                    <Checkbox status={checkBox ? 'checked' : 'unchecked'} />
                                </TouchableOpacity>} />
                            <List.Item
                                left={props => <IconAddressBook />}
                                title="Thanh toán bằng VNPAY"
                                right={props => <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
                                    <Checkbox status={checkBox ? 'unchecked' : 'checked'} />
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

                <TouchableOpacity style={{ backgroundColor: '#4C1B1B', marginTop: 10, padding: 15, borderRadius: 25 }} onPress={() => setDialog(true)}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 500, fontSize: 17 }}>Thanh toán</Text>
                </TouchableOpacity>

                <StatusModal
                    isActive={dialog}
                    title="Thông báo"
                    label="Xác nhận thanh toán"
                    icon="none"
                    statusLayoutButton="row"
                    secondaryButton={{
                        label: 'Có', onPress() {
                            setDialog(false)
                        }, }}
                    primaryButton={{
                        label: 'Không', onPress() {
                            setDialog(false)
                        }, }}
                    onClose={() => setDialog(false)}
                />



            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 500,
        fontSize: 16,
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