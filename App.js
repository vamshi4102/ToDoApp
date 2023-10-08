import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoListScreen from "./src/screens/todo_list";
import store from "./src/redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <TodoListScreen />
    </Provider>
  );
}
