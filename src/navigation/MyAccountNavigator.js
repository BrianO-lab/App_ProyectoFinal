import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default MyAccountNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyAccount"
      screenOptions={{
        headerStyle: COLORS.SECONDARY,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          title: "Cuenta",
        }}
      />
    </Stack.Navigator>
  );
};
