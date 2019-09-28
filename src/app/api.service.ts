import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient,private auth :AuthService) { }
  

  
  public get  httpOptons(){
   const headers_o = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.auth.token}`
    });
   const  httpOptions = {
      headers: headers_o
    };
    return httpOptions;
  }

  public getList():Observable<Todo[]> {
    // requst list by userId
    return this.http.get<Todo[]>('http://localhost:1234/list',this.httpOptons)
    .pipe(
      tap(_ => console.log('fetched todo')),
      catchError(this.handleError<Todo[]>('getList', []))
    );

  }
  public updateList(list:Todo[]){
    this.http.put('http://localhost:1234/list/update',{'list':list},this.httpOptons).subscribe(x =>
    {
      console.log("updates",x);
    })
  }
  public getUserId():string{
   return localStorage.getItem('userId');
  }
  public setUserId(value:string){
    localStorage.setItem('userId',value);
  }
public Login(name,password){
   this.http.post(API_URL,{'name':name,'password':password})
}
  
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  // API: POST /todos
  public createTodo(todo: Todo) {
    // will use this.http.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // will use this.http.get()
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // will use this.http.put()
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
  }

}
