import { Todo } from './../todo-list/todo-list.component';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(name) {
    return this.http.get <Todo []>(`http://localhost:8081/users/${name}/todos`);

  }


  deleteTodoService(name, id) {
    return this.http.delete(`http://localhost:8081/users/${name}/todos/${id}`);
  }

  retriveTodo(name, id) {
    return this.http.get<Todo>(`http://localhost:8081/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    return this.http.put<Todo>(`http://localhost:8081/users/${name}/todos/${id}`, todo);
  }

  createTodo(name, todo) {
    return this.http.post<Todo>(`http://localhost:8081/users/${name}/todos`, todo);
  }
}
