import {Component, OnInit } from "@angular/core";
import {Http} from "@angular/http";
import { TaskService } from '../tasks/task.service';
import { ITask } from '../tasks/task';

@Component({
    selector: 'vtl-table',
    templateUrl: './app/table/table.component.html',
    styleUrls: ['./app/table/table.component.css']
})
export class TableComponent implements OnInit {

    tasks: ITask[];
    errorMessage: string;

    constructor(private _taskService: TaskService) {

    }

    ngOnInit(): void {
        this._taskService.getTasks()
            .subscribe(tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error);
    }
   

    
  
}