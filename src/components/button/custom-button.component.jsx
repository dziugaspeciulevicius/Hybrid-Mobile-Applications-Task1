import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles.customButton}>
    <Text style={buttonStyles.customButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const buttonStyles = StyleSheet.create({
  customButton: {
    elevation: 8,
    backgroundColor: "#2C2D2C",
    width: 100,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    textAlign: "center",
  },
  customButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
