import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from './../../../shared/services/todos.service';
import { ListService } from './../services/list.service';

@Component({
  selector: 'jv-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {
  list!: Todo[];

  constructor(
    private todosService: TodosService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.todosService.getList(0).subscribe((list: Todo[]) => {
      this.list = list;
      this.listService.list = list;
    });
  }

  markAsDone(id: number) {}

  handleCreated(todo: Todo) {
    this.list = [todo, ...this.list];
  }
}
