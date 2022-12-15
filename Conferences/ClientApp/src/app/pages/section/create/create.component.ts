import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Section } from '../../../models/Section';
import { SectionService } from '../../../service/sectionService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './create.component.html'
})
export class CreateSectionComponent implements OnInit{
  Sections: Section[] = [];
  section: Section = new Section();
  public conferenceId: number = 0;
  public showAlert : boolean = false;

  constructor(private route: ActivatedRoute, private _SectionService: SectionService, private _location: Location) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.conferenceId = params["conferenceId"];
    });

    this.getAllSections();
  }


  resetForm(): void {
    this.section = new Section();
  }

  getAllSections(): void {
    this._SectionService.getAllSections(1).subscribe((result: Section[]) => {
      this.Sections = result;
      console.log(this.Sections)
    }, (err: any) => console.error(err));
  }

  createSection(Section: Section): void {
    Section.ConferenceId = this.conferenceId * 1;
    this._SectionService
    .createSection(Section)
    .subscribe((Section: Section) => this.Sections.push(Section));
    this.showAlert = true;
  }

  onCreateSection(): void {
    this.createSection(this.section);
  }
}
