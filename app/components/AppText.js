import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
  },
});
