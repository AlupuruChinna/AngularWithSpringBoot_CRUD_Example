import { Todo } from './../todo-list/todo-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServicesService } from './../service/todo-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(
    private service: TodoServicesService,
    private routerParam: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // this.id = this.routerParam.snapshot.params.id;
    this.id = this.routerParam.snapshot.params.id ;

    this.todo = new Todo(this.id, ' ', '', new Date());
    // it remove an error of date
    if (this.id != -1) {
      // don't place here !== it will give an error
      this.service.retriveTodo('smart', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    console.log(' Works fine .! ');
    if (this.id === -1) {

      // // create todo

      // this.service.createTodo('smart', this.todo)
      //   .subscribe(
      //     data => (
      //       console.log(data),
      //       this.router.navigate(['todos'])
      //     )
      //   );

    } else {
      this.service.updateTodo('smart', this.id, this.todo)
        .subscribe(
          data => (
            console.log(data),
            this.router.navigate(['todos'])
          )
        );
    }
  }
}
