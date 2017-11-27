import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';
import { About } from '../models/about.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  private name: string;
  private email: string;
  private subject: string;
  private message: string;

  constructor() { }

  @Input()
  contactData: Contact;

  @Input()
  aboutData: About;

  ngOnInit() {
  }

  private sendMail(): void {
    window.open(`mailto:<${this.name}>${this.email}?subject=${this.subject}&body=${this.message}`, '_blank');
  }

}
