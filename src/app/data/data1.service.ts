import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../entities/User';
import { Userform } from './user-form';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {
  baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl="https://jsonplaceholder.typicode.com";
    
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annual' ,'Lifetime']);
  }

   

  postuserform(userform: Userform) : Observable<any>{

   return  this.http.post("https://putsreq.com/4xjpzVvk3owQEiCagYna",userform);
   // return of(userform);


 }
  addUser(user:User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`,user);
}
}