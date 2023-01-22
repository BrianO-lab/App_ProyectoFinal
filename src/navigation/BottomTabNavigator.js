import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import MyLibraryNavigator from "./MyLibraryNavigator";
import NewPostNavigator from "./NewPostNavigator";
import MyAccountNavigator from "./MyAccountNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="MyLibrary"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTabs.Screen
          name="MyLibrary"
          component={MyLibraryNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="library" size={20} color="black" />
                <Text>Estanteria</Text>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="NewPost"
          component={NewPostNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Entypo name="book" size={20} color="black" />
                <Text>Nuevo</Text>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="MyAccount"
          component={MyAccountNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <MaterialIcons name="account-circle" size={20} color="black" />
                <Text>Cuenta</Text>
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
