import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU",
            }}
          />
        </View>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>user</Text>
        </View>
      </View>
      <View style={styles.settings}>
        <View>
          <Text style={styles.texteSettings}>Configuracion</Text>
        </View>
        <View>
          <Text style={styles.texteSettings}>about</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    borderColor: COLORS.FOURTH,
    borderWidth: 5,
  },
  user: {
    flex: 1,
    flexDirection: "row",
    borderColor: COLORS.BLACK,
    borderWidth: 5,
  },
  containerImage: {
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    flex: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    textAlign: "center",
  },
  userName: {
    flex: 3,
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
  },
  userNameText: {
    fontSize: 25,
    textAlign: "center",
  },
  settings: {
    flex: 4,
    borderColor: COLORS.BLACK,
    borderWidth: 5,
  },
  texteSettings: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 5,
    textAlign: "right",
  },
});

export default MyAccountScreen;
