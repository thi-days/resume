import { Component, Input } from '@angular/core';
import { About } from '../models/about.model';
import { General } from '../models/general.model';
import { Social } from '../models/social.model';
import { FreeDescription } from '../models/free-description.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  @Input()
  private generalData: General;

  @Input()
  private aboutData: About;

  @Input()
  private socialData: Social;

  @Input()
  private freeDescription: FreeDescription;

  constructor() { }

}
