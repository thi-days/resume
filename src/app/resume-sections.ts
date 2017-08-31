import { ResumeSection } from "./resume-section";

export class ResumeSections extends Array<ResumeSection> {
  public createResumeSections() {
    this.push(new ResumeSection("about", "#about"));
    this.push(new ResumeSection("skills", "#skills"));
    this.push(new ResumeSection("portfolio", "#portfolio"));
    this.push(new ResumeSection("experience", "#experience"));
    this.push(new ResumeSection("references", "#references"));
    this.push(new ResumeSection("contact", "#contact"));
  }
}
