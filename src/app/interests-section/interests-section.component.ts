import { Component, OnInit, Input } from '@angular/core';
import { Interests } from '../models/interests.model';

@Component({
  selector: 'app-interests-section',
  templateUrl: './interests-section.component.html',
  styleUrls: ['./interests-section.component.css']
})
export class InterestsSectionComponent implements OnInit {

  @Input()
  private interestsData: Interests;

  constructor() { }

  ngOnInit() {
  }

}
