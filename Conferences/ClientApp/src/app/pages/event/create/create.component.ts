import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventObject } from 'src/app/models/Event';
import { EventService } from 'src/app/service/eventService';
import { Section } from '../../../models/Section';
import { SectionService } from '../../../service/sectionService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-events',
  templateUrl: './create.component.html'
})
export class CreateEventsComponent implements OnInit {
  Events: EventObject[] = [];
  event: EventObject = new EventObject();
  public sectionId: number = 0;
  public showAlert: boolean = false;

  constructor(private route: ActivatedRoute, private eventService: EventService, private _location: Location) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sectionId = params["sectionId"];
    });

    this.getAllEvents();
  }


  resetForm(): void {
    this.event = new EventObject();
  }

  getAllEvents(): void {
    this.eventService.getAllEvents(this.sectionId).subscribe((result: EventObject[]) => {
      this.Events = result;
    }, (err: any) => console.error(err));
  }

  createEvent(event: EventObject): void {
    event.SectionId = this.sectionId * 1;
    console.log(event)
    this.eventService
    .createEvent(event)
    .subscribe((event: EventObject) => this.Events.push(event));
    this.showAlert = true;
  }

  onCreateevent(): void {
    this.createEvent(this.event);
  }
  goBack(){
    this._location.back();
  }
}
