import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.ViewContainer}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 3,
  },
  textOneStyle: {
    borderWidth: 3,
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  textTwoStyle: {
    borderWidth: 3,
    backgroundColor: "blue",
    height: 50,
    width: 50,
    marginTop: 50,
  },
  textThreeStyle: {
    borderWidth: 3,
    backgroundColor: "green",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
