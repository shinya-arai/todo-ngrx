import { TodoActionTypes, TodoActions } from './todo.actions';

export interface State {
  todoList: string[];
  todoItem: string;
}

export const initialState: State = {
  todoList: [],
  todoItem: '',
};

export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.Input:
      return {
        ...state,
        todoItem: action.payload.content,
      };

    default:
      return state;
  }
}
