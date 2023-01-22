import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import ImageSelector from "../components/ImageSelector";
import { COLORS } from "../constants/colors";

const NewPostScreen = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();

  const handleTitleChange = (text) => setTitle(text);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />

        {/* <Button
          title="Grabar direccion"
          color={COLORS.MAROON}
          onPress={handleSave}
        /> */}
      </View>
    </ScrollView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({});
