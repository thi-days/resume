import { ResumeSection } from "./resume-section";

/**
 * This class is an array of sections.
 * It respresents all the "menus" and "sections" in the resume
 */
export class ResumeSections {

  public sections: Array<ResumeSection> = [];

  /** This method creates all the sections that will be used in the page */
  public createResumeSections() {
    this.sections.push(new ResumeSection("about", "#about"));
    this.sections.push(new ResumeSection("skills", "#skills"));
    this.sections.push(new ResumeSection("portfolio", "#portfolio"));
    this.sections.push(new ResumeSection("experience", "#experience"));
    this.sections.push(new ResumeSection("references", "#references"));
    this.sections.push(new ResumeSection("contact", "#contact"));
  }

  /** This method removes all sections added in current list */
  clearResumeSections(): void {
    if (this.sections.length > 0)
      this.sections.splice(0, this.sections.length);
  }

  /** This method remove all sections in this list and creates the default list */
  resetResumeSections(): void {
    this.clearResumeSections();
    this.createResumeSections();
  }
}
