import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Injectable()
export class ListService {
  list!: Todo[];

  constructor() {}
}
