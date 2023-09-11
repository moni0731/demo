import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() name:string;
  @Input() phone:string;
  @Input() email:string;
  @Input() gender:string;
  title:string;
  style:string;

  constructor() {
    this.name ='';
    this.phone = '';
    this.email = '' ;
    this.gender = '';
    this.title = '';
    this.style = '';
  }

  ngOnInit(): void {
    this.title = this.gender == 'M' ? 'Mr.' : 'Ms.';
    this.style = this.gender == 'M' ? 'male': 'female';
  //  if(this.gender == 'M'){
  //   this.title = 'Mr. ';
  //   this.style = 'male';
  // }
  // else{
  //   this.title = 'Ms.';
  //   this.style = 'female';
  // }
  }

}
