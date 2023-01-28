import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const ItemList = () => {
  return (
    <TouchableOpacity style={styles.placeItem}>
      <Image
        style={styles.image}
        source={{
          uri: "https://otakuteca.com/images/books/cover/5d98f2db2a1d5.jpg",
        }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>text 1</Text>
        <Text style={styles.editorial}>text 2</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 5,
    backgroundColor: COLORS.FOURTH,
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: COLORS.THIRD,
    fontSize: 18,
    marginBottom: 6,
  },
  editorial: {
    color: "#777",
    fontSize: 16,
  },
});
