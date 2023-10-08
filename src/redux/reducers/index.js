import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
const TheReducers = combineReducers({
  thetodolist: TodoReducer,
});

export default TheReducers;
