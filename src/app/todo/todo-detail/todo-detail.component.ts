import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../../models/todo.model';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as todoReducer from '../store/todo.reducer';
import * as todoActions from '../store/todo.actions';
import { getSelectedTodo } from '../store';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  selectedTodo$: Observable<Todo>;
  id: number;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<todoReducer.State>,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.store.dispatch(new todoActions.Select({ id }));

      this.selectedTodo$ = this.store.select(getSelectedTodo);

      this.selectedTodo$.subscribe(state => {
        this.id = state.id;
        this.content = state.content;
      });
    });
  }

  update(): void {
    const todo = new Todo(this.id, this.content);
    this.store.dispatch(new todoActions.Update({ todo }));

    this.location.back();
  }

}
