import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';
import { EmployeesupportComponent } from './employeesupport/employeesupport.component';
import { MainComponent } from './main/main.component';
import { SupportComponent } from './support/support.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { Users1Component } from './users1/users1.component';
import { User1AddComponent } from './user1-add/user1-add.component';
import { User1DetailsComponent } from './user1-details/user1-details.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { PropertyComponent } from './databinding/property/property.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    
    HomeComponent,
         AboutComponent,
         ContactComponent,
         CustomersupportComponent,
         EmployeesupportComponent,
         MainComponent,
         SupportComponent,
         UserAddComponent,
         UserDetailsComponent,
         UsersComponent,
         Users1Component,
         User1AddComponent,
         User1DetailsComponent,
         DatabindingComponent,
         EventbindingComponent,
         PropertyComponent,
         LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
