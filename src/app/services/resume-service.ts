import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ResumeSection } from '../resume/resume-section';

@Injectable()
export class ResumeService {

  constructor(private http: Http) {
  }

  getResumeSections() {
    return this.http.get('assets/resumeSections.json')
      .map(response => response.json());
  }

  getResumeData() {
    return this.http.get('assets/resumeData.json')
      .map(response => response.json());
  }

}
