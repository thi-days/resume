import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume/resume-service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
  providers: [ResumeService]
})
export class AboutSectionComponent implements OnInit {

  aboutData: any;

  constructor(private _resumeService: ResumeService) {
    this.aboutData = _resumeService.getData();
    console.log('aboutData: ', this.aboutData['about']);
  }

  ngOnInit() {
  }

}
