export default function manageTodo(state = {
  todos: [],
}, action) {
// debugger
  console.log("reducer received this action:", action);
  switch(action.type){
    case 'ADD_TODO':
      console.log({ todos: state.todos.concat(action.payload.todo) })
      return {todos: state.todos.concat(action.payload.todo)}
  }
  return state;
}
