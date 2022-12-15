import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../../service/conferenceService';
import { Conference } from '../../../models/Conference';

@Component({
  selector: 'app-list-conference',
  templateUrl: './list.component.html'
})
export class ListConferenceComponent implements OnInit {
  conferences: Conference[] = [];
  router: any;

  constructor(private _conferenceService: ConferenceService) {
  }
  ngOnInit(): void {
    this.getAllConferences();
  }

  getAllConferences(): void {
    this._conferenceService.getAllConferences().subscribe((result: Conference[]) => {
      this.conferences = result;
    }, err => console.error(err));
  }

  deleteConference(conferenceId: any){
    this._conferenceService.removeConference(conferenceId[0]).subscribe((result: any) =>{
      this.getAllConferences();
    })
  }
}


