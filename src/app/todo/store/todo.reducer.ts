import { TodoActionTypes, TodoActions } from './todo.actions';
import { Todo } from '../../models/todo.model';

export interface State {
  todoList: Todo[];
  selectedTodo: Todo;
}

export const initialState: State = {
  todoList: [],
  selectedTodo: { id: null, content: '' },
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.Create:
      return {
        ...state,
        todoList: [ ...state.todoList, action.payload.todo ],
      };

    case TodoActionTypes.Delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.todo.id),
      };

    case TodoActionTypes.Update:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.todo.id ? action.payload.todo : todo),
      };

    case TodoActionTypes.Select:
      return {
        ...state,
        selectedTodo: state.todoList.find(todo => todo.id === Number(action.payload.id)),
      };

    default:
      return state;
  }
}

export const getTodoList = (state: State) => state.todoList;
export const getSelectedTodo = (state: State) => state.selectedTodo;
