import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

const routes: Routes = [
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGaurdService] },
  { path: '', component: LoginComponent },
  { path: 'todos', component: TodoListComponent, canActivate: [RouteGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGaurdService] },
  { path: 'todos/:id', component: TodoUpdateComponent, canActivate: [RouteGaurdService] },
  { path: '**', component: ErrorComponent, canActivate: [RouteGaurdService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
