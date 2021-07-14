import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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

  onDelete(id: number) {}

  loadMore() {}
}
