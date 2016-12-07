import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule }  from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { MenuComponent }  from './menu/menu.component';
import { MyActiveTasksComponent } from './my-active-tasks/my-active-tasks.component';
import { TableComponent }  from './table/table.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { AddNewTaskClipComponent } from './create-new-task/add-new-task-clip.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateNewUserComponent } from './manage-users/create-new-user.component';
import { LoginComponent } from './login/login.component';
import { DataFilterPipe }   from './tasks/data-filter.pipe';





@NgModule({
  imports: [ 
  			BrowserModule,
  			DataTableModule,
        HttpModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'create-new-task', component: CreateNewTaskComponent },
            { path: 'create-new-task/:id', component: AddNewTaskClipComponent },
            { path: 'my-active-tasks', component: MyActiveTasksComponent },
            { path: 'manage-users', component: ManageUsersComponent },
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'my-active-tasks', pathMatch: 'full'}

          ])
      ],
  declarations: [ 
  		AppComponent,
  		HeaderComponent,
  		MenuComponent,
      MyActiveTasksComponent,
  		TableComponent,
  		CreateNewTaskComponent,
      AddNewTaskClipComponent,
      ManageUsersComponent,
      CreateNewUserComponent,
      LoginComponent,
      DataFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
