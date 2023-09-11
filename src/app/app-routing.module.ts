import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path:"", component: ContactsComponent },
  { path:"users",component:UsersComponent },
  { path:"form",component: ReactiveFormComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
