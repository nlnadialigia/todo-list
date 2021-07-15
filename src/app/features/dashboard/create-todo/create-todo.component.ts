import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from './../../../shared/services/todos.service';
import { ListService } from './../services/list.service';

@Component({
  selector: 'jv-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  titleControl = new FormControl('');

  list!: Todo[];

  @Output() created = new EventEmitter();

  constructor(
    private todosServices: TodosService,
    private listService: ListService
  ) {
    listService.list$.subscribe((list) => (this.list = list));
  }

  save() {
    this.todosServices
      .create({ title: this.titleControl.value })
      .subscribe((todo) => (this.listService.list = [todo, ...this.list]));
  }
}
