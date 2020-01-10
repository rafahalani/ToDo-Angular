import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl: 'http://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  getTodos() {
    return[
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
