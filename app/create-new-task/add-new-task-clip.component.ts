import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clips } from '../clips';


@Component({
	selector: 'vtl-add-new-task-clip',
	templateUrl: 'app/create-new-task/add-new-task-clip.component.html',
	styleUrls: ['app/create-new-task/add-new-task-clip.component.css']

})
export class AddNewTaskClipComponent implements  OnInit, AfterViewInit {


	ngAfterViewInit() {
			  $(document).ready(function(){
    				$('.collapsible').collapsible();
  				});
		}
	}
        
}