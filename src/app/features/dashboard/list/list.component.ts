import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from './../../../shared/services/todos.service';

@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list!: Todo[];
  page = 0;

  constructor(private todosServices: TodosService) {}

  ngOnInit(): void {
    this.todosServices.getList(0).subscribe((list) => (this.list = list));
  }

  markAsDone(id: number) {
    this.todosServices
      .toggleDone(id)
      .subscribe(
        (todo) =>
          (this.list = this.list.map((item) =>
            item.id === todo.id ? todo : item
          ))
      );
  }

  onDelete(id: number) {}

  loadMore() {
    this.page++;
    this.todosServices
      .getList(this.page)
      .subscribe((list) => (this.list = [...this.list, ...list]));
  }
}
