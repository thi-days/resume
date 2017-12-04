import { Component, OnInit, Input } from '@angular/core';
import { Social } from '../models/social.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  public socialData: Social;

  constructor() { }

  ngOnInit() {
  }

}
