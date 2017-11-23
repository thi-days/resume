import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ResumeSections } from '../models/resume-sections.model';
import { Resume } from '../models/resume.model';

@Injectable()
export class ResumeService {

  constructor(private http: Http) {
  }

  public getResumeSections(): Observable<ResumeSections> {
    return this.http.get('assets/resumeSections.json')
      .map(response => response.json());
  }

  getResumeData(): Observable<Resume> {
    return this.http.get('assets/resumeData.json')
      .map(response => response.json());
  }

}
