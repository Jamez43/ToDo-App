import React, { useState } from "react";
import { Dimensions, View, Text, TextInput, Button, StyleSheet } from "react-native";
import useItemStore from "./store";

const TaskList = () => {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const items = useItemStore((state) => state.items);
  const addItem = useItemStore((state) => state.addItem);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const editItem = useItemStore((state) => state.editItem);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleAddItem = () => {
    addItem(inputValue);
    setInputValue("");
  };

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  const handleEditItem = () => {
    setEditMode(true);
    setInputValue(items[editIndex]);
  };

  const handleSaveItem = () => {
    editItem(items[editIndex], inputValue);
    setEditMode(false);
    setInputValue("");
    setEditIndex(null);
  };

  return (
    <View>

      {items.map((item, index) => (
        <View
          key={index}
          style={{  marginLeft: 20, flexDirection: "row", alignItems: "flex-start" }}>
          <Text style={{ color: "white", fontSize: 25 }}>{item}</Text>
          <Button title="Delete" onPress={() => handleDeleteItem(item)} />
          <Button title="Edit" onPress={() => { setEditIndex(index); handleEditItem(); }} />
        </View>
      ))}


      {editMode ? (
        <View style={{ margin: 12, alignItems: "flex-start" }}>
          <TextInput
            style={{
              height: 40,
              width : Dimensions.get("window").width -20,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              color: "white",
            }}
            value={inputValue}
            onChangeText={handleInputChange}
          />
          <Button title="Save" onPress={handleSaveItem} />
        </View>
      ) : (
        <View style={{ margin: 12, alignItems: "flex-start" }}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              width : Dimensions.get("window").width -20,
              borderWidth: 1,
              padding: 10,
              color: "white",
            }}
            value={inputValue}
            onChangeText={handleInputChange}
          />
          <Button title="Add Item" onPress={handleAddItem} />
        </View>
      )}
    </View>
  );
};

export default TaskList;