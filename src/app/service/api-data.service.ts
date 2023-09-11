import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';
import { User } from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  baseUrl: string;

  constructor(private http:HttpClient) {
    this.baseUrl= "https://jsonplaceholder.typicode.com";
   }
   getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
   }
   getUser(id : number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
   }
}
