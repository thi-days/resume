import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';
import { About } from '../models/about.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  public name: string;
  public email: string;
  public subject: string;
  public message: string;

  constructor() { }

  @Input()
  public contactData: Contact;

  @Input()
  public aboutData: About;

  ngOnInit() {
  }

  public sendMail(): void {
    window.open(`mailto:<${this.name}>${this.email}?subject=${this.subject}&body=${this.message}`, '_blank');
  }

}
