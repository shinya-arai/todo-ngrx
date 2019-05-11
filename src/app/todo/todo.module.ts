import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [TodoComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('todo', fromTodo.reducers, { metaReducers: fromTodo.metaReducers })
  ],
  exports: [TodoComponent, TodoDetailComponent]
})
export class TodoModule { }
