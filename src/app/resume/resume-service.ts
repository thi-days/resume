import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {

  private data: any = null;
  private _http: Http;

  constructor(private http: Http) {
    this._http = http;
    console.log("I'm on ResumeService constructor!");
    this.getData();
  }

  getData() {
    console.log("I'm on ResumeService getData() method!");

    // This way we only call the json once
    if (this.data == undefined) {
      console.log("First call");
      this._http.get('assets/resumeData.json').map(data => this.data = data.json());
    }

    console.log("Retrun of this.data: ", this.data);
    return this.data;
  }

}
