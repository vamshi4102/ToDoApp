const initialState = {
  ToDoList: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return {
        ...state,
        ToDoList: action.AddTodo,
      };
      break;
    case "EDITTODO":
      return {
        ...state,
        ToDoList: action.updatedTodoList,
      };
      break;
    case "DELETETODO":
      return {
        ...state,
        ToDoList: action.DeletedTodoList,
      };
      break;

    default:
      return state;
      break;
  }
};

export default TodoReducer;
