import { Action } from '@ngrx/store';
import { TodoActionTypes } from './todo.actions';


export interface State {
  todoList: string[];
  todoItem: string;
}

export const initialState: State = {
  todoList: [],
  todoItem: '',
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case TodoActionTypes.Input:
      const { content } = action.payload;
      return {
        ...state,
        todoItem:
      };

    default:
      return state;
  }
}
