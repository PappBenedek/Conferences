import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Conference } from '../models/Conference';


@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  public conferences: Conference[] = [];

  private _http: HttpClient;
  private _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  getAllConferences(): Observable<Conference[]> {
    return this._http.get<Conference[]>(this._baseUrl + 'conference');
  }

  createConference(conference: Conference): Observable<Conference> {
    return this._http.post<Conference>(this._baseUrl + 'conference', conference);
  }

  removeConference(conferenceId: number): any{
    return this._http.delete(this._baseUrl + `conference/DeleteById?id=${conferenceId}`);
  }
}


