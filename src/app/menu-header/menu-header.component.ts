import { Component, OnInit } from '@angular/core';
import { ResumeSections } from "../resume/resume-sections";

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  /** List of sections that will be used in the page */
  public resumeSections;

  constructor() { }

  ngOnInit() {
    // Get singleton instance
    this.resumeSections = ResumeSections.getInstance();
  }

}
