import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListBookScreen from "../screens/ListBookScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default MyLibraryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListBook"
      screenOptions={{
        headerStyle: COLORS.SECONDARY,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ListBook"
        component={ListBookScreen}
        options={{
          title: "Bilioteca",
        }}
      />
    </Stack.Navigator>
  );
};
