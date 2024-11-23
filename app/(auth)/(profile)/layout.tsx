import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homee from "./index";
import TTND from "./ttnd";
import DMK from "./dmk";
import CS from "./cs";
// import KM from "./km";


const Stack = createNativeStackNavigator();

const Profile = () => {
    return (
        <Stack.Navigator initialRouteName="cs" screenOptions={{headerShown: false}}  >
            <Stack.Screen name="index" component={Homee} />
          <Stack.Screen name="ttnd" component={TTND}/>
          <Stack.Screen name="dmk" component={DMK}/>
          <Stack.Screen name="cs" component={CS}/>
          {/* <Stack.Screen name="km" component={KM}/> */}
        </Stack.Navigator>
    )
}

export default Profile;