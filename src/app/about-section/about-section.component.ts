import { Component, Input } from '@angular/core';
import { About } from '../models/about.model';
import { General } from '../models/general.model';
import { Social } from '../models/social.model';
import { FreeDescription } from '../models/free-description.model';
import { ProfilePicture } from '../models/profile-picture.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  @Input()
  public generalData: General;

  @Input()
  public aboutData: About;

  @Input()
  public socialData: Social;

  @Input()
  public freeDescription: FreeDescription;

  @Input()
  public profilePicture: ProfilePicture;

  constructor() { }

}
