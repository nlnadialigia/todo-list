import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from './../../../shared/services/todos.service';

@Component({
  selector: 'jv-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {
  list!: Todo[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService
      .getList(0)
      .subscribe((list: Todo[]) => (this.list = list));
  }

  markAsDone(id: number) {}
}
