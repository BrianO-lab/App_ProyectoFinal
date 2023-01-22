import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "../screens/NewPostScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default NewPostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NewPost"
      screenOptions={{
        headerStyle: COLORS.SECONDARY,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          title: "Agrega un nuevo libro",
        }}
      />
    </Stack.Navigator>
  );
};
