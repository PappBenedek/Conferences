import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventObject } from '../models/Event';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EventService{
    public events: EventObject[] = [];

    private _http: HttpClient;
    private _baseUrl: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseurl: string) {
        this._http = http;
        this._baseUrl = baseurl;
    }

    getAllEvents(sectionId: number): Observable<EventObject[]>{
        console.log(sectionId)
        return this._http.get<EventObject[]>(this._baseUrl + `event/getall?sectionId=${sectionId}`);
    }

    getEventById(eventId: number): Observable<EventObject>{ 
        console.log(eventId)
        return this._http.get<EventObject>(this._baseUrl + `event?eventId=${eventId}`);
    }

    updateEvent(ev: EventObject): Observable<EventObject>{
        console.log(ev)
        return this._http.post<EventObject>(this._baseUrl + 'event/update', ev);
    }

    createEvent(ev: EventObject): Observable<EventObject>{
        console.log(ev)
        return this._http.post<EventObject>(this._baseUrl + 'event/create', ev);
    }

    removeEvent(eventId: number): void{
        this._http.delete<EventObject>(this._baseUrl + `event?id=${eventId}`);
      }
}