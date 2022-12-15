import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Conference } from '../models/Conference';
import { Section } from '../models/Section';


@Injectable({
    providedIn: 'root'
})

export class SectionService {
    public sections: Section[] = [];

    private _http: HttpClient;
    private _baseUrl: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseurl: string) {
        this._http = http;
        this._baseUrl = baseurl;
    }

    getAllSections(conferenceId: number): Observable<Section[]> {
        return this._http.get<Section[]>(this._baseUrl + `section/getall?conferenceId=${conferenceId}`);
    }

    createSection(section: Section): Observable<Section> {
        return this._http.post<Section>(this._baseUrl + 'section', section);
    }

    removeSection(sectionId: number): any{
        return this._http.delete<Section>(this._baseUrl + `section/delete?id=${sectionId}`);
    }
}