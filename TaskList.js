import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import useItemStore from './store';

 const TaskList = () => {
   const [inputValue, setInputValue] = useState('');
   const items = useItemStore((state) => state.items);
   const addItem = useItemStore((state) => state.addItem);
   const deleteItem = useItemStore((state) => state.deleteItem);
   const editItem = useItemStore((state) => state.editItem);

   const handleInputChange = (text) => {
     setInputValue(text);
   };

   const handleAddItem = () => {
     addItem(inputValue);
     setInputValue('');
   };

   const handleDeleteItem = (item) => {
     deleteItem(item);
   };


   return (
     <View>
       {items.map((item, index) => (
         <View key={index} style={{ margin:12, flexDirection: 'row', alignItems: 'flex-start' }}>
           <Text style={{color:"white", fontSize: 30}}>{item}</Text>
           <Button title="Delete" onPress={() => handleDeleteItem(item)} />
         </View>
       ))}
       <TextInput
         style={{ height: 40, borderColor: 'gray', borderWidth: 1,
         margin: 12, padding: 10, color:"white" }}
         value={inputValue}
         onChangeText={handleInputChange}
       />
       <Button title="Add Item" onPress={handleAddItem} />
     </View>
   );
 };

 export default TaskList;