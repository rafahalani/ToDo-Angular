import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modules/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 1,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 1,
        title: 'Todo Three',
        completed: false
      }

    ];
  }

}
