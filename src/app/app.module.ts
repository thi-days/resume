import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { ReferencesSectionComponent } from './references-section/references-section.component';
import { PricesSectionComponent } from './prices-section/prices-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { InterestsSectionComponent } from './interests-section/interests-section.component';
import { CalendarSectionComponent } from './calendar-section/calendar-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MobileNavComponent,
    SidebarComponent,
    MenuHeaderComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ClientsSectionComponent,
    ReferencesSectionComponent,
    PricesSectionComponent,
    BlogSectionComponent,
    InterestsSectionComponent,
    CalendarSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
