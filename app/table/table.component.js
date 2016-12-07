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
var core_1 = require("@angular/core");
var task_service_1 = require('../tasks/task.service');
var TableComponent = (function () {
    function TableComponent(_taskService) {
        this._taskService = _taskService;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._taskService.getTasks()
            .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return _this.errorMessage = error; });
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'vtl-table',
            templateUrl: './app/table/table.component.html',
            styleUrls: ['./app/table/table.component.css']
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map