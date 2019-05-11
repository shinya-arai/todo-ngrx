import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum TodoActionTypes {
  Create = '[Todo] Create',
  Delete = '[Todo] Delete',
  Update = '[Todo] Update',
  Select = '[Todo] Select',
}

export class Create implements Action {
  readonly type = TodoActionTypes.Create;

  constructor(public payload: { todo: Todo }) {}
}

export class Delete implements Action {
  readonly type = TodoActionTypes.Delete;

  constructor(public payload: { todo: Todo }) {}
}

export class Update implements Action {
  readonly type = TodoActionTypes.Update;

  constructor(public payload: { todo: Todo }) {}
}

export class Select implements Action {
  readonly type = TodoActionTypes.Select;

  constructor(public payload: { id: number }) {}
}


export type TodoActions = Create | Delete | Update | Select;
