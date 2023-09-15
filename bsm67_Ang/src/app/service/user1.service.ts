import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User1 } from '../model/User1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User1Service {

  constructor(private http:HttpClient) { }
  getAllUsers1(): Observable<User1[]>{
    return this.http.get<User1[]>('http://localhost:8081/users/fetchAll/');
  }
  getUserById1(userId:number): Observable<User1>{
    return this.http.get<User1>('http://localhost:8081/users/'+userId);
  }
  // Add the signup method
  signup(user: User1): Observable<any> {
    return this.http.post('http://localhost:8081/users/signup', user);
  }
}
