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

  constructor(private todosServices: TodosService) {}

  ngOnInit(): void {
    this.todosServices.getList(0).subscribe((list) => (this.list = list));
  }

  markAsDone(id: number) {}

  onDelete(id: number) {}

  loadMore() {}
}
