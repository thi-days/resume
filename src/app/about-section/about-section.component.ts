import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume/resume-service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  aboutData: any;

  constructor(private _resumeService: ResumeService) {
  }

  ngOnInit() {
    // this.subscribe.subscribe(response => this.aboutData = response);
  }

}
