import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  console.log(color);

  return (
    <View style={styles.container}>
      <Button
        title="Add Color"
        onPress={() => {
          setColor([...color, randomRgb()]);
        }}
      />

      <FlatList
        data={color}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red} ${green} ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ColorScreen;
