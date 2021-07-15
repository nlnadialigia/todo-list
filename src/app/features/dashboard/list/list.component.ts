import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodosService } from './../../../shared/services/todos.service';
import { ListService } from './../services/list.service';

@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list!: Todo[];

  constructor(
    private todosServices: TodosService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.listService.list$.subscribe((list) => {
      this.list = list;
    });
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

  onDelete(id: number) {
    this.todosServices
      .remove(id)
      .subscribe(
        () => (this.list = this.list.filter((item) => item.id !== id))
      );
  }

  loadMore() {
    this.listService.page++;
    this.todosServices.getList(this.listService.page).subscribe((list) => {
      this.listService.list = [...this.list, ...list];
    });
  }
}
