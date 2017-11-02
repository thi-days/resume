import { General } from './general.model';
import { About } from './about.model';
import { Social } from './social.model';
import { FreeDescription } from './free-description.model';
import { Skill } from './skill.model';
import { Portfolio } from './portfolio.model';
import { WorkExperience } from './work-experience.model';
import { Course } from './education.model';
import { Logo } from './logos.model';
import { Reference } from './reference.model';
import { Interest } from './interest.model';
import { Contact } from './contact.model';

export class Resume {

    general: General;
    about: About;
    social: Social;
    freeDescription: FreeDescription;
    skills: Skill[];
    portfolios: Portfolio[];
    experiences: WorkExperience[];
    education: Course[];
    logos: Logo[];
    references: Reference[];
    // pricing: Pricing[]; ???
    interests: Interest[];
    // calendar: Calendar[];
    contact: Contact;

    constructor() {
    }
}
