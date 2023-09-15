import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SupportComponent } from './support/support.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { Users1Component } from './users1/users1.component';
import { User1DetailsComponent } from './user1-details/user1-details.component';
import { DatabindingComponent } from './databinding/databinding.component';


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'users', component: UsersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-detail/:id', component: UserDetailsComponent},
  {path: 'users1', component: Users1Component},
  {path: 'user-detail1/:userId', component: User1DetailsComponent},
  {
    path: 'support', component: SupportComponent, children: [
    {path: '', component: EmployeesupportComponent},
    {path: 'employee-support', component: EmployeesupportComponent},
    {path: 'customer-support', component: CustomersupportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
