import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo.model';

@Injectable()
export class ListService {
  page = 0;
  private listSubject = new BehaviorSubject<Todo[]>([]);

  get list$(): Observable<Todo[]> {
    return this.listSubject.asObservable();
  }

  set list(value: Todo[]) {
    this.listSubject.next(value);
  }
}
