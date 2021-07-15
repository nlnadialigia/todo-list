import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodosService } from './../../../shared/services/todos.service';

@Component({
  selector: 'jv-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  titleControl = new FormControl('');

  @Output() created = new EventEmitter();

  constructor(private todosServices: TodosService) {}

  save() {
    this.todosServices
      .create({ title: this.titleControl.value })
      .subscribe((todo) => this.created.emit(todo));
  }
}
