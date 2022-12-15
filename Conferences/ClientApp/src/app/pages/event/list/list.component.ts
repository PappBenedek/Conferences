import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/service/sectionService';
import { Section } from '../../../models/Section';
//import 'rxjs/add/operator/filter';
import { Observable, of, Subject } from 'rxjs';
import {RouterModule} from '@angular/router';
import { EventService } from 'src/app/service/eventService';
import { EventObject } from 'src/app/models/Event';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-list-events',
  templateUrl: './list.component.html'
})
export class ListEventsComponent implements OnInit {
    public sectionId: number = 0;
    public events: EventObject[] = [];

    constructor(private route: ActivatedRoute, private eventService: EventService){
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.sectionId = params["secitonId"];
      });
      this.getAllEvents();
    }

    getAllEvents(): void {
      this.eventService.getAllEvents(this.sectionId).subscribe((result: EventObject[]) => {
        this.events = result;
      }, err => console.error(err));
    }
}