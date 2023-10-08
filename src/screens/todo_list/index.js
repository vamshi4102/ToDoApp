import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TodoItem from "../../components/TodoItem";
import AddToDo from "../../components/addTodo";
import styles from "./styles";
import {
  AddTodoItem,
  DeleteTodoItem,
  EditTodoItem,
} from "../../redux/actions/TodoActions";

import { connect, useSelector } from "react-redux";

const TodoListScreen = (props) => {
  const TheToDoList = useSelector((state) => state.thetodolist.ToDoList);
  const [ToDos, setToDos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [Input, setInput] = useState("");
  const [priority, setpriority] = useState(null);
  const [EditTodoId, setEditTodoId] = useState("");
  const [Errors, setErrors] = useState("");
  // -----
  const ChangePriority = (value) => {
    setpriority(value);
  };
  const OnSubmit = () => {
    console.log("beffore list", TheToDoList);
    var nextId = ToDos.length + 1;

    var newTodo = {
      id: nextId,
      name: Input,
      priority: priority,
    };
    setToDos([...ToDos, newTodo]);
    // props.AddTodoItem(Input,priority,TheToDoList);
    setInput("");
    setpriority(null);
    setModalVisible(false);
    console.log("list", TheToDoList);
  };
  const OnUpdate = () => {
    props.EditTodoItem(EditTodoId, Input, priority, props.Todos);
    setModalVisible(false);
    setInput("");
    setpriority(null);
    setEditTodoId(null);
  };
  const deleteTodo = (idToDelete) => {
    props.DeleteTodoItem(idToDelete, props.Todos);
  };
  const EditTodo = (id, name, priority) => {
    setInput(name);
    setpriority(priority);
    setEditTodoId(id);
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", marginTop: 50 }}>
      <FlatList
        data={ToDos}
        renderItem={({ item }) => (
          <TodoItem todo={item} deleteTodo={deleteTodo} EditTodo={EditTodo} />
        )}
        keyExtractor={(item) => item.id}
      />
      <AddToDo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Input={Input}
        setInput={setInput}
        priority={priority}
        ChangePriority={ChangePriority}
        OnSubmit={OnSubmit}
        OnUpdate={OnUpdate}
        EditTodoId={EditTodoId}
      />
      <TouchableOpacity
        style={styles.add_btn}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.add_btn_text}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  Todos: state.thetodolist.ToDoList,
});

const mapDispatchToProps = {
  AddTodoItem,
  EditTodoItem,
  DeleteTodoItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
