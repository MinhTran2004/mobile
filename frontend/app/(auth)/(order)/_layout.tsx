import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderWaiting from '.';
import OrderCancel from './order-cancel';
import OrderCompleted from './order-completed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetail from './order-detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../(home)';
import { IconHome, IconShoppingCart, IconUser } from 'tabler-icons-react-native';

const Stack = createNativeStackNavigator();

const LayoutOrder = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='topTabs' component={TopTabs}/>
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

export default LayoutOrder;