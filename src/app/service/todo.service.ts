import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../modules/Todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // Get Todos
getTodos(): Observable<Todo[]> {
 return this.http.get<Todo[]>(this.todosUrl + this.todosLimit);
}
}
