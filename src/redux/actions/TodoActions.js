
export const AddTodoItem = (Input, priority, s) => {
  return (dispatch) => {
    if(s.length === 0){
        var nextId = 1;
    }
    else{
        var nextId = s.length + 1;
    }
  
    var newTodo = {
      id: nextId,
      name: Input,
      priority: priority,
    };
    dispatch({ type: "ADDTODO", AddTodo: [...s, newTodo] });
  };
};
export const EditTodoItem = (Id, Input, priority, s) => {
  return (dispatch) => {
    var newTodo = {
      id: Id,
      name: Input,
      priority: priority,
    };
    const updatedTodoList = s.map((todo) => {
      if (todo.id === newTodo.id) {
        return { ...newTodo };
      }
      return todo;
    });
    dispatch({ type: "EDITTODO", updatedTodoList: updatedTodoList });
  };
};
export const DeleteTodoItem = (Id, TodoList) => {
  return (dispatch) => {
    const DeletedTodoList = TodoList.filter((todo) => todo.id !== Id);
    dispatch({ type: "DELETETODO", DeletedTodoList: DeletedTodoList });
  };
};
