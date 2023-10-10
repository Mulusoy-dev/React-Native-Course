import React from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";

const ListScreen = () => {
  const DATA = [
    {
      id: "1",
      name: "melih",
      age: 20,
    },
    {
      id: "2",
      name: "Serdar",
      age: 21,
    },
    {
      id: "3",
      name: "İlker",
      age: 22,
    },
    {
      id: "4",
      name: "Sencer",
      age: 23,
    },
    {
      id: "5",
      name: "Görkem",
      age: 24,
    },
    {
      id: "6",
      name: "Eymen",
      age: 25,
    },
    {
      id: "7",
      name: "Enes",
      age: 26,
    },
    {
      id: "8",
      name: "Beyza",
      age: 27,
    },
    {
      id: "9",
      name: "Erdem",
      age: 28,
    },
    {
      id: "10",
      name: "Efşan",
      age: 29,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Özet</Text>
      <FlatList
        // horizontal =>  Elemanları Yatay Sıralar. Elemanların Altında Scroll Bar Var.
        // showsHorizontalScrollIndicator={false} // Elemenların Altındaki Scroll Bar' ı Kaldırır.
        showsVerticalScrollIndicator={false} // Dikeyde Sıralanan Elemanların Scroll Bar'ını kaldırır.
        data={DATA}
        renderItem={({ item }) => {
          // item === { name: 'melih' }
          return (
            <View style={styles.ViewListStyle}>
              <Text style={styles.textHeadStyle}>{item.name}</Text>
              <Text style={styles.textValueStyle}>{item.age}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerText: {
    marginTop: 10,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "bold",
    marginStart: 20,
  },
  ViewListStyle: {
    marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 16,
    borderColor: "#102C57",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#F8F0E5",
  },
  textHeadStyle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textValueStyle: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default ListScreen;
