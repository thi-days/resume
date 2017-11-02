import { Component, Input } from '@angular/core';
import { About } from '../models/about.model';
import { General } from '../models/general.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  @Input()
  private generalData: General = new General();

  @Input()
  private aboutData: About = new About();

  constructor() { }

}
