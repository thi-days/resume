import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../models/education.model';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  @Input()
  private educationData: Education;

  constructor() { }

  ngOnInit() {
  }

}
