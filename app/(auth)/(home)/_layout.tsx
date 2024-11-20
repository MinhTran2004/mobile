import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from ".";
import Cart from "./cart";

const Stack = createNativeStackNavigator();

const LayoutHome = () => {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{headerShown: false}}  >
            <Stack.Screen name="index" component={Home} />
            <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default LayoutHome;