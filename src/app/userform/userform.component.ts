import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { Data1Service } from '../data/data1.service';
import { Userform } from '../data/user-form';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  originaluserform : Userform =
    {
      name : null,
      emailOffers : null,
      interfaceStyle : null,
      subscriptionType : null,
      notes : null
    };
    userform : Userform ={ ...this.originaluserform }; 
    postError = false;
    postErrorMessage ='';
    // subscriptionTypes =['one','two','three'];
    subscriptionTypes : Observable<string[]> | undefined;

  constructor(private dataService: Data1Service) { }
  ngOnInit() {
  this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field : NgModel){
    console.log('in onBlur: ',field.valid);
  }

  onHttpError(errorResponse: any){
    console.log('error:', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;

  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit:',form.valid);

    if (form.valid){
  this.dataService.postuserform(this.userform).subscribe(
    result => console.log('sucsess:',result),
    // error => console.log('error: ', error)
    error => this.onHttpError(error)
  ); 
  }
  else{
    this.postError = true;
    this.postErrorMessage = "please fix the error message";
  }
}


}
