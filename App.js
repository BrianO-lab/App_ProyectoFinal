import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
// import { Provider } from "react-redux";
// import store from "./src/store";

export default function App() {
  return <BottomTabNavigator />;
}

const styles = StyleSheet.create({});
