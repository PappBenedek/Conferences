import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/service/sectionService';
import { Section } from '../../../models/Section';
//import 'rxjs/add/operator/filter';
import { Observable, of, Subject } from 'rxjs';


@Component({
  selector: 'app-list-sections',
  templateUrl: './list.component.html'
})
export class ListSectionsComponent implements OnInit {
    public conferenceId: number = 0;
    public sections: Section[] = [];

    constructor(private route: ActivatedRoute, private sectionService: SectionService){
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.conferenceId = params["conferenceId"];
      });
      this.getAllSections();
    }

    getAllSections(): void {
      this.sectionService.getAllSections(this.conferenceId).subscribe((result: Section[]) => {
        this.sections = result;
      }, err => console.error(err));
    }
    deleteSection(sectionId: any){
      this.sectionService.removeSection(sectionId[0]).subscribe((result: any) =>{
        console.log(result)
        this.getAllSections();
      })
    }
}