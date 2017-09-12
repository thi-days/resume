import { Component } from '@angular/core';
import { ResumeSections } from "./resume/resume-sections";

/**
 * This component is the controller of the main (home?) page
 * It will control all the sections will be used in the page.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Initialize all items that will be used in this controller */
  constructor() {
  }
}
