import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jv-last-todos',
  templateUrl: './last-todos.component.html',
  styleUrls: ['./last-todos.component.scss']
})
export class LastTodosComponent implements OnInit {
  list = [
    {
      id: 0,
      createdAt: new Date(),
      title: 'Modelo 1',
      done: true
    },
    {
      id: 1,
      createdAt: new Date(),
      title: 'Modelo 2',
      done: false
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  markAsDone(id: number) {}
}
