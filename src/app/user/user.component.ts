import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // service: DemoService;
  greet: string;

  constructor( private service: DemoService) { 
    // this.service = new DemoService();
    this.greet = "";
  }

  ngOnInit(): void {
    this.greet = this.service.sayHello("capgemini");
  }

}
