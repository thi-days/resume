import { Component, OnInit, Input } from '@angular/core';
import { Skills } from '../models/skills.model';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  constructor() { }

  @Input()
  private skillsData: Skills;

  ngOnInit() {
  }

}
