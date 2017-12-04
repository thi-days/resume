import { Component, OnInit, Input } from '@angular/core';
import { ResumeSections } from '../models/resume-sections.model';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  @Input()
  public resumeSections: ResumeSections;

  constructor() { }

  ngOnInit() {
  }

}
