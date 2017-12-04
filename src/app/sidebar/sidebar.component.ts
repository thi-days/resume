import { Component, OnInit, Input } from '@angular/core';
import { About } from '../models/about.model';
import { General } from '../models/general.model';
import { ProfilePicture } from '../models/profile-picture.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  public aboutData: About;

  @Input()
  public generalData: General;

  @Input()
  public profilePicture: ProfilePicture;

  constructor() { }

  ngOnInit() {
  }

}
