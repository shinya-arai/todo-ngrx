import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

import * as todoReducer from './store/todo.reducer';
import * as todoActions from './store/todo.actions';
import { getTodoList } from './store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList$: Observable<Todo[]>;
  content: string;

  constructor(private store: Store<todoReducer.State>) {
    this.todoList$ = store.select(getTodoList);
  }

  ngOnInit() {
  }

  create(): void {
    const todo = new Todo(Math.random(), this.content);
    this.store.dispatch(new todoActions.Create({ todo }));

    this.content = '';
  }

  delete(todo: Todo): void {
    this.store.dispatch(new todoActions.Delete({ todo }));
  }

}
