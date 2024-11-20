import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./cart";
import EditAddress from "./edit-address";
import Home from "./index";

const Stack = createNativeStackNavigator();

const LayoutHome = () => {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{headerShown: false}}  >
            <Stack.Screen name="index" component={Home} />
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="edit-address" component={EditAddress} />
        </Stack.Navigator>
    )
}

export default LayoutHome;