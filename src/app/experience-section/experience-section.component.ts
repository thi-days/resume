import { Component, OnInit, Input } from '@angular/core';
import { WorkExperiences } from '../models/work-experiences.model';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {

  @Input()
  private workExpData: WorkExperiences;

  constructor() { }

  ngOnInit() {
  }

}
