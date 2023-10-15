import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Button,
  Alert,
  View,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textView}>Hello There</Text>
      <View style={styles.buttonView}>
        <Button
          title="Component Screen"
          color="#f194ff"
          onPress={() => navigation.navigate("Components")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="List Screen"
          color="#841584"
          onPress={() => navigation.navigate("List")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Image Screen"
          color="#363062"
          onPress={() => navigation.navigate("Image")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Counter Screen"
          color="#ef9062"
          onPress={() => navigation.navigate("Counter")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Color Screen"
          color="#129062"
          onPress={() => navigation.navigate("Color")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Text Screen"
          color="#9f3d62"
          onPress={() => navigation.navigate("Text")}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Box Screen"
          color="#1e6d32"
          onPress={() => navigation.navigate("Box")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  textView: {
    textAlign: "center",
    fontSize: 16,
  },
  buttonView: {
    marginVertical: 10,
  },
  OpacityItem: {
    alignItems: "center",
    backgroundColor: "#23fe53",
    paddingVertical: 8,
    marginTop: 20,
  },
  OpacityResetItem: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});

export default HomeScreen;
