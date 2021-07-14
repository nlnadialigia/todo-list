import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { LastTodosComponent } from './../last-todos/last-todos.component';

@Component({
  selector: 'jv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(LastTodosComponent, { static: false })
  lastTodos!: LastTodosComponent;

  constructor() {}

  ngOnInit(): void {}

  onCreated(todo: Todo) {
    this.lastTodos.handleCreated(todo);
  }
}
