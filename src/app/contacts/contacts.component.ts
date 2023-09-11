import { Component, OnInit } from '@angular/core';
import { ContactList1 } from '../data1/contactlist1';

import { Contact } from '../entities/Contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  list: Contact[];

  constructor() {
    this.list= ContactList1;
   }

  ngOnInit(): void {
  }

}
