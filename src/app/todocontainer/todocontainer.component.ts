import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-todocontainer',
  templateUrl: './todocontainer.component.html',
  styleUrls: ['./todocontainer.component.css']
})
export class TodocontainerComponent implements OnInit  {
  listTodo:Todo[]=[];
  
  constructor(private apiService:ApiService,private auth :AuthService, private router: Router) { }
  logout(){
this.auth.log_out();
this.router.navigateByUrl('/sign-in');
  }
  ngOnInit() {
this.apiService.getList().subscribe(list =>{
  console.log(list);
  this.listTodo = JSON.parse(JSON.stringify(list));
});
  }
 
 
 onAddTodo(todo: Todo) {
  this.listTodo.push(todo);
  this.apiService.updateList(this.listTodo);
}



onToggleTodoComplete(todo: Todo) {
  todo.complete = !todo.complete; 
  this.apiService.updateList(this.listTodo);
 
}

onRemoveTodo(todo: Todo) {
  console.log(todo)
  this.listTodo = this.listTodo.filter(item => item.Created_date !== todo.Created_date);
  this.apiService.updateList(this.listTodo);
}

}
