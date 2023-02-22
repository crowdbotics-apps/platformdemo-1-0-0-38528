import { ImageBackground } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        
    <View style={styles.EENXZKxE}><ImageBackground style={styles.INXyNypY} source={require("./photo-1596387451750-f7bfb51461ef.jpg")} resizeMode="cover"></ImageBackground></View><View style={styles.iCSCmWJT}><View style={styles.hzgHOJit}><ImageBackground style={styles.llYtiqRC} source={require("./profile-1495388545592-e4e376925c59.jpg")} resizeMode="cover"></ImageBackground></View></View></SafeAreaView>;
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
  },
  qzEaBfIw: {
    width: 120,
    height: 70
  },
  EENXZKxE: {
    height: 200,
    width: 357,
    backgroundColor: "#89c3de",
    borderRadius: 0,
    color: "#777777"
  },
  iCSCmWJT: {
    width: 112,
    height: 113,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    position: "absolute",
    left: 123,
    top: 124,
    transform: "rotate(0deg)",
    borderWidth: 3,
    borderColor: "#ffffff",
    flexDirection: "row",
    flex: "1"
  },
  llYtiqRC: {
    width: 97,
    height: 101,
    position: "absolute",
    left: 4,
    top: 1,
    transform: "rotate(0deg)"
  },
  hzgHOJit: {
    flex: 1
  },
  INXyNypY: {
    width: 357,
    height: 200
  }
});
export default Untitled2;