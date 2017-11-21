import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  constructor() { }

  @Input()
  contactData: Contact;

  ngOnInit() {
  }

}
