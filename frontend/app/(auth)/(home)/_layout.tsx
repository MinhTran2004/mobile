import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./cart";
import EditAddress from "./edit-address";
import Home from "./index";
import Search from "./search";
import DetailProduct from "./detail-product";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconHome, IconShoppingCart, IconUser } from "tabler-icons-react-native";
import Profile from "../(profile)";
import TopTabs from "../(order)/_layout";
import Payment from "./payment";
import Address from "./address";
import Coupon from "./coupon";
import DetailCoupon from "./detail-coupon";
import CreateAddress from "./create-address";

const Stack = createNativeStackNavigator();

const LayoutHome = () => {
    return (
        <Stack.Navigator initialRouteName="address" screenOptions={{headerShown: false}} >
            <Stack.Screen name="index" component={LayoutBottomTabs} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="detail-product" component={DetailProduct} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="address" component={Address} />
            <Stack.Screen name="create-address" component={CreateAddress} />
            <Stack.Screen name="edit-address" component={EditAddress} />
            <Stack.Screen name="coupon" component={Coupon} />
            <Stack.Screen name="detail-coupon" component={DetailCoupon} />
        </Stack.Navigator>
    )
}

const BottomTabs = createBottomTabNavigator();

const LayoutBottomTabs = () => {
    return (
        <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
            <BottomTabs.Screen
                name="Trang chủ"
                component={Home}
                options={{ tabBarLabel: 'Trang chủ', tabBarIcon: ({color, size}) => <IconHome />}} />
            <BottomTabs.Screen
                name="Đơn hàng"
                component={TopTabs}
                options={{ tabBarLabel: 'Đơn hàng', tabBarIcon: ({color, size}) => <IconShoppingCart /> }} />
            <BottomTabs.Screen
                name="Thông tin"
                component={Profile}
                options={{ tabBarLabel: 'Thông tin', tabBarIcon: ({color, size}) => <IconUser /> }} />
        </BottomTabs.Navigator>
    )
}

export default LayoutHome;