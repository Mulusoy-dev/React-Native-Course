import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.buttonViewStyle}>
        <Button
          title="Increase"
          color="red"
          onPress={() => setCount(count + 1)}
        />
      </View>
      <View style={styles.buttonViewStyle}>
        <Button
          title="Decrease"
          color="black"
          onPress={() => setCount(count - 1)}
        />
      </View>
      <Text style={styles.textStyle}>Counter: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 50,
  },
  buttonViewStyle: {
    paddingBottom: 10,
  },

  textStyle: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default CounterScreen;
