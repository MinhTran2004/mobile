import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageProfile from ".";
import ChangePassword from "./change-password";
import PrivacyPolicy from "./privacy-policy";
import PersonalInformation from "./personal-information";

const Stack = createNativeStackNavigator();

const LayoutProfile = () => {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}  >
            <Stack.Screen name="index" component={PageProfile} />
            <Stack.Screen name="personal-information" component={PersonalInformation} />
            <Stack.Screen name="change-password" component={ChangePassword} />
            <Stack.Screen name="privacy-policy" component={PrivacyPolicy} />
        </Stack.Navigator>
    )
}

export default LayoutProfile;