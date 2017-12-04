import { Component, OnInit } from '@angular/core';
import { Resume } from './models/resume.model';
import { ResumeService } from './services/resume-service';
import { ResumeSections } from './models/resume-sections.model';

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
  public resumeData: Resume;
  public resumeSections: ResumeSections;

  constructor(
    // Dependency Injection of ResumeService
    public resumeService: ResumeService
  ) {
    //
  }

  ngOnInit() {
    // Get resume data from json file
    this.getResumeData();

    // Getting resume sections from json file
    this.getResumeSections();
  }

  private getResumeData(): void {
    this.resumeService.getResumeData().subscribe(data => {
      console.log(data);
      this.resumeData = data;
    });
  }

  private getResumeSections(): void {
    this.resumeService.getResumeSections().subscribe(result => {
      this.resumeSections = result;
    });
  }
}
