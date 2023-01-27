import { TextInput } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.HskqwoqS}><View style={styles.iLFRnesg}></View></View><TextInput style={styles.NnkwhfeH} value=""></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HskqwoqS: {
    height: 160,
    width: 347,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  iLFRnesg: {
    width: 80,
    height: 80,
    backgroundColor: "#df2727",
    borderRadius: 40,
    top: 110,
    left: 112
  },
  NnkwhfeH: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 344,
    height: 40,
    top: 266.5,
    left: 6.5,
    position: "absolute"
  }
});
export default Untitled2;