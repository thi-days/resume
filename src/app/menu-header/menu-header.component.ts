import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume-service';
import { ResumeSection } from '../resume/resume-section';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  /** List of sections that will be used in the page */
  public resumeSections: ResumeSection[] = [];

  constructor(
    public resumeService: ResumeService
  ) { }

  ngOnInit() {
    // Getting resume sections from json file
    this.resumeService.getResumeSections().subscribe(result => {
      this.resumeSections = result;
    });
  }

}
