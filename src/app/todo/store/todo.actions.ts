import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  Input = '[Todo] Input',
  Create = '[Todo] Create',
  Delete = '[Todo] Delete',
  Update = '[Todo] Update',
}

export class Input implements Action {
  readonly type = TodoActionTypes.Input;

  constructor(public payload: { content: string }) {}
}

export class Create implements Action {
  readonly type = TodoActionTypes.Create;
}

export class Delete implements Action {
  readonly type = TodoActionTypes.Delete;
}

export class Update implements Action {
  readonly type = TodoActionTypes.Update;
}


export type TodoActions = Create | Delete | Update | Input;
