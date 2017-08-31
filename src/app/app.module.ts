import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileNavComponent,
    SidebarComponent,
    MenuHeaderComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
