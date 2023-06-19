import { StatusBar } from "expo-status-bar";
import React from "react";
import TaskList from "./TaskList";
import { useState, ScrollView, View, Text, TextInput, Button, StyleSheet, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>To Do List:</Text>


      <ScrollView>
        <TaskList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: "black",
  },
  title: {
    marginTop: 40,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "top",
    color: "white",
    textDecorationLine: "underline",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "left",
    color: "black",
    borderColor: "white",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "black",
  },
  buttonContainer: {
    width: Dimensions.get("window").width,
    height: 50,
    alignItems: "center",
  },
  task:{
  fontSize: 20,
  color:"white",
  margin: 10,
  },
});



