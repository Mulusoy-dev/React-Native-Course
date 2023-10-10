import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = ({ name, imgSource }) => {
  return (
    <View style={styles.imageViewStyle}>
      <Image source={{ uri: imgSource }} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#F5F5F5",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 12,
  },
  textStyle: {
    paddingTop: 10,
    paddingEnd: 25,
    fontSize: 16,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
});

export default ImageDetail;
