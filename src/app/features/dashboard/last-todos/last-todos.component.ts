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
    if (!this.listService.list) {
      this.todosService.getList(0).subscribe((list: Todo[]) => {
        this.list = list;
        this.listService.list = list;
      });
    } else {
      this.list = this.listService.list.slice(0, 10);
    }
  }

  markAsDone(id: number) {
    this.todosService
      .toggleDone(id)
      .subscribe(
        (todo) =>
          (this.list = this.list.map((item) =>
            item.id === todo.id ? todo : item
          ))
      );
  }

  handleCreated(todo: Todo) {
    this.list = [todo, ...this.list];
  }
}
