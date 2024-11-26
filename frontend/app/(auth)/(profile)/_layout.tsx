import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePassword from "./change-password";
import PrivacyPolicy from "./privacy-policy";
import PersonalInformation from "./personal-information";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../(home)";
import { IconHome, IconShoppingCart, IconUser } from "tabler-icons-react-native";
import { Profiler } from "react";
import Profile from ".";
import TopTabs from "../(order)/_layout";

const Stack = createNativeStackNavigator();

const LayoutProfile = () => {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}  >
            <Stack.Screen name="index" component={Profile} />
            <Stack.Screen name="personal-information" component={PersonalInformation} />
            <Stack.Screen name="change-password" component={ChangePassword} />
            <Stack.Screen name="privacy-policy" component={PrivacyPolicy} />
        </Stack.Navigator>
    )
}

export default LayoutProfile;