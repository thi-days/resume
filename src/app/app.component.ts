import { Component, OnInit } from '@angular/core';
import { ResumeService } from './services/resume-service';
import { Resume } from './models/resume.model';

/**
 * This component is the controller of the main (home?) page
 * It will control all the sections will be used in the page.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Resume fetched data that will be shared along all application
  // private resumeData: Resume = new Resume(true);
  private resumeData: Resume;

  constructor(
    // Dependency Injection of ResumeService
    private resumeService: ResumeService
  ) {
    //
  }

  ngOnInit() {
    // Get resume data from json file
    this.resumeService.getResumeData().subscribe(data => {
      console.warn(data);
      this.resumeData = data;
    });
  }
}
