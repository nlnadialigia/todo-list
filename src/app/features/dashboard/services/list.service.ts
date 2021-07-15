import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Injectable()
export class ListService {
  private _list!: Todo[];
  page = 0;

  constructor() {}

  get list() {
    return this._list;
  }

  set list(value) {
    this._list = value;
  }
}
