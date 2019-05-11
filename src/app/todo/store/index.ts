import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromTodo from './todo.reducer';

export interface State {

  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {

  todo: fromTodo.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTodoFeatureSelector = createFeatureSelector<State>('todo');
export const getTodo = createSelector(getTodoFeatureSelector, s => s.todo);

export const getTodoList = createSelector(getTodo, fromTodo.getTodoList);
export const getSelectedTodo = createSelector(getTodo, fromTodo.getSelectedTodo);
