import { Component, OnInit, Input } from '@angular/core';
import { References } from '../models/references.model';

@Component({
  selector: 'app-references-section',
  templateUrl: './references-section.component.html',
  styleUrls: ['./references-section.component.css']
})
export class ReferencesSectionComponent implements OnInit {

  @Input()
  referencesData: References;

  constructor() { }

  ngOnInit() {
  }

}
