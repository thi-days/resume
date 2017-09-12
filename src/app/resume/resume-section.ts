/** This is a section in this resume */
export class ResumeSection {
  /** Section's name */
  name: string;
  /** Section's absolute or relative URL */
  url: string;
  /** Section's status. If disabled, it should not appear in the UI */
  enabled: boolean;

  constructor(name: string, url: string, enabled: boolean = true) {
    this.name = name;
    this.url = url;
    this.enabled = enabled;
  }
}
