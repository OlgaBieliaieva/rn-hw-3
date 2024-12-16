import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MainButton from "./MainButton";
import CameraIcon from "./icons/CameraIcon";
import MapPinIcon from "./icons/MapPinIcon";
import { colors } from "../styles/global";

const CreatePostForm = ({navigation}) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const isFormValid = name && location;

  function handleSubmit() {
    const post = {
      name,
      location,
    };
    console.log(post);

    Alert.alert(`Опубліковано!`);
    setName("");
    setLocation("");
    navigation.navigate("Posts")
  }
  return (
    <View style={styles.formContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <View style={styles.iconWrapper}>
            <CameraIcon />
          </View>
        </View>
        <Text style={styles.inputText}>Завантажте фото</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Назва..."
          autoComplete="off"
          autoCapitalize="true"
          style={styles.commonInput}
        />
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Місцевість..."
          autoComplete="off"
          autoCapitalize="true"
          style={[styles.commonInput, styles.locationInput]}
        />
        <MapPinIcon style={styles.inputIcon} />
      </View>
      <MainButton action={handleSubmit} disabled={!isFormValid}>
        <Text
          style={isFormValid ? styles.activeBtnText : styles.inactiveBtnText}
        >
          Опублікувати
        </Text>
      </MainButton>
    </View>
  );
};
export default CreatePostForm;

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 32,
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    gap: 8,
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: colors.lightGrayBg,
    borderRadius: 8,
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: colors.white,
  },
  inputText: {
    fontSize: 16,
    color: colors.lightGrayText,
  },
  inputsContainer: {
    width: "100%",
    display: "flex",
    gap: 16,
  },
  commonInput: {
    paddingVertical: 16,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrayBorder,
    color: colors.black,
    fontSize: 16,
  },
  locationInput: {
    position: "relative",
    paddingLeft: 28,
  },
  inputIcon: {
    position: "absolute",
    bottom: 16,
    left: 0,
  },
  activeBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: colors.white,
  },
  inactiveBtnText: {
    textAlign: "center",
    fontSize: 16,
    color: colors.lightGrayText,
  },
});
