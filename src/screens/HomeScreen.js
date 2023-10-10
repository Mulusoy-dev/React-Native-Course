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
  const [count, setCount] = useState(0);
  const onPress = () => setCount((ClickCount) => ClickCount + 1);
  const onResetCount = () => setCount(0);

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
      <TouchableOpacity onPress={onPress} style={styles.OpacityItem}>
        <Text>Click Count: {count}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onResetCount} style={styles.OpacityResetItem}>
        <Text>Reset Count</Text>
      </TouchableOpacity>
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
