import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  @Input()
  private portfolioData: Portfolio;

  constructor() { }

  ngOnInit() {
  }

}
