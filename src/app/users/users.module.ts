import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';


const routes : Routes = [
  
  { path: 'users', component:UsersComponent},
  { path: 'users/:page', component:UsersComponent},
  { path: 'add-user', component:AddUserComponent},
  { path: 'edit-user/:id', component:AddUserComponent}
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    EditUserComponent
  ]
})
export class UsersModule { }
