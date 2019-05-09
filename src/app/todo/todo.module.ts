import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', fromTodo.reducers, { metaReducers: fromTodo.metaReducers })
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
