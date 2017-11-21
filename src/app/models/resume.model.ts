import { General } from './general.model';
import { About } from './about.model';
import { Social } from './social.model';
import { FreeDescription } from './free-description.model';
import { Portfolio } from './portfolio.model';
import { WorkExperience } from './work-experience.model';
import { Education } from './education.model';
import { Logo } from './logos.model';
import { Reference } from './reference.model';
import { Interest } from './interest.model';
import { Contact } from './contact.model';
import { ProfilePicture } from './profile-picture.model';
import { Skills } from './skills.model';

export class Resume {

    public profilePicture: ProfilePicture;
    public general: General;
    public about: About;
    public social: Social;
    public freeDescription: FreeDescription;
    public skills: Skills;
    public portfolios: Portfolio[];
    public experiences: WorkExperience[];
    public education: Education[];
    public logos: Logo[];
    public references: Reference[];
    // pricing: Pricing[]; ???
    public interests: Interest[];
    // calendar: Calendar[];
    public contact: Contact;

    constructor(createInternalElements: boolean = false) {
        if (createInternalElements) {
            this.createInternalElements();
        }
    }

    createInternalElements(): void {
        this.profilePicture = new ProfilePicture();
        this.general = new General();
        this.about = new About();
        this.social = new Social();
        this.freeDescription = new FreeDescription();
        this.contact = new Contact();
        this.skills = new Skills();
    }
}
