import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventObject } from 'src/app/models/Event';
import { EventService } from 'src/app/service/eventService';
import { Section } from '../../../models/Section';
import { SectionService } from '../../../service/sectionService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-events',
  templateUrl: './update.component.html'
})
export class UpdateEventsComponent implements OnInit {
  Events: EventObject[] = [];
  event: EventObject = new EventObject();
  public eventId: number = 0;
  public showAlert: boolean = false;

  constructor(private route: ActivatedRoute, private eventService: EventService, private _location: Location) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.eventId = params["eventId"];
    });

    this.getAffectedEvent();
  }


  resetForm(): void {
    this.event = new EventObject();
  }

  getAffectedEvent(): void {
    this.eventService.getAllEvents(this.eventId).subscribe((result: EventObject[]) => {
      this.Events = result;
    }, (err: any) => console.error(err));
  }

  updateEvent(event: EventObject): void {
    event.id = this.eventId * 1;
    console.log(event)
    this.eventService
    .updateEvent(event)
    .subscribe((event: EventObject) => this.Events.push(event));
    this.showAlert = true;
  }

  onUpdateevent(): void {
    this.updateEvent(this.event);
  }
  goBack(){
    this._location.back();
  }
}
