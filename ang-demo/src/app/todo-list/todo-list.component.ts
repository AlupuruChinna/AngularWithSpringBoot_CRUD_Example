import { TodoServicesService } from './../service/todo-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public location: string,
    public date: Date
  ) { }
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  constructor(
    private todoService: TodoServicesService,
    private router: Router) { }


  // todos = [
  //   new Todo(1, 'chinna', 'nellore', new Date()),
  //   new Todo(2, 'chinna', 'nellore', new Date()),
  //   new Todo(3, 'chinna', 'nellore', new Date()),
  //   new Todo(4, 'chinna', 'nellore', new Date()),
  //   new Todo(5, 'chinna', 'nellore', new Date()),
  //   new Todo(6, 'chinna', 'nellore', new Date())

  // ] ;
  todos: Todo [] = [];
  alertMessage: string ;
  id: number;
  ngOnInit() {
        this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retriveAllTodos('smart').subscribe(
      response => {
        console.log(response),
    this.todos = response;
      }
    ) ;
  }
  deleteTodo(id) {
    // console.log(`delete todo ${id}`);
    this.todoService.deleteTodoService('smart', id).subscribe(
      respose => {
        console.log(respose),

        this.alertMessage = `Delete Your Todo ${id} successfullly`;
        this.refreshTodos();
      }

    );


}

updateTodo(id) {
  console.log(` update tod is ${ id } `);
  this.router.navigate(['todos', id] ) ;
  this.todoService.updateTodo('smart', this.id, this.todos ).subscribe
  (
    data => console.log(data)
  );
}

addNewTodo() {
  this.router.navigate(['todos', -1]);
}
}
