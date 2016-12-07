"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var forms_1 = require("@angular/forms");
var angular2_datatable_1 = require('angular2-datatable');
var http_1 = require("@angular/http");
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var menu_component_1 = require('./menu/menu.component');
var my_active_tasks_component_1 = require('./my-active-tasks/my-active-tasks.component');
var table_component_1 = require('./table/table.component');
var create_new_task_component_1 = require('./create-new-task/create-new-task.component');
var add_new_task_clip_component_1 = require('./create-new-task/add-new-task-clip.component');
var manage_users_component_1 = require('./manage-users/manage-users.component');
var create_new_user_component_1 = require('./manage-users/create-new-user.component');
var login_component_1 = require('./login/login.component');
var data_filter_pipe_1 = require('./tasks/data-filter.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angular2_datatable_1.DataTableModule,
                http_1.HttpModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'create-new-task', component: create_new_task_component_1.CreateNewTaskComponent },
                    { path: 'create-new-task/:id', component: add_new_task_clip_component_1.AddNewTaskClipComponent },
                    { path: 'my-active-tasks', component: my_active_tasks_component_1.MyActiveTasksComponent },
                    { path: 'manage-users', component: manage_users_component_1.ManageUsersComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: '', redirectTo: 'my-active-tasks', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                menu_component_1.MenuComponent,
                my_active_tasks_component_1.MyActiveTasksComponent,
                table_component_1.TableComponent,
                create_new_task_component_1.CreateNewTaskComponent,
                add_new_task_clip_component_1.AddNewTaskClipComponent,
                manage_users_component_1.ManageUsersComponent,
                create_new_user_component_1.CreateNewUserComponent,
                login_component_1.LoginComponent,
                data_filter_pipe_1.DataFilterPipe],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map