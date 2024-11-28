import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "./welcome";
import Register from "./register";
import Login from "./login";
import Start from "./index";
import { useSelector } from "react-redux";
import LayoutHome from "./(home)/_layout";

const Stack = createNativeStackNavigator();

export default function LayoutAuth() {
  const select = useSelector((state:any) => state.loading);

  return (
    <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" component={Start} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="layoutHome" component={LayoutHome} />
    </Stack.Navigator>
  )
}