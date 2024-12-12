import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePassword from "./change-password";
import PrivacyPolicy from "./privacy-policy";
import PersonalInformation from "./personal-information";
import Profile from ".";
import { IconHome, IconShoppingCart, IconUser } from "tabler-icons-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(home)";
import LayoutOrder from "../(order)/_layout";
import LayoutHome from "../(home)/_layout";
import Coupon from "./coupon";
import LayoutAuth from "../_layout";

const Stack = createNativeStackNavigator();

const LayoutProfile = () => {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}  >
            <Stack.Screen name="index" component={LayoutBottomTabs} />
            <Stack.Screen name="personal-information" component={PersonalInformation} />
            <Stack.Screen name="change-password" component={ChangePassword} />
            <Stack.Screen name="privacy-policy" component={PrivacyPolicy} />
            <Stack.Screen name="coupon" component={Coupon} />
            <Stack.Screen name="auth" component={LayoutAuth} />
        </Stack.Navigator>
    )
}

const BottomTabs = createBottomTabNavigator();

const LayoutBottomTabs = () => {
    return (
        <BottomTabs.Navigator initialRouteName="Thông tin" screenOptions={{ headerShown: false }}>
            <BottomTabs.Screen
                name="Trang chủ"
                component={LayoutHome}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => <IconHome />,
                    tabBarStyle: { display: 'none' }
                }} />
            <BottomTabs.Screen
                name="Đơn hàng"
                component={LayoutOrder}
                options={{
                    tabBarLabel: 'Đơn hàng',
                    tabBarIcon: ({ color, size }) => <IconShoppingCart />,
                    tabBarStyle: { display: 'none' }
                }} />
            <BottomTabs.Screen
                name="Thông tin"
                component={Profile}
                options={{
                    tabBarLabel: 'Thông tin',
                    tabBarIcon: ({ color, size }) => <IconUser />,
                }} />
        </BottomTabs.Navigator>
    )
}

export default LayoutProfile;