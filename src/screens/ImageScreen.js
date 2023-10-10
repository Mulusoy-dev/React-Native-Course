import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <ImageDetail
        name="React Logo"
        imgSource="https://reactnative.dev/img/tiny_logo.png"
      />
      <ImageDetail
        name="Plus Logo"
        imgSource="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
      />
      <ImageDetail
        name="Tesla Logo"
        imgSource="https://reactnative.dev/img/showcase/tesla.png"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 15,
  },
});

export default ImageScreen;
