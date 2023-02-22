import { Pressable } from "react-native";
import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        
    <View style={styles.EENXZKxE}><ImageBackground style={styles.INXyNypY} source={require("./photo-1596387451750-f7bfb51461ef.jpg")} resizeMode="cover"></ImageBackground></View><View style={styles.iCSCmWJT}><View style={styles.hzgHOJit}><ImageBackground style={styles.llYtiqRC} source={require("./profile-1495388545592-e4e376925c59.jpg")} resizeMode="cover"></ImageBackground></View></View><Text style={styles.ktUqwGtB}>Name</Text><TextInput style={styles.AvjfIyrm} value="" placeholder="Enter Name" placeholderTextColor="#aeacac"></TextInput><CheckBox style={styles.vkaDzBNS} title="Accept Terms" size={20} checked=""></CheckBox><Pressable onPress={() => navigation.navigate("largeGrid1", {})}><View style={styles.KmOqXnPi}><Text style={styles.cpQFxWcO}>Save</Text></View></Pressable></SafeAreaView>;
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
  },
  ktUqwGtB: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 35,
    top: 284
  },
  AvjfIyrm: {
    backgroundColor: "#fbf3fd",
    borderColor: "#cccccc",
    width: 291,
    height: 37,
    position: "absolute",
    left: 33,
    top: 305,
    color: "#ff0000"
  },
  QoEnQANs: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  bIOESxrb: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  vkaDzBNS: {
    width: 183,
    height: 69,
    position: "absolute",
    left: 26,
    top: 425
  },
  KmOqXnPi: {
    height: 41,
    width: 282,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    color: "#777777",
    position: "absolute",
    left: 41,
    top: 289,
    borderColor: "#000000"
  },
  cpQFxWcO: {
    width: 100,
    height: 22,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "relative",
    left: 91,
    top: 9.5,
    color: "#000000",
    opacity: 1,
    textAlign: "center"
  }
});
export default Untitled2;