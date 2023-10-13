import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const TextScreen = () => {
  const [text, ChangeText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={ChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        placeholder="Input Text:"
        style={styles.textInputStyle}
      />

      {/* Data Entry Validation */}
      {text.length >= 5 ? (
        <Text style={styles.textStyle}>Your Input is: {text}</Text>
      ) : (
        <Text style={styles.textStyle}>
          Entry must be longer than 5 characters
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInputStyle: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#BEADFA",
    borderRadius: 12,
  },
  textStyle: {
    marginTop: 100,
  },
});

export default TextScreen;
