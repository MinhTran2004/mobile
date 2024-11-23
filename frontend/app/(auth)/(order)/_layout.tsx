import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderWaiting from '.';
import OrderCancel from './order-cancel';
import OrderCompleted from './order-completed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetail from './order-detail';

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const LayoutOrder = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='topTabs' component={TopTabs}/>
            <Stack.Screen name='detail-order' component={OrderDetail} />
        </Stack.Navigator>

    )
}

const TopTabs = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='waiting' component={OrderWaiting} />
            <TopTab.Screen name='completed' component={OrderCompleted} />
            <TopTab.Screen name='cancel' component={OrderCancel} />
        </TopTab.Navigator>
    )
}

export default LayoutOrder;