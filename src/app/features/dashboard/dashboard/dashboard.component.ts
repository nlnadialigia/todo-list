import { Component, ViewChild } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { UserContextService } from './../../../shared/services/user-context.service';
import { LastTodosComponent } from './../last-todos/last-todos.component';

@Component({
  selector: 'jv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild(LastTodosComponent, { static: false })
  lastTodos!: LastTodosComponent;

  constructor(public userContext: UserContextService) {}

  onCreated(todo: Todo) {
    this.lastTodos.handleCreated(todo);
  }
}
