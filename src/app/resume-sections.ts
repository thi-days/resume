import { ResumeSection } from "./resume-section";

/**
 * This class is an array of sections.
 * It respresents all the "menus" and "sections" in the resume
 */
export class ResumeSections extends Array<ResumeSection> {

  /** This method creates all the sections that will be used in the page */
  public createResumeSections() {
    this.push(new ResumeSection("about", "#about"));
    this.push(new ResumeSection("skills", "#skills"));
    this.push(new ResumeSection("portfolio", "#portfolio"));
    this.push(new ResumeSection("experience", "#experience"));
    this.push(new ResumeSection("references", "#references"));
    this.push(new ResumeSection("contact", "#contact"));
  }

  /** This method removes all sections added in current list */
  public clearResumeSections() {
    if (this.length > 0)
      this.splice(0, this.length);
  }

  /** This method remove all sections in this list and creates the default list */
  public resetResumeSections() {
    this.clearResumeSections();
    this.createResumeSections();
  }
}
