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
        <Text style={styles.label}>Nombre del libro</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPostScreen;
