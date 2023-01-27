import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

const LargeGrid1 = () => {
  return <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <View style={styles.col}>
            {
            /* YOUR CODE HERE */
          }
          <ImageBackground style={styles.wXtocYEs} source={require("./Screenshot 2023-01-27 at 7.01.57 PM.png")} resizeMode="cover"></ImageBackground></View>
          <View style={styles.col}>
            {
            /* YOUR CODE HERE */
          }
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            {
            /* YOUR CODE HERE */
          }
          </View>
          <View style={styles.col}>
            {
            /* YOUR CODE HERE */
          }
          </View>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gridContainer: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 5,
    padding: 5,
    justifyContent: "center"
  },
  col: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wXtocYEs: {
    width: 316,
    height: 325,
    position: "absolute",
    top: -20,
    left: 0,
    flexDirection: "column",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  }
});
export default LargeGrid1;