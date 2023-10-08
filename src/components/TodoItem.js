import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const TodoItem = (props) => {
  const [MenuVisible, setMenuVisible] = useState(false);

  return (
    <Pressable
      style={[
        styles.con,
        {
          backgroundColor:
            props.todo.priority === "high"
              ? "#F7D7DA"
              : props.todo.priority === "medium"
              ? "#FFF3CD"
              : props.todo.priority === "low"
              ? "#D4EDDA"
              : "#ccc",
        },
      ]}
      onPress={() => setMenuVisible(!MenuVisible)}
    >
      <Text style={styles.lable}>{props.todo.name}</Text>
      {MenuVisible && (
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              props.EditTodo(
                props.todo.id,
                props.todo.name,
                props.todo.priority
              )
            }
          >
            <Text style={[styles.btn_text, { color: "#3498db" }]}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.deleteTodo(props.todo.id)}
          >
            <Text style={[styles.btn_text, { color: "red" }]}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  // greem #4CB050
  // yellow #FFEB3C
  // red #F54236
  con: {
    width: "100%",
    backgroundColor: "#4CB050",
    alignSelf: "center",
    padding: 15,
    marginBottom: 10,
  },
  lable: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopColor: "#fff",
    borderTopWidth: 0.4,
    marginTop: 10,
  },
  button: {
    // width:70,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },
  btn_text: {
    fontSize: 13,
  },
});
