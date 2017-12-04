import { Component, OnInit, Input } from '@angular/core';
import { Logo } from '../models/logos.model';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.css']
})
export class ClientsSectionComponent implements OnInit {

  @Input()
  public clientsData: Logo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
