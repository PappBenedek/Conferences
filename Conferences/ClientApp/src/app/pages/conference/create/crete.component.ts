import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Conference } from '../../../models/Conference';
import { EventObject } from '../../../models/Event';
import { Section } from '../../../models/Section';
import { ConferenceService } from '../../../service/conferenceService';

@Component({
  selector: 'app-create-conference',
  templateUrl: './create.component.html',
})
export class CreateConferenceComponent implements OnInit{
  conferences: Conference[] = [];
  conference: Conference = new Conference();
  showAlert: boolean = false;


  constructor(private _conferenceService: ConferenceService) {
  }

  ngOnInit(): void {
    this.getAllConferences();
  }


  resetForm(): void {
    this.conference = new Conference();
  }

  getAllConferences(): void {
    this._conferenceService.getAllConferences().subscribe((result: Conference[]) => {
      this.conferences = result;
    }, err => console.error(err));
  }

  createConference(conference: Conference): void {
    this._conferenceService
    .createConference(conference)
    .subscribe(conference => this.conferences.push(conference));
    this.showAlert = true;
  }

  onCreateConference(): void {
    this.createConference(this.conference);
  }
}
