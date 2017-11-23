import { Component, OnInit, Input } from '@angular/core';
import { ResumeSections } from '../models/resume-sections.model';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  @Input()
  private resumeSections: ResumeSections;

  constructor() { }

  ngOnInit() {
  }

}
