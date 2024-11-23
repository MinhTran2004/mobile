import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "./welcome";
import Register from "./register";
import Login from "./login";
import LayoutHome from "./(home)/_layout";
import Start from ".";
import Profile from "./(profile)/layout";

const Stack = createNativeStackNavigator();

export default function LayoutAuth() {
  return (
    <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" component={Start} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="layoutHome" component={LayoutHome} />
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>

  )
}