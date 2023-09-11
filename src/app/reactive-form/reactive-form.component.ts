import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data1Service } from '../data/data1.service';
import { User } from '../entities/User';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
form: FormGroup;
  constructor(private builder:FormBuilder, private http:Data1Service) {
    this.form = this.builder.group({
      'name':['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
      'username':['',Validators.required],
      'email':[''],
      'phone':['']
    })
   }
   submitForm(user: User){
    console.log(user);
    this.http.addUser(user).subscribe((response: any) =>{
      console.log('Response',response);
    });

   }
  ngOnInit(): void {
  }

}
