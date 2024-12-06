import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderWaiting from '.';
import OrderCancel from './order-cancel';
import OrderCompleted from './order-completed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetail from './order-detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../(home)';
import { IconHome, IconShoppingCart, IconUser } from 'tabler-icons-react-native';
import LayoutProfile from '../(profile)/_layout';
import LayoutHome from '../(home)/_layout';

const Stack = createNativeStackNavigator();

const LayoutOrder = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' component={LayoutBottomTabs} />
            <Stack.Screen name='detail-order' component={OrderDetail} />
        </Stack.Navigator>
    )
}

const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='Chờ xác nhận' component={OrderWaiting} />
            <TopTab.Screen name='Hoàn thành' component={OrderCompleted} />
            <TopTab.Screen name='Hủy bỏ' component={OrderCancel} />
        </TopTab.Navigator>
    )
}

const BottomTabs = createBottomTabNavigator();

const LayoutBottomTabs = () => {
    return (
        <BottomTabs.Navigator initialRouteName='Đơn hàng' screenOptions={{ headerShown: false }}>
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
                component={TopTabs}
                options={{
                    tabBarLabel: 'Đơn hàng',
                    tabBarIcon: ({ color, size }) => <IconShoppingCart />
                }} />
            <BottomTabs.Screen
                name="Thông tin"
                component={LayoutProfile}
                options={{
                    tabBarLabel: 'Thông tin',
                    tabBarIcon: ({ color, size }) => <IconUser />,
                    tabBarStyle: { display: 'none' }
                }} />
        </BottomTabs.Navigator>
    )
}

export default LayoutOrder;