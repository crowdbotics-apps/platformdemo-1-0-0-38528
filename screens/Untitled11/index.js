import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled11 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.BsbnTSBa}><View style={styles.nTijAJSs}></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  BsbnTSBa: {
    height: 173,
    width: 330,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  nTijAJSs: {
    width: 80,
    height: 80,
    backgroundColor: "#d8b52b",
    borderRadius: 40,
    position: "absolute",
    left: 130,
    top: 201
  }
});
export default Untitled11;