import React from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";

const ListScreen = () => {
  const DATA = [
    {
      id: "1",
      name: "melih",
      desc: "isim1",
      age: 20,
      time: "Ocak",
    },
    {
      id: "2",
      name: "Serdar",
      desc: "isim2",
      age: 21,
      time: "Şubat",
    },
    {
      id: "3",
      name: "İlker",
      desc: "isim3",
      age: 22,
      time: "Mart",
    },
    {
      id: "4",
      name: "Sencer",
      desc: "isim4",
      age: 23,
      time: "Nisan",
    },
    {
      id: "5",
      name: "Görkem",
      desc: "isim5",
      age: 24,
      time: "Mayıs",
    },
    {
      id: "6",
      name: "Eymen",
      desc: "isim6",
      age: 25,
      time: "Haziran",
    },
    {
      id: "7",
      name: "Enes",
      desc: "isim7",
      age: 26,
      time: "Temmuz",
    },
    {
      id: "8",
      name: "Beyza",
      desc: "isim8",
      age: 27,
      time: "Ağustos",
    },
    {
      id: "9",
      name: "Erdem",
      desc: "isim9",
      age: 28,
      time: "Eylül",
    },
    {
      id: "10",
      name: "Efşan",
      desc: "isim10",
      age: 29,
      time: "Ekim",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Özet</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}>İsim</Text>
        <Text style={styles.heading}>Açıklama</Text>
        <Text style={styles.heading}>Değer</Text>
        <Text style={styles.heading}>Zaman</Text>
      </View>
      <FlatList
        // horizontal =>  Elemanları Yatay Sıralar. Elemanların Altında Scroll Bar Var.
        // showsHorizontalScrollIndicator={false} // Elemenların Altındaki Scroll Bar' ı Kaldırır.
        showsVerticalScrollIndicator={false} // Dikeyde Sıralanan Elemanların Scroll Bar'ını kaldırır.
        data={DATA}
        renderItem={({ item }) => {
          // item === { name: 'melih' }
          return (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.desc}</Text>
              <Text style={styles.cell}>{item.age}</Text>
              <Text style={styles.cell}>{item.time}</Text>
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
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  headerTopBar: {
    backgroundColor: "#A076F9",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  headerTopBarText: {
    color: "#fff",
    // fontFamily
    fontSize: 16,
  },
  header: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 12,
  },
  heading: {
    flex: 1,
    // fontFamily
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    marginHorizontal: 2,
    elevation: 2,
    borderRadius: 6,
    padding: 10,
    borderColor: "#F31559",
    backgroundColor: "#F5F5F5",
  },
  cell: {
    fontSize: 15,
    // fontFamily
    textAlign: "left",
    flex: 1,
  },
});

export default ListScreen;
