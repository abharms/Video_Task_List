import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/task';
import { TaskService } from '../tasks/task.service';

@Component({
	selector: 'vtl-my-active-tasks',
	templateUrl: 'app/my-active-tasks/my-active-tasks.component.html',
	styleUrls: ['app/my-active-tasks/my-active-tasks.component.css']

})
export class MyActiveTasksComponent implements OnInit {
	pageTitle: string = 'My Active Tasks';

}